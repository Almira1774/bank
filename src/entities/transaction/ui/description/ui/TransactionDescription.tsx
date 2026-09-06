import type { TransactionStatus } from "@/entities/transaction/model/transactionStatus";
import { Box, Stack, Typography } from "@mui/material";
import {
    formatDate,
    formatTime,
    formatCurrency,
} from "../../../../../shared/lib/validation/formatters";
import {
    statusStylesMap,
    statusIconsMap,
    statusCreditMap,
} from "../../../lib/transactionDescriptionMaps";
import Divider from '@mui/material/Divider';
import { useTranslation } from "react-i18next";
import styles from "./TransactionDescription.module.css";
import type { TransactionDirection } from "@/entities/transaction/model/transactionDirection";


type DescriptionProps = {
    id: string;
    amount: number;
    type: TransactionDirection;
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
    type,
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
    const StatusIcon = statusIconsMap[status];
    return (

        <Stack className={styles.descriptionContainer}>

            <Box className={styles.transactionWrapper}>
                <Box className={styles.wrapper}>
                    <Typography>{t(`transactionDetails.labels.amount`)}</Typography>
                    <Typography>{statusCreditMap[type]}</Typography>
                    <Typography>{formattedAmount}</Typography>
                </Box>
                <Box className={styles.wrapper}>
                    <Typography>{t(`transactionDetails.labels.commission`)}</Typography>
                    <Typography>{commission}</Typography>
                </Box>


            </Box>
            <Divider variant="middle"
                className={styles.divider}></Divider>
            <Box className={styles.transactionWrapper}>
                <Box className={styles.wrapper}>
                    <Typography>{t(`transactionDetails.labels.sourceAccount`)}</Typography>
                    <Typography>{sourceAccountId}</Typography>
                </Box>

                <Box className={styles.wrapper}>
                    <Typography>{t(`transactionDetails.labels.category`)}</Typography>
                    <Typography>{t(`transactionDetails.category.${category}`)}</Typography>
                </Box>

                <Box className={styles.statusContainer}>
                    <Typography>{t(`transactionDetails.labels.status`)} </Typography>
                    <StatusIcon
                        className={`${styles.statusIcon} ${styles[statusStylesMap[status]]}`}></StatusIcon>
                    <Typography className={styles[statusStylesMap[status]]}>
                        {t(`transactionDetails.status.${status}`)}
                    </Typography>
                </Box>
            </Box>
            <Divider variant="middle"
                className={styles.divider}></Divider>
            <Box className={styles.transactionWrapper}>
                <Box className={styles.wrapper}>
                    <Typography>{t(`transactionDetails.labels.dateTime`)} </Typography>
                    <Box className={styles.date}>
                        <Typography >{formattedDate}</Typography>
                        <Typography>{formattedTime}</Typography>
                    </Box>

                </Box>
                <Box className={styles.wrapper}>
                    <Typography>{t(`transactionDetails.labels.merchantLocation`)} </Typography>
                    <Typography>{merchantLocation}</Typography>
                </Box>
                <Box className={styles.wrapper}>
                    <Typography>{t(`transactionDetails.labels.countryLabel`)} </Typography>
                    <Typography>{t(`transactionDetails.country.${country}`)}</Typography>
                </Box>
                <Box className={styles.wrapper}>
                    <Typography>{t(`transactionDetails.labels.transactionId`)} </Typography>
                    <Typography>{id}</Typography>
                </Box>
            </Box>

        </Stack>

    )
}

export { TransactionDescription };