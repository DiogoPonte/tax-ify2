import { Stack } from '@mui/material'
import { ResultCard } from './card/ResultCard'
import { calculatedResultsType } from './PreviewData'


const ResultCards = ({ results }: { results: calculatedResultsType }) => {
    return (
        <Stack direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{ pb: 4 }}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                <ResultCard header="Lucro"
                    content={results.capitalGains.toFixed(2)}
                    footer="Lucros" footerSecondary="totais"
                    contentColor="success.light"
                    infoHover='Uma mais valia de capital ocorre quando o preço de venda do ativo é superior ao preço de aquisição e as despesas incorridas na mesma'
                    infoDirection='left'
                />
                <ResultCard header="Prejuizos"
                    content={results.capitalLosses.toFixed(2)}
                    footer="Prejuizos" footerSecondary="totais"
                    contentColor="error.light"
                    infoHover='Uma menos valia de capital ocorre quando o preço de venda do ativo é inferior ao preço de aquisição e as despesas incorridas na mesma'
                    infoDirection='right'
                />
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                <ResultCard header="Total de gastos"
                    content={results.acquisitionFees.toFixed(2)}
                    footer=""
                    footerSecondary="Total de compras + comissões"
                    contentColor="error.light"
                    infoHover='Custo total da aquisição dos titúlos e custos de transação.'
                    infoDirection='left'
                />
                <ResultCard header="Total de proveitos"
                    content={results.sellprices.toFixed(2)}
                    footer=""
                    footerSecondary="Total de vendas - comissões"
                    contentColor={results.sellprices > 0 ? 'success.light' : 'error.light'}
                    infoHover='Proveitos totais dos titulos vendidos, deduzidos dos custos de transação de venda'
                    infoDirection='right'
                />
            </Stack>
        </Stack>)
}

export default ResultCards