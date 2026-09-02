import type { TransactionDetailsResponse } from "@/entities/transaction/model/transaction.types";
import { Box } from "@mui/material";




const TransactionCard = ({transaction}:{transaction:TransactionDetailsResponse}) => {
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
