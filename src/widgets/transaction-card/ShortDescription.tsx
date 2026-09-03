import type { TransactionDetailsResponse } from "@/entities/transaction/model/transaction.types";
import { Box, Stack, Typography } from "@mui/material"

type ShortDescriptionProps = {
    icon: string;
    sourceAccountId: string;
    createdAt: string;
    status: string;
    amount: number;
    category: string;

}

const ShortDescription = ({ icon, sourceAccountId, status, createdAt, amount, category }: ShortDescriptionProps) => {
    return (
        <Stack >
            <Box component='img' src={icon}></Box>
            <Box>
                <Typography>{sourceAccountId}</Typography>
                <Typography>{category}</Typography>
                <Box></Box>
                <Box>
                    <Typography>{createdAt}</Typography>

                </Box>
                <Box>
                    <Typography>{status}</Typography>
                </Box>
                <Box>
                    <Typography>{amount}</Typography>
                </Box>
            </Box>
            <Box>
                <Box></Box>
                <Box></Box>
            </Box>
            <Box></Box>
        </Stack>
    )
};

export { ShortDescription };