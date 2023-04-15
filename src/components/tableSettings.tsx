import { GridColTypeDef, GridColumns } from '@mui/x-data-grid';

export interface ColumnTransaction {
    id: 'ticker' | 'buydate' | 'selldate' | 'amountsold' | 'transferPrice' | 'acquisitionPrice' | 'acquisitionFee' | 'transferFee' | 'profitOrLoss';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

export const currencyFormatter = (value: any) => new Intl.NumberFormat('fi-FI', {
    style: 'currency',
    currency: value,
});

const validateOperation = (operation: any) => {
    return operation === "BUY" || operation === "SELL"
}

const validateCurrency = (currencyInput: any) => {
    const string = String(currencyInput) ?? ""
    return string.split(' ').length === 2
}

const currencyFormat: GridColTypeDef = {
    type: 'string',
    valueFormatter: ({ value }) => {
        const str = String(value) ? String(value) : "0 EUR"
        const arr = str.split(' ').length === 2 ? str.split(' ') : "0 EUR"
        try {
            return currencyFormatter(arr[1]).format(Number(arr[0]))
        } catch (e) {
            return str
        }

    },
    cellClassName: 'font-tabular-nums',
};

const currencyFormatResults: GridColTypeDef = {
    type: 'number',
    valueFormatter: ({ value }) => {
        const str = String(value) ? String(value) : "0 EUR"
        const arr = str.split(' ').length === 2 ? str.split(' ') : "0 EUR"
        try {
            return currencyFormatter(arr[1]).format(Number(arr[0]))
        } catch (e) {
            return new Intl.NumberFormat('fi-FI', {
                style: 'currency',
                currency: "EUR",
            }).format(Number(str))
        }

    },
    cellClassName: 'font-tabular-nums',
};

const timeFormat: GridColTypeDef = {
    type: 'dateTime',
    valueFormatter: ({ value }) => {
        const date = new Date(value as any);
        const options: any = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        };

        return date.toLocaleString("en-GB", options);
    },
    cellClassName: 'font-tabular-nums',
};

const columnsSecurity: GridColumns = [
    { field: 'data', headerName: 'Data', ...timeFormat, editable: true, minWidth: 180, },
    {
        field: 'operation', headerName: 'Operação', type: 'string', editable: true, minWidth: 40,
        preProcessEditCellProps: (params) => {
            const isValid = validateOperation(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
    { field: 'produto', headerName: 'Produto', type: 'string', editable: true, minWidth: 240 },
    {
        field: 'valor', headerName: 'Valor', editable: true, minWidth: 120,
        ...currencyFormat,
        preProcessEditCellProps: (params) => {
            const isValid = validateCurrency(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
    { field: 'quantidade', headerName: 'Quantidade', type: 'number', editable: true, minWidth: 50 },
    {
        field: 'preço', headerName: 'Preço', editable: true, minWidth: 120,
        ...currencyFormat,
        preProcessEditCellProps: (params) => {
            const isValid = validateCurrency(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
    {
        field: 'custos', headerName: 'custos', type: 'number', editable: true, minWidth: 110,
        ...currencyFormat,
        preProcessEditCellProps: (params) => {
            const isValid = validateCurrency(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
    {
        field: 'total', headerName: 'Total', editable: true, minWidth: 170,
        ...currencyFormat,
        preProcessEditCellProps: (params) => {
            const isValid = validateCurrency(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
];




const columnsCrypto: GridColumns = [
    { field: 'data', headerName: 'Data', ...timeFormat, editable: true, minWidth: 180, },
    {
        field: 'operation', headerName: 'Operação', type: 'string', editable: true, minWidth: 140,
        preProcessEditCellProps: (params) => {
            const isValid = validateOperation(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
    { field: 'produto', headerName: 'Security', type: 'string', editable: true, minWidth: 120 },
    {
        field: 'valor', headerName: 'Valor', editable: true, minWidth: 120,
        ...currencyFormat,
        preProcessEditCellProps: (params) => {
            const isValid = validateCurrency(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
    { field: 'quantidade', headerName: 'Quantidade', type: 'number', editable: true, minWidth: 120 },
    {
        field: 'preço', headerName: 'Preço', editable: true, minWidth: 120,
        ...currencyFormat,
        preProcessEditCellProps: (params) => {
            const isValid = validateCurrency(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
    {
        field: 'custos', headerName: 'custos', type: 'number', editable: true, minWidth: 110,
        ...currencyFormat,
        preProcessEditCellProps: (params) => {
            const isValid = validateCurrency(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
    {
        field: 'total', headerName: 'Total', editable: true, minWidth: 170,
        ...currencyFormat,
        preProcessEditCellProps: (params) => {
            const isValid = validateCurrency(params.props.value);
            return { ...params.props, error: !isValid };
        },
    },
];


const columnsTransaction = (mode: 'CRYPTO' | 'SECURITY'): GridColumns => [
    { field: 'ticker', headerName: 'Produto', type: 'string', editable: false, minWidth: mode === 'CRYPTO' ? 50: 250 },
    { field: 'buydate', headerName: 'Data de Compra', type: 'date', editable: false, minWidth: 120 },
    { field: 'selldate', headerName: 'Data de Venda', type: 'date', editable: false, minWidth: 120 },
    { field: 'amountsold', headerName: 'Quantidade vendida', type: 'number', editable: false, minWidth: 50 },
    {
        field: 'transferPrice', headerName: 'Preço de venda', editable: false, minWidth: 120, ...currencyFormatResults,
    },
    { field: 'acquisitionPrice', headerName: 'Preço de compra', ...currencyFormatResults, editable: false, minWidth: 120 },
    { field: 'acquisitionFee', headerName: 'Comissões de compra', ...currencyFormatResults, editable: false, minWidth: 120 },
    { field: 'transferFee', headerName: 'Comissões de venda', ...currencyFormatResults, editable: false, minWidth: 120 },
    { field: 'profitOrLoss', headerName: 'Lucro/Prejúizo', ...currencyFormatResults, editable: false, minWidth: 120 },
];


export interface ColumnDataSecurity {
    readonly id: string;
    data: Date;
    produto: string;
    isin: string;
    valor: string;
    quantidade: number;
    custos: string;
    preço: string;
    total: string;
    operation: string;
}


export interface ColumnDataCrypto {
    readonly id: string;
    data: Date;
    operation: string;
    produto: string;
    valor: string;
    quantidade: number;
    custos: string;
    preço: string;
    total: string;
}


export interface ColumnDataTransaction {
    readonly id: number;
    ticker: string
    buydate: Date
    selldate: Date
    amountsold: number
    transferPrice: number
    acquisitionPrice: number
    acquisitionFee: number
    transferFee: string
    profitOrLoss: string
}



export { columnsSecurity, columnsCrypto, columnsTransaction }
