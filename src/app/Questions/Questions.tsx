import * as React from 'react';
import {
  Button,
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
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateSecondaryActions,
  Gallery,
  GalleryItem,
  Grid,
  GridItem,
  PageSection,
  Switch,
  Text,
  TextArea,
  Title
} from '@patternfly/react-core';
import axios from 'axios';
import RedHatLogo from '@app/bgimages/redhat_logo.png';
import QuestionMarkIcon from '@app/bgimages/question-mark.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions: React.FunctionComponent = () => {

  const [ isDrawerExpanded, setDrawerExpanded ] = React.useState(false);
  const [ text, setText ] = React.useState("")
  const [ questions, setQuestions ] = React.useState([]);
  const [ dataEnc, setDataEnc ] = React.useState(false);

  //React.useEffect(() => {
    //questions-api.blueradish.net/api/questions/clear
  //  axios.get("http://localhost:8080/api/questions/clear")
  //  .then(res => {
  //    setQuestions(res.data);
  //  });
  //});

  const handleToggleChange = () => {
    let url = "";
    if(dataEnc) {
      url = "http://questions-api.blueradish.net/api/questions/clear";
    } else {
      url = "http://questions-api.blueradish.net/api/questions/"
    }
    axios.get(url).then(res => {
      setQuestions(res.data);
    });
    setDataEnc(!dataEnc);
  };

  const onCloseDrawerClick = () => {
        setDrawerExpanded(false);
  };

  const onButtonClick = () => {
    setDrawerExpanded(true);
  };

  const handleTextAreaChange = (text) => {
    setText(text);
  }

  const cardStyle = {
    minWidth: "20%",
    minHeight: "10em",
    flexGrow: 0
  };

  const handleSubmitClick = () => {
    // make a post to the api to raise a question with the value
    const adapter = axios.create({
      //questions-api.blueradish.net
      baseURL: 'http://questions-api.blueradish.net/api',
        headers: {
            'Content-Type': 'application/json',
          }
    });

    const test = adapter.post('/questions', { question: `${text}`}).then(() => {
      toast.success('Question submitted',{
                    postion: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
      })}).catch(() => {
       toast.success('Question submitted',{
                    postion: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
          })});
    }

  const questionContent = (
    <React.Fragment>
      <Gallery hasGutter>
        {questions.map((question, index) => (
          <GalleryItem>
          <Card
            style={cardStyle}
            isHoverable
            key={index}
            id={'card-view-'+index}
          >
          <CardBody><Text style={{ flexShrink: 1 }}>{question.question}</Text></CardBody>
          </Card>
          </GalleryItem>
      ))}
      </Gallery>
    </React.Fragment>
  );

  const drawerContent = (
    <React.Fragment>
      <Switch 
        id="simple-switch"
        label="Encrypted"
        labelOff="Not Encrypted"
        isChecked={dataEnc}
        onChange={handleToggleChange}
      />
      <EmptyState>
        <img src={RedHatLogo} style={{ height: '95px' }}/>
        <Title headingLevel="h4" size="lg">
          Red Hat OpenShift Container Platform Q+A
        </Title>
        <EmptyStateBody>
          This is a space where you can ask questions about Red Hat OpenShift Container Platform.
        </EmptyStateBody>
        <EmptyStateSecondaryActions>
          <Button variant="primary" onClick={onButtonClick}>Ask a Question</Button>
        </EmptyStateSecondaryActions>
      </EmptyState>
      {questionContent}
    </React.Fragment>
  );

  const panelContent = (
    <React.Fragment>
      <DrawerPanelContent>
        <DrawerHead>
          <Title headingLevel="h2" size="xl">
            Ask a Question
          </Title>
          <DrawerActions>
            <DrawerCloseButton onClick={onCloseDrawerClick} />
          </DrawerActions>
        </DrawerHead>
        <DrawerPanelBody>
          <TextArea value={text} style={{ height: '200px'}} onChange={handleTextAreaChange} aria-label="text area for questions" />
          <Button variant="primary" onClick={handleSubmitClick}>Submit</Button>
        </DrawerPanelBody>
      </DrawerPanelContent>
    </React.Fragment>
  );

  return (
  <PageSection>
    <Drawer isExpanded={isDrawerExpanded}>
      <DrawerContent panelContent={panelContent} style={{ backgroundColor: '#f0f0f0' }}>
         <DrawerContentBody hasPadding>{drawerContent}</DrawerContentBody>
       </DrawerContent>
    </Drawer>
  </PageSection>
  );
}

export { Questions };
