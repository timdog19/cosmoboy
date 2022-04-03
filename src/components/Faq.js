import React, {useRef, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import '../styles/Faq.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);


  const Faqaccordion = ({question,  answer}) => (
    <Grid item xs={12} md={6}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>   
  </Grid>
  )

export const Faq = () => {

    let faqelment = useRef(null)

    useEffect(()=> {
        gsap.from(faqelment,{
            scrollTrigger:{
                trigger: faqelment,
                endTrigger: faqelment,
                toggleActions: "restart pause restart pause",
                start: "top 95%",
                end: "100% 5%",
                markers: false
            },
            duration: 2,
            opacity: 0,
            y: 100,
            ease: "expo.out"
        });
    }, [])

    return (
        <div id="FAQ" className="faq-wrapper" style={{"position": "relative"}} >
            <div className="custom-container" style={{"paddingBlock" : "7rem"}} ref={el => {faqelment = el}}>
                <Grid container spacing={3} style={{ "margin-bottom": "1.5rem"}}>
                    <Grid item xs={12} style={{"marginBottom" : "5rem"}}>
                        <Typography align="start" variant="h3" gutterBottom>
                            Faq
                        </Typography>
                    </Grid>
                    <Faqaccordion question="What is SneakPunks?" answer="SneakPunks is a NFT collection of 1000 custom made 570x570 images of different NFT`s, every NFT is cool and different!" />
                    <Faqaccordion question="How do I get one?" answer="1. Create a free account at Opensea.io. 2. Download the Metamask browser extension. 3. Transfer some ETH to your Metamask account.  4. Shop for some Cosmoboy at opensea.io or MINT them" />
                    <Faqaccordion question="What benefits do I get from owning a Cosmoboy?" answer="Other than being cool, you get access to our BIG Community where you will get a free copy." />
                    <Faqaccordion question="What token standard and blockchain do you use?" answer="We use the ERC-721 token standard and the Ethereum Blockchain." />
                </Grid>
            </div>
        </div>
    )
}



export default Faq

