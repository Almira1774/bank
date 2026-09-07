import type { TransactionStatus } from "@/entities/transaction/model/transactionStatus";
import { Box, Stack, Typography, } from "@mui/material";
import moneyTransfer from "@/shared/icons/moneyTransfer.svg";
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
import { NavLink } from "react-router-dom";


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
                    <Typography className={styles.leftSection}>{t(`transactionDetails.labels.amount`)}</Typography>
                    <Typography>{statusCreditMap[type]}{formattedAmount}</Typography>
                </Box>
                <Box className={styles.wrapper}>
                    <Typography className={styles.leftSection}>{t(`transactionDetails.labels.commission`)}</Typography>
                    <Typography>{commission}</Typography>
                </Box>


            </Box>
            <Divider variant="middle"
                className={styles.divider}></Divider>
            <Box className={styles.transactionWrapper}>
                <Box className={styles.wrapper}>
                    <Typography className={styles.leftSection}>{t(`transactionDetails.labels.sourceAccount`)}</Typography>
                    <Typography className={styles.rightSection}>{sourceAccountId}</Typography>
                </Box>

                <Box className={styles.wrapper}>
                    <Typography className={styles.leftSection}>{t(`transactionDetails.labels.category`)}</Typography>
                    <Typography>{t(`transactionDetails.category.${category}`)}</Typography>
                </Box>

                <Box className={styles.statusContainer}>
                    <Typography className={styles.leftSection}>{t(`transactionDetails.labels.status`)} </Typography>
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
                    <Typography className={styles.leftSection}>{t(`transactionDetails.labels.dateTime`)} </Typography>
                    <Box className={styles.date}>
                        <Typography className={styles.rightSection}>{formattedDate}</Typography>
                        <Typography className={styles.rightSection}>{formattedTime}</Typography>
                    </Box>

                </Box>
                <Box className={styles.wrapper}>
                    <Typography className={styles.leftSection}>{t(`transactionDetails.labels.merchantLocation`)} </Typography>
                    <Typography className={styles.rightSection}>{merchantLocation}</Typography>
                </Box>
                <Box className={styles.wrapper}>
                    <Typography className={styles.leftSection}>{t(`transactionDetails.labels.countryLabel`)} </Typography>
                    <Typography className={styles.rightSection}>{t(`transactionDetails.country.${country}`)}</Typography>
                </Box>
                <Box className={styles.wrapper}>
                    <Typography className={styles.leftSection}>{t(`transactionDetails.labels.transactionId`)} </Typography>
                    <Typography>{id}</Typography>
                </Box>
            </Box>
            <NavLink
                className={styles.link} to={'/*'}>
                <Box
                    className={styles.iconLink}
                    alt="download"
                    component="img"
                    src={moneyTransfer}></Box>
                <Typography className={styles.textLink}>
                    {t("transactionDetails.labels.downloadReceipt")}
                </Typography>
            </NavLink>
        </Stack>

    )
}

export { TransactionDescription };