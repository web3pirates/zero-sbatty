import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import {
  CustomContainer,
  Label,
  Layout,
  Title,
  LabelCard,
  TinyLabelCard,
  Form,
  Input,
  Button,
  Row,
  CreateButton,
  Description,
  BannerImage,
  StyledDetail,
  StyledTable,
  TextArea,
  Select,
  Loader,
} from "@/components/atoms";
import Head from "next/head";
import { useRouter } from "next/router";

export default function testAtoms() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>EEZY</title>
        <meta name="description" content="EEZY Web3" />
      </Head>

      <Layout>
        <Nav customFunction={() => router.push("/")} />

        <CustomContainer>
          <Title>Atoms</Title>
          <Label>I'm a lable</Label>
          <LabelCard>I'm a lable card</LabelCard>
          <TinyLabelCard>I'm a tiny lable card</TinyLabelCard>
          <Form>
            <Input placeholder="I'm an input" />
            <Row>
              <CreateButton>Create button</CreateButton>
              <Button>Button</Button>
            </Row>
            <TextArea placeholder="I'm a text area" />
            <Select>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
          </Form>
          <Description>I'm a description</Description>
          <StyledTable>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
              </tr>
              <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
              </tr>
            </tbody>
          </StyledTable>
          <StyledDetail> I'm a detail styled</StyledDetail>
          <BannerImage src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg" />

          <Loader />
        </CustomContainer>

        <Footer />
      </Layout>
    </>
  );
}
