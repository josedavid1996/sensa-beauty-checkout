import {
  reactExtension,
  BlockStack,
  Image,
  Text,
  InlineStack,
  useSettings,
  GridItem,
  Grid,
  TextBlock,
  useDiscountAllocations
} from "@shopify/ui-extensions-react/checkout";
import { View } from "@shopify/ui-extensions/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const settings = useSettings();
  const discount = useDiscountAllocations()
  const totalAmount = discount.reduce((total, item) => {
  return total + item.discountedAmount.amount;
}, 0);
  console.log(totalAmount)


  const customerName = settings?.customer_name || "Sean W.";
  const testimonialText = settings?.testimonial_text || "“Great prices and a selection on scents that I like. And the shipping was fast too. Will be shopping with them again. Fantastic fragrance and is long lasting. Unique in that it doesn't smell similar to anything else as so many others do.”";
  return (
    <>
      {totalAmount !== 0 && (
      <Grid columns={['auto', 'fill']} padding={['none', 'none', 'base', 'none']}>
        <GridItem padding={['none', 'extraTight', 'none', 'none']}>
          <TextBlock  emphasis="bold" size={"base"}>You're saving</TextBlock>
        </GridItem>
        <GridItem>
          <TextBlock emphasis="bold" size={"base"}> ${totalAmount}</TextBlock>
        </GridItem>
      </Grid>
      )}
    <BlockStack background={"base"} border={"base"} padding={"base"} spacing={"extraTight"}>
      <InlineStack blockAlignment={"center"} spacing={"none"}>
        <Image source="https://cdn.shopify.com/s/files/1/0679/4166/3022/files/star.svg?v=1731509026" />
        <Image source="https://cdn.shopify.com/s/files/1/0679/4166/3022/files/star.svg?v=1731509026" />
        <Image source="https://cdn.shopify.com/s/files/1/0679/4166/3022/files/star.svg?v=1731509026" />
        <Image source="https://cdn.shopify.com/s/files/1/0679/4166/3022/files/star.svg?v=1731509026" />
        <Image source="https://cdn.shopify.com/s/files/1/0679/4166/3022/files/star.svg?v=1731509026" />
      </InlineStack>

      <InlineStack blockAlignment={"center"} spacing={"tight"}>
        <Text emphasis="bold" size={"medium"}>{customerName}</Text>
        <InlineStack blockAlignment={"center"} spacing={"extraTight"}>
          <Image source="https://cdn.shopify.com/s/files/1/0679/4166/3022/files/icon-park-solid_check-one.svg?v=1731509148" />
          <Text emphasis="bold" size={"medium"}>Verified Buyer</Text>
        </InlineStack>
      </InlineStack>

      <Text size={"base"}>{testimonialText}</Text>
    </BlockStack>

    </>
  );
}