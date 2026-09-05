import type { TransactionStatus } from "@/entities/transaction/model/transactionStatus";
import { Box, Stack, Typography } from "@mui/material";
import {
    formatDate,
    formatTime,
    formatCurrency,
} from "../../../../../shared/lib/validation/formatters"
import { useTranslation } from "react-i18next"
import styles from "./TransactionDescription.module.css";


type DescriptionProps = {
    id: string;
    amount: number;
    currency: string;
    commission: number;
    sourceAccountId: string;
    category: string;
    status: TransactionStatus;
    createdAt: string;
    country: string;
    merchantLocation: string;

}

const TransactionDescription = ({
    id,
    amount,
    currency,
    commission,
    sourceAccountId,
    category,
    status,
    createdAt,
    country,
    merchantLocation
}: DescriptionProps) => {


    const { t, i18n } = useTranslation();
    const formattedDate = formatDate(createdAt, i18n.language);
    const formattedTime = formatTime(createdAt, i18n.language);
    const formattedAmount = formatCurrency(amount, currency, i18n.language);
    return (

        <Stack>

            <Box >
                <Box className={styles.container}>
                    <Typography>{t(`transactionDetails.labels.amount`)}</Typography>
                    <Typography>{amount}</Typography>
                </Box>
                <Box className={styles.container}>
                    <Typography>{t(`transactionDetails.labels.commission`)}</Typography>
                    <Typography>{commission}</Typography>
                </Box>

            </Box>
            <Box>
                <Box className={styles.container}>

                    <Typography>{t(`transactionDetails.labels.sourceAccount`)}</Typography>
                    <Typography>{sourceAccountId}</Typography>
                </Box>
                <Box className={styles.container}>
                    <Typography>{t(`transactionDetails.labels.category`)}</Typography>
                    <Typography>{t(`transactionDetails.category.${category}`)}</Typography>
                </Box>
                <Box className={styles.container}>
                    <Typography>{t(`transactionDetails.labels.status`)} </Typography>
                    <Typography>{t(`transactionDetails.status.${status}`)}</Typography>
                </Box>
            </Box>
            <Box>
                <Box className={styles.container}>
                    <Typography>{t(`transactionDetails.labels.dateTime`)} </Typography>
                    <Typography>{formattedDate}</Typography>
                    <Typography>{formattedTime}</Typography>
                </Box>
                <Box className={styles.container}>
                    <Typography>{t(`transactionDetails.labels.merchantLocation`)} </Typography>
                    <Typography>{merchantLocation}</Typography>
                </Box>
                <Box className={styles.container}>
                    <Typography>{t(`transactionDetails.labels.countryLabel`)} </Typography>
                    <Typography>{t(`transactionDetails.country.${country}`)}</Typography>
                </Box>
                <Box className={styles.container}>
                    <Typography>{t(`transactionDetails.labels.transactionId`)} </Typography>
                    <Typography>{id}</Typography>
                </Box>
            </Box>

            <Stack></Stack>
        </Stack>

    )
}

export { TransactionDescription };