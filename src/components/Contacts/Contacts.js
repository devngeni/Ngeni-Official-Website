import React, { useState, useRef } from "react";
import { ExternalLink } from "react-external-link";
import {
  ContactsContainer,
  ContactsContents,
  ContactsRows,
  ContactsHeader,
  ContactsImage,
  ContactsForms,
  ContentsBoxOne,
  ContactsBody,
  ContactsIcons,
  ContactForm,
  ContactsDiv,
  ContactsClass,
  ContactProfile,
  ContactsTextArea,
} from "./ContactsElements";
import contacts from "../../assets/images/contacts.svg";
import { toast } from "react-hot-toast";

function Contacts() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceID = "service_jw0cvwy";
  const templateId = "template_andzbx4";

  const form = useRef();

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        toast.success("Email successfully sent!", res);
      })
      .catch((err) =>
        toast.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFeedback(
      serviceID,
      templateId,
      {
        Name: name,
        Contact: contact,
        Email: email,
        message: message,
      },
      "rJmaRWYPK8-Blcqi9"
    );
    e.target.resetForm();
  };
  return (
    <>
      <ContactsContainer>
        <ContactsContents>
          <ContentsBoxOne>
            <img src={contacts} alt="team" width="600px" />
          </ContentsBoxOne>
          <ContactsBody>
            <form ref={form} onSubmit={handleSubmit}>
              <ContactsForms>
                <ContactsHeader>
                  gET iN <span>tOUCH</span> Let’s work<span> together</span> to{" "}
                  <span>build</span> & make the <span>dream</span> a
                  Reality.🤜🏿🤛🏿
                </ContactsHeader>
                <ContactForm>
                  <ContactsDiv>
                    <ContactsIcons>
                      <input
                        type="checkbox"
                        style={{
                          padding: "10px",
                          width: "20px",
                          height: "20px",
                        }}
                        value={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.value)}
                      />
                      &nbsp; Blockchain Apps
                    </ContactsIcons>
                    <ContactsIcons>
                      <input
                        type="checkbox"
                        style={{
                          padding: "10px",
                          width: "20px",
                          height: "20px",
                        }}
                        value={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.value)}
                      />
                      &nbsp; dApp Front End
                    </ContactsIcons>
                    <ContactsIcons>
                      <input
                        type="checkbox"
                        style={{
                          padding: "10px",
                          width: "23px",
                          height: "23px",
                        }}
                        value={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.value)}
                      />
                      &nbsp; Web3 Product Design UI/UX
                    </ContactsIcons>
                    <ContactsIcons>
                      <input
                        type="checkbox"
                        style={{
                          paddingTop: "10px",
                          width: "20px",
                          height: "20px",
                        }}
                        value={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.value)}
                      />
                      &nbsp; Smart Contracts.
                    </ContactsIcons>
                    <ContactsIcons>
                      <input
                        type="checkbox"
                        style={{
                          paddingTop: "10px",
                          width: "20px",
                          height: "20px",
                        }}
                        value={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.value)}
                      />
                      &nbsp;Others
                    </ContactsIcons>
                  </ContactsDiv>
                  <ContactsClass>
                    <ContactProfile>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </ContactProfile>

                    <ContactProfile>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </ContactProfile>
                    <ContactProfile>
                      <input
                        type="number"
                        required
                        placeholder="Phone No."
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      ></input>
                    </ContactProfile>

                    <ContactsTextArea>
                      <textarea
                        type="text"
                        required
                        name="message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </ContactsTextArea>
                  </ContactsClass>
                </ContactForm>
              </ContactsForms>
              <ContactsRows>
                <ContactsImage>
                  <button type="submit" value='send'>
                    HIRE US&nbsp;&nbsp;↗️
                  </button>
                </ContactsImage>
                <ContactsImage>
                  <ExternalLink href="https://calendly.com/ngenidevs/15min">
                    BOOK AN APPOINTMENT
                  </ExternalLink>
                </ContactsImage>
              </ContactsRows>
            </form>
          </ContactsBody>
        </ContactsContents>
      </ContactsContainer>
    </>
  );
}

export default Contacts;
