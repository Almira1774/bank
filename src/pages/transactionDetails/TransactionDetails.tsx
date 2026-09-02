import { Header } from "@/widgets/header/ui/Header";
import { TransactionCard } from "@/widgets/transaction-card/TransactionCard";
import { Box, Typography } from "@mui/material";
import { transactionDetailsMocks } from "@/entities/transaction/model/transactionDetailsMock";
import { useParams } from "react-router-dom";


const TransactionDetails = () => {

  const params = useParams();
  const id = params.id;


  const currentTransaction = transactionDetailsMocks?.find(el => el.id === id)
  if (currentTransaction === undefined) {
    return (
      <Box><Typography>Данные не загрузились</Typography></Box>
    )
  }
  return (
    <Box>
      <Header></Header>
      <TransactionCard
        transaction={currentTransaction} />
    </Box>
  );
};

export default TransactionDetails;
