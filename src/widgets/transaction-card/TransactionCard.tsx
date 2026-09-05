import type { TransactionDetailsResponse } from "@/entities/transaction/model/transaction.types";
import { Box } from "@mui/material";
import { ShortDescription } from "../../entities/transaction/ui/shortDescription/ui/ShortDescription";




const TransactionCard = ({transaction}:{transaction:TransactionDetailsResponse}) => {
  return (
    <Box> 
      <ShortDescription 
      currency={transaction.currency}
      icon={transaction.icon}
      name={transaction.name}
      status={transaction.status}
      amount={transaction.amount}
      createdAt={transaction.createdAt}
      category={transaction.category}
      type={transaction.type}

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
