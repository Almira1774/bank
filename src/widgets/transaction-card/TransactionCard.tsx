import type { TransactionDetailsResponse } from "@/entities/transaction/model/transaction.types";
import { Box } from "@mui/material";
import { ShortDescription } from "./ShortDescription";




const TransactionCard = ({transaction}:{transaction:TransactionDetailsResponse}) => {
  return (
    <Box> 
      <ShortDescription 
      icon={transaction.icon}
      name={transaction.name}
      status={transaction.status}
      amount={transaction.amount}
      createdAt={transaction.createdAt}
      category={transaction.category}

      />
      <Box>
        <Box></Box>
        <Box></Box>
        <Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export { TransactionCard };
