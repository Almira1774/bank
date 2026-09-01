import { Box } from "@mui/material";
import type React from "react";

interface Transaction {
  icon: string;
  name: string;
  category: string;
  date: string;
  locate: string;
  country: string;
  transactionId: string;
  price: string;
  status: string;
  commission: string;
  transactionCode: string;
}

interface TransactionCardProps {
  transaction: Transaction;
  onClick?: () => void;
}

const TransactionCard: React.FC<TransactionCardProps> = () => {
  return (
    <Box>
      <Box>
        <div>Hello</div>
      </Box>
      <Box></Box>
    </Box>
  );
};

export { TransactionCard };
