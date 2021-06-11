import * as React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardBody,
  CardTitle,
  Drawer,
  DrawerActions,
  DrawerPanelBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelContent,
  DrawerSection,
  Flex,
  FlexItem,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  Gallery,
  GalleryItem,
  Grid,
  GridItem,
  PageSection,
  Text,
  Title
} from '@patternfly/react-core';
import PartnerLogo from '@app/bgimages/redhat_cyberark.png';
import { tech } from '@app/data';

//import { OpenshiftIcon} from '@patternfly/react-icons';

const Technologies: React.FunctionComponent = () => {
  const [ activeCard,setActiveCard ] = React.useState(0);
  const [ isDrawerExpanded, setDrawerExpanded ] = React.useState(false);

  const onCloseDrawerClick = () => {
        setActiveCard(null);
        setDrawerExpanded(false);
  };

  const setExpandedHTML = () => {
    if(!activeCard)
      return;
    return {__html: tech[activeCard.charAt(activeCard.length - 1)].expanded};
  };

  return(
  <PageSection>
    <EmptyState>
      <img src={PartnerLogo} style={{ height: '128px' }}/>
      <Title headingLevel="h4" size="lg">
        Red Hat and CyberArk Technologies
      </Title>
      <EmptyStateBody>
      </EmptyStateBody>
    </EmptyState>
    <Grid hasGutter>
        {tech.map((product, index) => (
          <GridItem span={4} rowSpan={4}>
            <Card
              style={{minHeight: '20em'}}
              isHoverable
              key={index}
              id={'card-view-' + index }
            >
              <CardHeader>
                <img src={product.icon} alt={`${product.name} icon`} style={{ height: '40px' }}/>
              </CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardBody>{product.description}</CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
  </PageSection>
  );
}

export { Technologies };
