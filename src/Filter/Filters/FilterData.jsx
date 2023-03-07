import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Checkbox,
  Heading,
  Flex,
  FormLabel,
  Radio,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { bgColorPr, fsCard, fsCardTitle, textColor } from "../../style.golbal";
const FilterData = ({ listProduct }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryParams = searchParams.getAll("category");
  const initialGenderParams = searchParams.getAll("gender");
  const initialColorTypeParams = searchParams.getAll("colortype");
  const initialSizesParams = searchParams.getAll("sizes");
  const initialSortParams = searchParams.getAll("sortBy");
  const [theCategory, setTheCategory] = useState(initialCategoryParams || []);
  const [theGender, setTheGender] = useState(initialGenderParams || []);
  const [theSizes, setTheSizes] = useState(initialSizesParams || []);
  const [sortBy, setSortBy] = useState(initialSortParams || "");
  const [theColorType, setTheColorType] = useState(
    initialColorTypeParams || []
  );
  const handleCategoryChange = (e) => {
    const typeOutput = e.target.value;
    let newCategory = [...theCategory];
    if (theCategory.includes(typeOutput)) {
      newCategory.splice(newCategory.indexOf(typeOutput), 1);
    } else {
      newCategory.push(typeOutput);
    }
    setTheCategory(newCategory);
  };

  const handleGenderChange = (e) => {
    const typeOutput = e.target.value;
    let newGender = [...theGender];
    if (theGender.includes(typeOutput)) {
      newGender.splice(newGender.indexOf(typeOutput), 1);
    } else {
      newGender.push(typeOutput);
    }
    setTheGender(newGender);
  };

  const handleColorTypeChange = (e) => {
    const typeOutput = e.target.value;
    let newColorType = [...theColorType];
    if (theColorType.includes(typeOutput)) {
      newColorType.splice(newColorType.indexOf(typeOutput), 1);
    } else {
      newColorType.push(typeOutput);
    }
    setTheColorType(newColorType);
  };
  const handleSizesChange = (e) => {
    const typeOutput = e.target.value;
    let newSizes = [...theSizes];
    if (theSizes.includes(typeOutput)) {
      newSizes.splice(newSizes.indexOf(typeOutput), 1);
    } else {
      newSizes.push(typeOutput);
    }
    setTheSizes(newSizes);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (theCategory || theGender || theColorType || theSizes || sortBy) {
      setSearchParams({
        category: theCategory,
        gender: theGender,
        colortype: theColorType,
        sizes: theSizes,
        sortBy: sortBy,
      });
    }
  }, [theColorType, setSearchParams, theGender, theCategory, theSizes, sortBy]);
  return (
    <Box minW={"260px"}  >
      <Heading>
        <Flex gap={2} fontSize={fsCard}  color={textColor} fontWeight={"bold"} marginBottom={2}  >
          <FaFilter />
          Bộ lọc
        </Flex>
      </Heading>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" fontSize={fsCard} textAlign="left">
                Danh mục
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            <Stack spacing={5} direction="column">
              {
                listProduct?.map(list =>
                  <>
                    <Checkbox
                      value="clothes"
                      type="checkbox"
                      onChange={handleCategoryChange}
                      defaultChecked={theCategory.includes("clothes")}
                    >
                      <Text
                        isTruncated
                        maxW={"200px"}
                        textOverflow={"ellipsis"}
                        whiteSpace={"nowrap"}
                        overflow={"hidden"}
                        fontSize={fsCard}
                        textTransform={"lowercase"}
                      >
                        {

                          list?.name
                        }
                      </Text>
                    </Checkbox>
                  </>
                )
              }

            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FilterData;

// SIZES SORT

/* <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Size
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox
                value="small"
                type="checkbox"
                onChange={handleSizesChange}
                defaultChecked={theSizes.includes("small")}
              >
                Small
              </Checkbox>
              <Checkbox
                value="medium"
                type="checkbox"
                onChange={handleSizesChange}
                defaultChecked={theSizes.includes("medium")}
              >
                Medium
              </Checkbox>
              <Checkbox
                value="large"
                type="checkbox"
                onChange={handleSizesChange}
                defaultChecked={theSizes.includes("large")}
              >
                Large
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem> */

// REVIEW SORT
/* <AccordionItem>
<h2>
  <AccordionButton>
    <Box flex="1" textAlign="left">
      reviews
    </Box>
    <AccordionIcon />
  </AccordionButton>
</h2>
<AccordionPanel pb={4}>
  <Stack spacing={5} direction="column" onChange={handleSortBy}>
    <Radio
      type="radio"
      value="asc"
      defaultChecked={sortBy === "asc"}
    />
    <Radio
      type="radio"
      value="desc"
      defaultChecked={sortBy === "desc"}
    />
  </Stack>
</AccordionPanel>
</AccordionItem> */
