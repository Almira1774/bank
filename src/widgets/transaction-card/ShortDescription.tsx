import { Box, Stack, Typography } from "@mui/material";
import styles from './ShortDescription.module.css';
import { useTranslation } from "react-i18next";
type ShortDescriptionProps = {
    icon: string;
    name: string;
    createdAt: string;
    status: string;
    amount: number;
    category: string;

}

const ShortDescription = ({ icon, name, status, createdAt, amount, category }: ShortDescriptionProps) => {
   const {t}= useTranslation();
   
    return (
        <Stack
            className={styles.container}
            direction="row">
            <Box >
                <Box component='img' src={icon} className={styles.icon}></Box>
            </Box>

            <Stack direction="column">
                <Typography>{name}</Typography>
                <Typography>{category}</Typography>
                <Typography>{createdAt}</Typography>

            </Stack>
            <Stack direction="column">
                <Typography>{status}</Typography>
            </Stack>
            <Stack>
                <Typography>{amount}</Typography>
            </Stack>

            <Stack>
                <Box></Box>
                <Box></Box>
            </Stack>
            <Box></Box>
        </Stack>
    )
};

export { ShortDescription };