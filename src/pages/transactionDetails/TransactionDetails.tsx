import { Header } from "@/widgets/header/ui/Header";
import { TransactionCard } from "@/widgets/transaction-card/TransactionCard";
import { Box, Typography } from "@mui/material"

const TransactionDetails = () => {
    return (
        <Box>
            <Header></Header>
            <TransactionCard />
        </Box>
    )
};

export default TransactionDetails;