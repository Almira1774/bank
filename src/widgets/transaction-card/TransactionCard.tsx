import type { TransactionDetailsResponse } from "@/entities/transaction/model/transaction.types";
import { Box } from "@mui/material";
import { ShortDescription } from "../../entities/transaction/ui/shortDescription/ui/ShortDescription";
import { TransactionDescription } from "@/entities/transaction/ui/description/ui/TransactionDescription";




const TransactionCard = ({ transaction }: { transaction: TransactionDetailsResponse }) => {
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
      <TransactionDescription
        id={transaction.id}
        type={transaction.type}
        amount={transaction.amount}
        commission={transaction.commission}
        currency={transaction.currency}
        sourceAccountId={transaction.sourceAccountId}
        category={transaction.category}
        status={transaction.status}
        createdAt={transaction.createdAt}
        country={transaction.country}
        merchantLocation={transaction.merchantLocation} />
    </Box>
  );
};

export { TransactionCard };
