import { Box, Button, Typography } from "@mui/material";
import TransactionItem from "../../shared/ui/transactionItem/TransactionItem";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../shared/config/routes";
import { transactions } from "@/entities/transaction";
import styles from "./TransactionLatest.module.css";

const TRANSACTION_LIMIT = 5;

export const TransactionLatest = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();


  const data = transactions.slice(0, TRANSACTION_LIMIT)
  return (
    <Box component="section" className={styles.container}>
      <Box component="div" className={styles.titleContainer}>
        <Typography className={styles.title}>{t("transactionLatest.title")}</Typography>
        <Button onClick={() => navigate(AppRoutes.TRANSACTION_HISTORY)}>
          {t("transactionLatest.seeAll")}
        </Button>
      </Box>
      <Box className={styles.transitionsContainer}>
        {data?.map((transaction) => (
          <TransactionItem
            onClick={() => navigate(`/transaction-history/${transaction.id}`)}
            key={transaction.id}
            icon={transaction.icon}
            name={transaction.name}
            category={transaction.category}
            price={transaction.amount}
          />
        ))}
      </Box>
    </Box>
  );
};
