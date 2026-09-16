export type PaymetdetailsProps = {
  sourceAccountId: string;
  targetAccountId: string;
  currency: string;
};

export const paymentDetails: PaymetdetailsProps = {
  sourceAccountId: "friend-account-id-123",
  targetAccountId: "my-usd-account-id-555",
  currency: "USD",
};
