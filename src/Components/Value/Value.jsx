import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  return (
    <section className='v-wrapper'>
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.webp" alt="value/image"/>
                </div>
            </div>
            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Values</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>At Anand Enterprises, we turn ideas into reality. From the smallest label to the grandest magazine, our commitment to excellence shines through in every product. We don’t just print; we craft experiences that leave a lasting impression.
                    </span>

                <Accordion className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}>
                    {
                        data.map((item, i) => (
                            <AccordionItem className='accordionItem' key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <AccordionItemState>
                                            {({ expanded }) => (
                                                <div className={`flexCenter icon ${expanded ? "expanded" : "collapsed"}`}>
                                                    {item.icon}
                                                </div>
                                            )}
                                        </AccordionItemState>
                                        <span className='primaryText'>{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='secondaryText'>{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value;
