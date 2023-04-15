const degiroPtToEn = {
    "Data": "date",
    "Hora": "time",
    "Produto": "security",
    "ISIN": "ISIN",
    "Bolsa de": "reference",
    "Bolsa": "venue",
    "Quantidade": "quantity",
    "Preços": "rate",
    "Preços-Moeda": "rateCurrency",
    "Valor local": "marketValue",
    "Valor local-Moeda": "marketValueCurrency",
    "Valor": "value",
    "Valor-Moeda": "valueCurrency",
    "Taxa de Câmbio": "exchangeRate",
    "Custos de transação": "transactionCosts",
    "Transaction and/or third": "transactionCosts",
    "Transaction and/or third-valuutta": "transactionCostsCurrency",
    "Custos de transação-Moeda": "transactionCostsCurrency",
    "Total": "totalAmount",
    "Total-Moeda": "totalAmountCurrency",
    "ID da Ordem": "orderId"
}

const translateDegiro = (key: keyof typeof degiroPtToEn) => {
    if (degiroPtToEn[key]) {
        return degiroPtToEn[key]
    }
}

export default translateDegiro;