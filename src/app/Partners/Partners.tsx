import * as React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardBody,
  CardTitle,
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
import { partners } from '@app/data';

const Partners: React.FunctionComponent = () => {

  return(
  <PageSection>
    <EmptyState>
      <img src={PartnerLogo} style={{ height: '128px' }}/>
      <Title headingLevel="h4" size="lg">
        Protecting the Enterprise with CyberArk and Red Hat
      </Title>
      <EmptyStateBody>
        Together, CyberArk and Red Hat can help eliminate security islands and siloed credentials, enabling developers and operations teams to more easily and securely deploy applications at scale.
      </EmptyStateBody>
    </EmptyState>
    <Grid hasGutter>
      {partners.map((section, index) => (
        <GridItem span={4} rowSpan={4}>
          <Card
            style={{minHeight: '30em'}}
            isHoverable
            key={index}
            id={'card-view-' + index }
          >
            <CardHeader>
              <img src={section.icon} alt={`${section.name} icon`} style={{ height: '80px' }}/>
            </CardHeader>
            <CardTitle>{section.name}</CardTitle>
            <CardBody>{section.description}</CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  </PageSection>
  );
}

export { Partners };
