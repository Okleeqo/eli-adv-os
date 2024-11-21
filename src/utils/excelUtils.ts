import { read, utils, write } from 'xlsx';

interface FinancialData {
  pricePerUnit: number;
  unitsSold: number;
  revenue: number;
  cogs: number;
  grossProfit: number;
  variableExpenses: number;
  fixedExpenses: number;
  operatingProfit: number;
  interestRatePaid: number;
  interestExpense: number;
  otherExpenses: number;
  otherIncomes: number;
  netIncome: number;
  payableDays: number;
  receivableDays: number;
  inventoryDays: number;
  fixedAssets: number;
}

const templateStructure = [
  ['Financial Data Template', ''],
  ['', ''],
  ['Input Values', 'Amount'],
  ['Price per Unit ($)', ''],
  ['Units Sold', ''],
  ['COGS ($)', ''],
  ['Variable Expenses ($)', ''],
  ['Fixed Expenses ($)', ''],
  ['Interest Rate (%)', ''],
  ['Other Expenses ($)', ''],
  ['Other Income ($)', ''],
  ['Payable Days', ''],
  ['Receivable Days', ''],
  ['Inventory Days', ''],
  ['Fixed Assets ($)', '']
];

const fieldMappings = {
  'price per unit': 'pricePerUnit',
  'units sold': 'unitsSold',
  'cogs': 'cogs',
  'variable expenses': 'variableExpenses',
  'fixed expenses': 'fixedExpenses',
  'interest rate': 'interestRatePaid',
  'other expenses': 'otherExpenses',
  'other income': 'otherIncomes',
  'payable days': 'payableDays',
  'receivable days': 'receivableDays',
  'inventory days': 'inventoryDays',
  'fixed assets': 'fixedAssets'
};

export const downloadTemplate = () => {
  const ws = utils.aoa_to_sheet(templateStructure);
  
  // Set column widths
  ws['!cols'] = [{ wch: 25 }, { wch: 15 }];
  
  // Style headers
  ws['A1'] = { v: 'Financial Data Template', s: { font: { bold: true, sz: 14 } } };
  ws['A3'] = { v: 'Input Values', s: { font: { bold: true } } };
  ws['B3'] = { v: 'Amount', s: { font: { bold: true } } };

  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, 'Financial Data');
  
  const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { 
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
  });
  
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'financial_data_template.xlsx';
  link.click();
  window.URL.revokeObjectURL(url);
};

export const parseExcelFile = (file: File): Promise<FinancialData> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        if (!e.target?.result) {
          throw new Error('Failed to read file');
        }

        const data = new Uint8Array(e.target.result as ArrayBuffer);
        const workbook = read(data, { type: 'array' });
        
        if (!workbook.SheetNames.length) {
          throw new Error('No sheets found in the Excel file');
        }

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = utils.sheet_to_json(worksheet, { header: 1 }) as any[][];

        const rawData: { [key: string]: number } = {};

        // Process each row and extract values
        rows.forEach(row => {
          if (!Array.isArray(row) || row.length < 2) return;
          
          const label = String(row[0]).toLowerCase().trim();
          const value = row[1];

          // Find matching field from mappings
          Object.entries(fieldMappings).forEach(([key, field]) => {
            if (label.includes(key)) {
              const numValue = typeof value === 'number' ? value : Number(value);
              if (!isNaN(numValue)) {
                rawData[field] = numValue;
              }
            }
          });
        });

        // Calculate derived values
        const revenue = (rawData.pricePerUnit || 0) * (rawData.unitsSold || 0);
        const grossProfit = revenue - (rawData.cogs || 0);
        const operatingProfit = grossProfit - (rawData.variableExpenses || 0) - (rawData.fixedExpenses || 0);
        const interestExpense = revenue * ((rawData.interestRatePaid || 0) / 100);
        const netIncome = operatingProfit - interestExpense - (rawData.otherExpenses || 0) + (rawData.otherIncomes || 0);

        const financialData: FinancialData = {
          pricePerUnit: rawData.pricePerUnit || 0,
          unitsSold: rawData.unitsSold || 0,
          revenue,
          cogs: rawData.cogs || 0,
          grossProfit,
          variableExpenses: rawData.variableExpenses || 0,
          fixedExpenses: rawData.fixedExpenses || 0,
          operatingProfit,
          interestRatePaid: rawData.interestRatePaid || 0,
          interestExpense,
          otherExpenses: rawData.otherExpenses || 0,
          otherIncomes: rawData.otherIncomes || 0,
          netIncome,
          payableDays: rawData.payableDays || 0,
          receivableDays: rawData.receivableDays || 0,
          inventoryDays: rawData.inventoryDays || 0,
          fixedAssets: rawData.fixedAssets || 0
        };

        resolve(financialData);
      } catch (error) {
        console.error('Excel parsing error:', error);
        reject(new Error('Please ensure you are using the correct template format and all values are numbers.'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read the Excel file. Please try again.'));
    };
    
    reader.readAsArrayBuffer(file);
  });
};