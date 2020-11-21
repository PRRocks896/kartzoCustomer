import React from "react";
import "./terms.css";
import EventEmitter from "../../event";
import { scrollToTop } from "../utils";

class Terms extends React.Component {

  /** Constructor call */
  constructor(props: any) {
    super(props);
  }

  /** Page Render Call */
  componentDidMount() {
    scrollToTop();
    EventEmitter.dispatch("isShow", true);
    EventEmitter.dispatch("isShowFooter", false);
  }

  /** Render DOM */
  render() {
    return (
      <>
        <section className="terms-bnr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <img className="logo1" src="images/logo-1.png" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="banr-tt">
                  <h1 className="tt1">Terms and Conditions</h1>
                  <div className="bdr-tt">
                    <span className="big"></span>
                    <span className="small"></span>
                  </div>
                  <p>
                    Please ensure that this Privacy Policy is perused by You
                    before availing any services from Us. This Privacy Policy
                    shall be updated from time to time and to stay abreast with
                    our methods of using Your information and protecting Your
                    privacy, please keep reviewing this Policy.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="terms-conditions">
          <div className="container">
            <ul className="hollow-list">
              <li>
                <a className="link text-medium" href="#user_terms">
                  {" "}
                  User Terms{" "}
                </a>
              </li>
              <li>
                <a className="link text-medium" href="#Kartzo_cash">
                  Kartzo Cash
                </a>
              </li>
              <li>
                <a className="link text-medium" href="#user_referral_program">
                  Kartzo Referral Programme
                </a>
              </li>
              <li>
                <a className="link text-medium" href="#partner_terms">
                  {" "}
                  Partner Terms{" "}
                </a>
              </li>
              <li>
                <a className="link text-medium" href="#pnd_terms">
                  {" "}
                  Pick and Drop Off Terms{" "}
                </a>
                <ul className="dashed-list">
                  <li>
                    <a className="link text" href="#pndcancellation_terms">
                      {" "}
                      Cancellations
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="link text-medium" href="#merchant_terms">
                  {" "}
                  Merchant Terms{" "}
                </a>
                <ul className="dashed-list">
                  <li>
                    <a className="link text" href="#pharmacymerchant_terms">
                      {" "}
                      Pharmacy Merchants{" "}
                    </a>
                  </li>
                  <li>
                    <a className="link text" href="#grocerymerchant_terms">
                      {" "}
                      Grocery Merchants{" "}
                    </a>
                  </li>
                  <li>
                    <a className="link text" href="#restaurantmerchant_terms">
                      {" "}
                      Restaurant Merchants{" "}
                    </a>
                  </li>
                  <li>
                    <a className="link text" href="#petstoremerchant_terms">
                      {" "}
                      Pet Store Merchants{" "}
                    </a>
                  </li>
                  <li>
                    <a className="link text" href="#offersampling_userterms">
                      {" "}
                      Offers/ Sampling User T&amp;C{" "}
                    </a>
                  </li>
                  <li>
                    <a className="link text" href="#merchantcancellation_terms">
                      {" "}
                      Cancellations{" "}
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- <li>
                    <a className="link text-medium" href="#dc_promotion_terms"> Offer: Your Bill. Our Cash. T&C </a>
                </li> --> */}
              <li>
                <a className="link text-medium" href="#gpay_offer_terms">
                  {" "}
                  Google Pay Offer T&amp;C{" "}
                </a>
              </li>
              <li>
                <a className="link text-medium" href="#paytm_offer_terms">
                  {" "}
                  Paytm Offer T&amp;C{" "}
                </a>
              </li>
              <li>
                <a className="link text-medium" href="#amazonpay_offer_terms">
                  {" "}
                  Amazon Pay Offer T&amp;C{" "}
                </a>
              </li>
              <li>
                <a className="link text-medium" href="#simpl_offer_terms">
                  {" "}
                  Simpl Kartzo new user offer T&amp;C{" "}
                </a>
              </li>
              <li>
                <a
                  className="link text-medium"
                  href="#business_insaurance_terms"
                >
                  {" "}
                  D4B Insurance Terms{" "}
                </a>
              </li>
              <li>
                <a className="link text-medium" href="#community_guidelines">
                  {" "}
                  Community Guidelines{" "}
                </a>
              </li>
              <li>
                <a
                  className="link text-medium"
                  href="#Kartzo_for_business_terms"
                >
                  {" "}
                  Kartzo for Business Terms{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="container" id="user_terms">
            <h2 className="title align-center mt-60">User Terms</h2>
            <p>
              These terms of use ("<b>Terms of Use</b>") mandate the terms on
              which users ("<b>You</b>" or "<b>Your</b>" or "<b>Yourself</b>" or
              "<b>Users</b>") interested in browsing or availing Kartzo Services
              (defined below), and accessing the platform www.Kartzo.com and the
              mobile application owned and operated by Kartzo Digital Private
              Limited ("<b>Kartzo</b>") collectively referred to as, the "
              <b>Platform</b>" connects with the merchants registered on the
              Platform ("<b>Tied-up Merchants</b>"), merchants not registered on
              the Platform ("<b>Non-tied up Merchants</b>") (together
              hereinafter referred to as "<b>Merchants</b>") and with delivery
              partners ("<b>Delivery Partners</b>") to avail the Kartzo
              Services.
            </p>
            <p>
              Please read the Terms of Use carefully before using the Platform
              or registering on the Platform or accessing any material or
              information through the Platform. By clicking on the "
              <b>I Accept</b>" button, You accept this Terms of Use and agree to
              be legally bound by the same.
            </p>
            <p>
              Use of and access to the Platform is offered to You upon the
              condition of acceptance of all the terms, conditions and notices
              contained in this Terms of Use and Privacy Policy, along with any
              amendments made by Kartzo at its sole discretion and posted on the
              Platform from time to time.
            </p>
            <p>
              For the purposes of these Terms of Use, the term 'Kartzo' or 'Us'
              or 'We' refers to Kartzo Digital Private Limited. The term 'You'
              refers to the user or visitor of the Website and/or App. When You
              use our services, You will be subject to the terms, guidelines and
              policies applicable to such service and as set forth in these
              Terms of Use. As long as you comply with these Terms of Use, We
              grant You a personal, non-exclusive, non-transferable, limited
              privilege to enter and use our Platforms and services.
            </p>

            <h2 className="title align-center">
              PART A - GENERAL TERMS RELATING TO Kartzo SERVICES
            </h2>
            <h2 className="title-small light">1. Registration:</h2>
            <ul>
              <li>
                a. You shall be permitted to access the Platform, avail the
                Kartzo Services and connect with Merchants and Delivery Partners
                on the Platform only upon creating an Account (as defined below)
                and obtaining a registration on the Platform. Your ability to
                continue using the Platform, Kartzo Services is subject to Your
                continued registration on the Platform. You will be required to
                enter Your personal information including your name, contact
                details, valid phone number while registering on the Platform.
              </li>
              <li>
                b. As a part of the registration, You may be required to
                undertake a verification process to verify Your personal
                information and setting up the Account.
              </li>
              <li>
                Kartzo shall have the right to display the information,
                feedback, ratings, reviews etc. provided by You on the Platform.
                You agree and accept that as on the date of Your registration on
                the Platform, the information provided by You is complete,
                accurate and up-to-date. In the event of any change to such
                information, You shall be required to promptly inform Kartzo of
                the same, in writing, at least 1 (one) week prior to the date on
                which such change shall take effect. You acknowledge and accept
                that Kartzo has not independently verified the information
                provided by You. Kartzo shall in no way be responsible or liable
                for the accuracy or completeness of any information provided by
                You. If You provide any information that is untrue, inaccurate,
                not current or incomplete, or Kartzo has reasonable grounds to
                suspect that such information is untrue, inaccurate, not current
                or incomplete, Kartzo reserves the right to suspend or terminate
                Your Account (defined below) and refuse any and all current or
                future use of the Platform (or any portion thereof) at any time.
              </li>
            </ul>

            <h2 className="title-small light">2. Kartzo Services:</h2>
            <ul>
              <li>
                a. The Platform provides You with the following services ("
                <b>Kartzo Services</b>"):
                <ul>
                  <li>
                    i. It allows You to connect with Merchants and Delivery
                    Partners;
                  </li>
                  <li>
                    ii. It allows You to view the items/services ("<b>Items</b>
                    ") listed on the Platform by the Tied Up Merchants;
                  </li>
                  <li>
                    iii. It allows You to purchase Item(s) from the Tied Up
                    Merchants listed on the Platform and allows You to get the
                    Items delivered to You through Delivery Partners ("
                    <b>Purchase Services</b>");
                  </li>
                  <li>
                    iv. It allows You to purchase Items from Non-Tied Up
                    Merchants and get the same delivered to You by the Delivery
                    Partners ("<b>Delivery Services</b>");
                  </li>
                  <li>
                    v. It allows you to pick up- and drop off packages from 1
                    (one) location to the other through the Delivery Partner ("
                    <b>Pick Up and Drop Off Services</b>");
                  </li>
                  <li>
                    vi. It allows You to avail the bike taxi service provided by
                    the Delivery Partners ("<b>Bike Taxi Services</b>");
                  </li>
                  <li>
                    vii. It allows You to avail the bike pool/share service
                    provided by other Users, registered as Pool Partners ("
                    <b>Bike Pool Services</b>");
                  </li>
                  <li>
                    viii. It allows You to give ratings, write comments and
                    reviews about Delivery Partners and Merchants;
                  </li>
                  <li>
                    viii. It facilitates improvement in the quality of the
                    services provided by Kartzo on the Platform based on User
                    ratings, reviews and feedbacks provided on the Platform.
                  </li>
                </ul>
              </li>
              <li>
                b. Once the Delivery Services/ Purchase Services/Pick-Up and
                Drop Off Services/Bike Taxi Services / Bike Pool Services have
                been completed or delivered, as the case may be, You shall
                promptly notify the same on the Platform.
              </li>
              <li>
                c. Kartzo may, at its absolute sole discretion, add, modify,
                upgrade, extend, withdraw or alienate any of the Kartzo Services
                listed above from time to time. Kartzo does not provide any
                guarantee to You that the Kartzo Services will be made available
                to You at all times.
              </li>
              <li>
                d. You hereby agree and acknowledge that Kartzo is only a
                facilitator between You, the Merchants and Delivery Partners (as
                the case maybe) and Kartzo only provides You with access to the
                Platform to connect with Merchants and Delivery Partners for You
                to initiate transactions on the Platform. You hereby agree and
                acknowledge that Kartzo will not be a party to any of the
                transactions that are initiated by You through the Platform and
                Kartzo shall not be liable in any manner or incur any liability
                with respect to the services performed by the Merchants or the
                Delivery Partners, as the case may be. Further, You hereby agree
                and acknowledge that Kartzo shall not be liable for the conduct,
                acts and omissions of the Merchants (including their employees
                and consultants) and Delivery Partners in the course of
                providing their services to You, or for any loss or damage to
                the Item or otherwise caused to You as a consequence of or in
                relation to the services being provided to You by the Merchants
                or the Delivery Partner, as the case may be.
              </li>
              <li>
                <p>
                  e. You shall be eligible to avail the Kartzo Services as per
                  applicable laws. If You are purchasing any medicinal product,
                  using the Platform, for which You are required to have a valid
                  prescription from a medical practitioner, You shall, ensure
                  that physician, as far as possible, prescribe drugs with
                  generic names and he / she shall ensure that there is a clear
                  prescription and will upload the same on the Platform, while
                  initiating a transaction with respect to the same on the
                  Platform. Failure to do the same, shall result in cancellation
                  of the transaction. Only upon verification of the medical
                  prescription, will You be able to avail the Kartzo Services
                  for purchasing the required medicines.
                </p>
                <p>
                  In case of Purchase Services, it is the duty of the Tied-Up
                  Merchants to share the updated Item list along with its prices
                  on the Platform. Kartzo shall not be responsible for any
                  inaccurate Item listing on the Platform. Further, You hereby
                  agree and acknowledge that for certain Items (Items that are
                  perishable in nature or Item whose price varies periodically),
                  it may not be possible for the Tied-Up Merchants to list out
                  the exact price or prices of such Items on the Platform. The
                  above shall also be applicable to the provision of Purchase
                  Services. In such cases, the Delivery Partner upon reaching
                  the Merchant outlet shall intimate You about the Item price
                  and You shall be required to confirm the purchase of the Item
                  and you shall make the payment for the same to complete the
                  transaction, however if You do not confirm the purchase of the
                  Item and do not make payment for the Item, You shall pay such
                  fees as may be communicated to You on the Platform for the
                  efforts of the Delivery Partner.
                </p>
              </li>
              <li>
                f. You shall not initiate any transaction for any Item on the
                Platform which is illegal, immoral, unethical, unlawful, unsafe,
                contains harmful substance and is in violation of this Terms of
                Use and applicable laws. You specifically agree that You shall
                not initiate any transaction on the Platform for the purchase or
                delivery of any alcoholic beverages, narcotic drug or
                psychotropic substance, etc. Further, You hereby acknowledge and
                agree that Kartzo shall not be liable for any indirect, direct
                damage or loss, cost, expense incurred by You in relation to the
                transactions initiated by You on the Platform.
              </li>
              <li>
                g. Kartzo does not check or verify the packages that are being
                picked up and dropped off on behalf of You or the Items that are
                being delivered to You by the Delivery Partner, and therefore
                Kartzo shall have no liability with respect to the same.
                However, if it comes to the knowledge of Kartzo that You have
                packaged any illegal or dangerous substance or availed the Pick-
                up and Drop Off Services using the Platform to deliver any
                illegal or dangerous substance, Kartzo shall have the right to
                report You to the government authorities and take other
                appropriate legal actions against You.
              </li>
              <li>
                h. You hereby acknowledge that Kartzo shall not be liable for
                any damages of any kind arising from Your use of the Kartzo
                Services, including, but not limited to direct, indirect,
                incidental, punitive, and consequential damages.
              </li>
              <li>
                i. Kartzo shall be entitled at any time without giving any
                reason terminate Your request for any Kartzo Service.
              </li>
              <li>
                j. You hereby agree that Kartzo shall not be liable for any
                conduct or misbehaviour or actions of Delivery Partner with
                respect to any transactions initiated on the Platform. Further,
                You agree that Kartzo has no control over the Items provided to
                You by the Merchants and therefore, Kartzo shall not incur any
                liability with respect to such Items. However, keeping in mind
                the interests of the Users, We have informed our Merchants to
                ensure that Items are packaged properly to avoid any form of
                spillage or damage to the Item or any issues related to
                packaging
              </li>
              <li>
                k. You hereby agree that scheduling and rescheduling a
                transaction on the Platform depends upon the availability of
                Delivery Partners around Your area at the time of such
                scheduling and re-scheduling a transaction. Should You choose to
                reschedule a transaction on the Platform at a later point of
                time, You shall cancel the current transaction on the Platform
                (if initiated) and initiate a new transaction on the Platform,
                as per Your convenient time.
              </li>
              <li>
                l. If a transaction initiated by You on the Platform cannot be
                completed, Kartzo shall notify You on the Platform.
              </li>
              <li>
                m. You agree to provide as much information as possible on the
                Platform with respect to the Items/services You wish to
                purchase/avail, using the Platform.
              </li>
              <li>
                n. Kartzo shall use Your locationbased information that is
                captured by Kartzo through global positioning system when You
                are using Your mobile device to request a Kartzo Service on its
                m-app. Such location based information shall be used by Kartzo
                only to facilitate and improve the Kartzo Services being offered
                to You.
              </li>
              <li>
                o. We can’t fulfil any tasks which are immoral or unlawful in
                nature. Kartzo reserves the right to refuse to perform any tasks
                on the grounds of such tasks being
                immoral/unethical/unlawful/banned either by Kartzo’s internal
                policies or as per the independent discretion of Kartzo. Kartzo
                may also refuse to perform any task on the grounds that such
                task is prohibited under any contract to which we are party.
              </li>
              <li>
                p. You understand and acknowledge that Kartzo by itself does not
                sell or provide any such Items. Kartzo is not responsible for
                the quality, merchantability or fitness of such Items.
                Accordingly, in the event of any grievances arising from the
                transaction initiated by You on the Platform pertaining to
                purchase or sale of any product from any Merchant, You may
                contact Kartzo support for routing. your grievances to the
                Merchant through the Platform.
              </li>
              <li>
                q. You hereby acknowledge that if You have any complaint with
                respect to the Kartzo Services, You will first inform Kartzo in
                writing within 24 (twenty four) hours of using such Kartzo
                Services.
              </li>
            </ul>

            <h2 className="title-small light">3. User Information</h2>
            <p>
              a. You are solely responsible for and in control of the
              information You provide to us. Compilation of User Accounts and
              User Account bearing contact number and e-mail addresses are owned
              by Kartzo. Further, You understand and agree that certain
              information will be case sensitive and must be handled with a
              prudent care.
            </p>
            <p>
              b. In the case where the Platform is unable to establish unique
              identity of the User against a valid mobile number or e-mail
              address, the Account shall be indefinitely suspended. Kartzo
              reserves the full discretion to suspend a User's Account in the
              above event and does not have the liability to share any Account
              information whatsoever.
            </p>

            <h2 className="title-small light">4. Payment Terms</h2>
            <ul>
              <li>
                a. <b>Purchase Services:</b> While initiating a request for a
                Purchase Service, You shall pay for the price of the Items You
                require the Delivery Partners to deliver to You from the Tied Up
                Merchant. The transaction for the Purchase Service will be
                initiated on the Platform once You have completed the payment
                for the same on the Platform. In certain exceptional
                circumstances, if the purchase price of the Item is not
                available on the Platform, You shall be required to pay the
                purchase price of the Item, through the Platform, as may be
                communicated to You by the Delivery Partner, prior to the
                Delivery Partner undertaking Purchase Service.
              </li>
              <li>
                b. <b>Delivery Services:</b> While availing Delivery Service,
                You shall pay the purchase price of the Item through the
                Platform, as may be communicated to You by the Delivery Partner
                on behalf of the Non- Tied up Merchant. Only upon processing
                such agreed amount via Platform, shall the Delivery Partner
                purchase the Item on Your behalf.
              </li>
              <li>
                c. <b>Pick Up and Drop Off Services:</b> While initiating a
                request for a Pick Up and Drop Off Service, You shall pay the
                service fees for availing the Pick Up and Drop Off Service, as
                may be displayed to You on the Platform. Only upon making such
                payment will the Delivery Partner initiate the Pick Up and Drop
                of Service.
              </li>
              <li>
                d. <b>Bike Taxi Service:</b> While initiating a request for a
                Bike Taxi Services on the Platform, You shall pay the service
                fees for availing the Bike Taxi Services, as may be displayed to
                You on the Platform. Only upon making such payment will you be
                eligible to avail the Bike Taxi Service.
              </li>
              <li>
                e. <b>Bike Pool Service:</b> While initiating a request for a
                Bike Pool Services on the Platform, You shall pay such fare
                (calculated basis journey distance and time) for availing the
                Bike Pool Services, as may be displayed to You on the Platform.
                Only upon making such payment will you be eligible to avail the
                Bike Pool Service.
              </li>
              <li>
                f. <b>Service Fees:</b> With respect to Delivery Services and
                Purchase Services, You will be charged a separate service fees
                ("<b>Service Fees</b>"). The Service Fees shall be paid prior to
                availing any of the Kartzo Services.
              </li>
              <li>
                g. You agree that Kartzo may use certain third-party vendors and
                service providers, including payment gateways, to process the
                payments made by You on the Platform.
              </li>
            </ul>

            <h2 className="title-small light">5. Rating</h2>
            <ul>
              <li>
                a. You agree that: (i) after completion of a transaction on the
                Platform, the Platform will prompt the User with an option to
                provide a rating and comments about the Delivery Partner (with
                respect to the services performed by the Delivery Partner) and
                Merchants (with respect to the Items sold/provided by them); and
                (ii) the Delivery Partner and the Tied-Up Merchants may also be
                prompted to rate You on the Platform. Based upon such Delivery
                Partner and Merchant ratings, Your rating score on the Platform
                will be determined and displayed.
              </li>
              <li>
                b. Kartzo and its affiliates reserve the right to use, share and
                display such ratings and comments in any manner in connection
                with the business of Kartzo and its affiliates without
                attribution to or approval of Users and You hereby consent to
                the same. Kartzo and its affiliates reserve the right to edit or
                remove comments in the event that such comments include
                obscenities or other objectionable content, include an
                individual’s name or other personal information, or violate any
                privacy laws, other applicable laws or Kartzo’s or its
                affiliates’ content policies.
              </li>
              <li>
                c. <b>Location:</b> You acknowledge and agree that Your
                geo-location information is required for You to avail the Kartzo
                Services and initiate transactions on the Platform. You
                acknowledge and hereby consent to the monitoring and tracking of
                Your geo-location information. In addition, Kartzo may share
                Your geo-location information with Delivery Partners and
                Merchants (as the case maybe).
              </li>
            </ul>

            <h2 className="title align-center">
              PART B - SPECIFIC TERMS FOR Kartzo SERVICES
            </h2>
            <h2 className="title-small light">6. Cancellation and Refund</h2>
            <ul>
              <li>
                a. Kartzo shall confirm and initiate the execution of the
                transaction initiated by You upon receiving confirmation from
                You for the same. If You wish to cancel a transaction on the
                Platform, You shall select the cancel option on the Platform. It
                is to be noted that You may have to pay a cancellation fee for
                transactions initiated on the Platform for which work has
                already been commenced by the Delivery Partner or the Merchant,
                as the case may be. With respect to work commenced by Merchants
                the cancellation fee will be charged to You which will be in
                accordance with the cancellation and refund policies of such
                Merchants.
              </li>
              <li>
                b. Kartzo may cancel the transaction initiated by You on the
                Platform, if:
                <ul className="dotted-list">
                  <li>
                    The designated address to avail the Kartzo Services provided
                    by You is outside the service zone of Kartzo.
                  </li>
                  <li>
                    Failure to get your response via phone or any other
                    communication channel at the time of confirmation of the
                    order booking.
                  </li>
                  <li>
                    The transaction involves supply/delivery/purchase of any
                    material good that is illegal, offensive or violative of the
                    Terms of Use.
                  </li>
                  <li>
                    [If the transaction involves the purchase of medicines for
                    which a medical prescription prescribed by a medical
                    practitioner is required and for which You have not provided
                    such medical prescription or provided an invalid medical
                    prescription.]
                  </li>
                  <li>
                    Information, instructions and authorisations provided by You
                    is not complete or sufficient to execute the transaction
                    initiated by You on the Platform.
                  </li>
                  <li>
                    If in case of tied-up Merchants, the Tied-Up Merchant outlet
                    is closed.
                  </li>
                  <li>
                    If a Delivery Partner is not available to perform the
                    services, as may be requested.
                  </li>
                  <li>
                    If any Item for which You have initiated the transaction is
                    not in stock with the Merchant.
                  </li>
                  <li>
                    If the transaction cannot be completed for reasons not in
                    control of Kartzo.
                  </li>
                </ul>
              </li>
              <li>
                c. You shall only be able to claim refunds for transactions
                initiated by You only if You have already pre-paid the fees with
                respect to such transaction. Subject to relevant Merchant’s
                refund policy and in accordance therein, You shall be eligible
                to get the refund in the following circumstances:
                <ul className="dotted-list">
                  <li>
                    Your package has been tampered or damaged at the time of
                    delivery, as determined by Kartzo basis the parameters
                    established by Kartzo in its sole discretion.
                  </li>
                  <li>
                    If the wrong Item has been delivered to You, which does not
                    match with the Item for which You had initiated a
                    transaction on the Platform.
                  </li>
                  <li>
                    Kartzo has cancelled the order because of any reason
                    mentioned under Para 6 (b) above.
                  </li>
                  <li>
                    All decisions with respect to refunds will be at the sole
                    discretion of Kartzo and in accordance with Kartzo’s
                    internal refund policy (Refund Metrix) and the same shall be
                    final and binding. All refunds initiated by Kartzo shall be
                    refunded to the financial source account from which, You
                    have initiated the transaction on the Platform.
                  </li>
                </ul>
              </li>
            </ul>

            <h2 className="title-small light">
              7. Pick Up and Drop Off Services
            </h2>
            <p>
              i. As a part of the Kartzo Services, Kartzo also gives You an
              option to avail the Pick Up and Drop Off Services being provided
              by the Delivery Partners.
            </p>
            <p>
              ii. You can initiate a transaction on the Platform by which You
              may (through the help of a Delivery Partner) send packages at a
              particular location. The Pick Up and Drop Off Services are
              provided to You directly by the Delivery Partner and Kartzo merely
              acts as a technology platform to facilitate transactions initiated
              on the Platform and Kartzo does not assume any responsibility or
              liability for any form of deficiency of services on part of the
              Delivery Partner.
            </p>
            <p>
              iii. Upon initiation of a request for Pick Up and Drop Off
              Services on the Platform, depending upon the availability of
              Delivery Partner around Your area, Kartzo will assign a Delivery
              Partner to You. The Delivery Partner shall pick up the Item from a
              location designated by You on the Platform and drop off the Items
              at a particular location designated by You. While performing the
              Pick Up and Drop off Services, the Delivery Partner shall act as
              an agent of You and shall act in accordance with Your
              instructions. You agree and acknowledge that the pick-up location
              and the drop off location has been added by You voluntarily and
              such information will be used for the Kartzo Services and shall be
              handled by Kartzo in accordance with the terms of its Privacy
              Policy.
            </p>
            <p>
              iv. You agree that You shall not request for a Pick Up and Drop
              Off Services for Items which are illegal, hazardous, dangerous, or
              otherwise restricted or constitute Items that are prohibited by
              any statute or law or regulation or the provisions of this Terms
              of Use.
            </p>
            <p>
              v. You agree that before requesting a Pick-up and Drop-off
              Service, You are well aware of the contents of the package sent or
              requested by You through registered Delivery Partner, and that
              such contents are legal and within limits of transportation under
              any applicable laws. Such contents shall not be restricted and/or
              banned and/or dangerous and/or prohibited for carriage (such items
              include, but are not limited to, radio-active, incendiary,
              corrosive or flammable substances, hazardous chemicals,
              explosives, firearms or parts thereof and ammunition,
              firecrackers, cyanides, precipitates, gold and silver ore,
              bullion, precious metals and stones, jewellery, semi-precious
              stones including commercial carbons or industrial diamonds,
              currency (paper or coin) of any nationality, securities (including
              stocks and bonds, share certificates and blank signed share
              transfer forms), coupons, stamps, negotiable instruments in bearer
              form, cashier's cheques, travellers’ cheques, money orders,
              passports, credit/debit/ATM cards, antiques, works of art, lottery
              tickets and gambling devices, livestock, fish, insects, animals,
              plants and plant material, human corpses, organs or body parts,
              blood, urine and other liquid diagnostic specimens, hazardous or
              bio-medical waste, wet ice, pornographic materials, contraband,
              bottled alcoholic beverages or any intoxicant or narcotics and
              psychotropic substances or any other prohibited material or
              material for the transportation of which specific
              authorisation/license is required under applicable laws).
            </p>
            <p>
              vi. You are also aware that the Delivery Partner may choose to
              perform the Pick Up and Delivery Services requested by You.
            </p>
            <p>
              vii. You also agree that, upon becoming aware of the commission
              any offence by You or Your intention to commit any offence upon
              initiating a Pick-up and Drop-off Service or during a Pick-up and
              Drop-off service of any Item(s) restricted under applicable law,
              the Delivery Partner may report such information to Kartzo or to
              the law enforcement authorities.
            </p>

            <p>
              8. Kartzo Cash, Google Pay Offer, Paytm Offer and Amazon Pay Offer
              shall hereinafter be referred to as "<b>Offer</b>".
            </p>

            <p>
              9. You hereby agree and acknowledge that the Offers are being
              extended by Kartzo at its sole independent discretion and nothing
              shall entitle You to any of the Offers. You shall read the terms
              and conditions of the Offers carefully before availing them.
            </p>

            <h2 className="title align-center">PART C: GENERAL TERMS OF USE</h2>

            <h2 className="title-small light">10. Eligibility to Use</h2>
            <p>
              a. The Kartzo Services are not available to minors i.e. persons
              under the age of 18 (eighteen) years or to any Users suspended or
              removed by Kartzo from accessing the Platform for any reason
              whatsoever. You represent that You are of legal age to form a
              binding contract and are not a person barred from receiving using
              or availing Kartzo Services under the applicable laws.
            </p>
            <p>
              b. Kartzo reserves the right to refuse access to the Platform, at
              any time to new Users or to terminate or suspend access granted to
              existing Users at any time without according any reasons for doing
              so.
            </p>
            <p>
              c. You shall not have more than 1 (one) active Account (as defined
              below) on the Platform. Additionally, You are prohibited from
              selling, trading, or otherwise transferring Your Account to
              another party or impersonating any other person for the purposing
              of creating an account with the Platform.
            </p>

            <h2 className="title-small light">
              11. User Account, Password, and Security
            </h2>
            <ul>
              <li>
                a. In order to use the Platform and avail the Kartzo Services,
                You will have to register on the Platform and create an account
                with a unique user identity and password ("<b>Account</b>"). If
                You are using the Platform on a compatible mobile or tablet, You
                will have to install the application and then proceed with
                registration.
              </li>
              <li>
                b. You will be responsible for maintaining the confidentiality
                of the Account information, and are fully responsible for all
                activities that occur under Your Account. You agree to (i)
                immediately notify Kartzo of any unauthorized use of Your
                Account information or any other breach of security, and (ii)
                [ensure that You exit from Your Account at the end of each
                session.] Kartzo cannot and will not be liable for any loss or
                damage arising from Your failure to comply with this provision.
                You may be held liable for losses incurred by Kartzo or any
                other User of or visitor to the Platform due to authorized or
                unauthorized use of Your Account as a result of Your failure in
                keeping Your Account information secure and confidential.Use of
                another User’s Account information for using the Platform is
                expressly prohibited.
              </li>
            </ul>

            <h2 className="title-small light">
              12. Representations and Warranties
            </h2>
            <ul>
              <li>
                a. Subject to compliance with the Terms of Use, Kartzo grants
                You a non-exclusive, limited privilege to access and use this
                Platform and the Kartzo Services.
              </li>
              <li>
                b. You agree to use the Platform only: (i) for purposes that are
                permitted by this Terms of Use; and (ii) in accordance with any
                applicable law, regulation or generally accepted practices or
                guidelines. You agree not to engage in activities that may
                adversely affect the use of the Platform by Kartzo or Delivery
                Partner(s) or Merchants or other Users.
              </li>
              <li>
                c. You represent and warrant that You have not received any
                notice from any third party or any governmental authority and no
                litigation is pending against You in any court of law, which
                prevents You from accessing the Platform and/or availing the
                Kartzo Services.
              </li>
              <li>
                d. You represent and warrant that You are legally authorised to
                view and access the Platform and avail the Kartzo Services.
              </li>
              <li>
                e. You agree not to access (or attempt to access) the Platform
                by any means other than through the interface that is provided
                by Kartzo. You shall not use any deep-link, robot, spider or
                other automatic device, program, algorithm or methodology, or
                any similar or equivalent manual process, to access, acquire,
                copy or monitor any portion of the Platform, or in any way
                reproduce or circumvent the navigational structure or
                presentation of the Platform, materials or any Kartzo Property,
                to obtain or attempt to obtain any materials, documents or
                information through any means not specifically made available
                through the Platform.
              </li>
              <li>
                f. You acknowledge and agree that by accessing or using the
                Platform, You may be exposed to content from others that You may
                consider offensive, indecent or otherwise objectionable. Kartzo
                disclaims all liabilities arising in relation to such offensive
                content on the Platform.
              </li>
              <li>
                g. Further, You undertake not to:
                <ul className="dotted-list">
                  <li>
                    defame, abuse, harass, threaten or otherwise violate the
                    legal rights of others;
                  </li>
                  <li>
                    publish, post, upload, distribute or disseminate any
                    inappropriate, profane, defamatory, infringing, disparaging,
                    ethnically objectionable, obscene, indecent or unlawful
                    topic, name, material or information;
                  </li>
                  <li>do any such thing that may harms minors in any way;</li>
                  <li>
                    copy, republish, post, display, translate, transmit,
                    reproduce or distribute any Kartzo Property through any
                    medium without obtaining the necessary authorization from
                    Kartzo;
                  </li>
                  <li>
                    conduct or forward surveys, contests, pyramid schemes or
                    chain letters;
                  </li>
                  <li>
                    upload or distribute files that contain software or other
                    material protected by applicable intellectual property laws
                    unless You own or control the rights thereto or have
                    received all necessary consents;
                  </li>
                  <li>
                    upload or distribute files or documents or videos (whether
                    live or pre-recorded) that contain viruses, corrupted files,
                    or any other similar software or programs that may damage
                    the operation of the Platform or another's computer;
                  </li>
                  <li>
                    engage in any activity that interferes with or disrupts
                    access to the Platform (or the servers and networks which
                    are connected to the Platform);
                  </li>
                  <li>
                    attempt to gain unauthorized access to any portion or
                    feature of the Platform, any other systems or networks
                    connected to the Platform, to any Kartzo server, or through
                    the Platform, by hacking, password mining or any other
                    illegitimate means;
                  </li>
                  <li>
                    probe, scan or test the vulnerability of the Platform or any
                    network connected to the Platform, nor breach the security
                    or authentication measures on the Platform or any network
                    connected to the Platform. You may not reverse look-up,
                    trace or seek to trace any information on any other User, of
                    or visitor to, the Platform, to its source, or exploit the
                    Platform or information made available or offered by or
                    through the Platform, in any way whether or not the purpose
                    is to reveal any information, including but not limited to
                    personal identification information, other than Your own
                    information, as provided on the Platform;
                  </li>
                  <li>
                    disrupt or interfere with the security of, or otherwise
                    cause harm to, the Platform, systems resources, accounts,
                    passwords, servers or networks connected to or accessible
                    through the Platform or any affiliated or linked sites;
                  </li>
                  <li>
                    collect or store data about other Users, Merchants, Delivery
                    Partner in connection with the prohibited conduct and
                    activities set forth herein;
                  </li>
                  <li>
                    use any device or software to interfere or attempt to
                    interfere with the proper working of the Platform or any
                    transaction being conducted on the Platform, or with any
                    other person’s use of the Platform;
                  </li>
                  <li>
                    use the Platform or any material or Kartzo Property for any
                    purpose that is unlawful or prohibited by these Terms of
                    Use, or to solicit the performance of any illegal activity
                    or other activity which infringes the rights of the Company
                    or other third parties;
                  </li>
                  <li>
                    falsify or delete any author attributions, legal or other
                    proper notices or proprietary designations or labels of the
                    origin or source of software or other material contained in
                    a file that is uploaded;
                  </li>
                  <li>
                    impersonate any other User, Merchant, Delivery Partner or
                    person;
                  </li>
                  <li>
                    violate any applicable laws or regulations for the time
                    being in force within or outside India or anyone’s right to
                    privacy or personality;
                  </li>
                  <li>
                    violate the Terms of Use contained herein or elsewhere;
                  </li>
                  <li>
                    threatens the unity, integrity, defence, security or
                    sovereignty of India, friendly relation with foreign states,
                    or public order or causes incitement to the commission of
                    any cognisable offence or prevents investigation of any
                    offence or is insulting for any other nation; and
                  </li>
                  <li>
                    reverse engineer, modify, copy, distribute, transmit,
                    display, perform, reproduce, publish, license, create
                    derivative works from, transfer, or sell any information or
                    software obtained from the Platform.
                  </li>
                </ul>
              </li>
              <li>
                h. You agree and acknowledge that the use of the Kartzo Services
                offered by Kartzo is at Your sole risk and that Kartzo disclaims
                all representations and warranties of any kind, whether express
                or implied as to condition, suitability, quality,
                merchantability and fitness for any purposes are excluded to the
                fullest extent permitted by law.
              </li>
              <li>
                i. Without prejudice to the above, Kartzo makes no
                representation or warranty that the Kartzo Services will meet
                Your requirements.
              </li>
              <li>
                j. All materials/content on our Platform (except any third party
                content available on the Platform), including, without
                limitation, names, logos, trademarks, images, text, columns,
                graphics, videos, photographs, illustrations, artwork, software
                and other elements (collectively, "<b>Material</b>") are
                protected by copyrights, trademarks and/or other intellectual
                property rights owned and controlled by Kartzo. You acknowledge
                and agree that the Material is made available for limited,
                non-commercial, personal use only. Except as specifically
                provided herein or elsewhere in our Platform, no Material may be
                copied, reproduced, republished, sold, downloaded, posted,
                transmitted, or distributed in any way, or otherwise used for
                any purpose other than the purposes stated under this Terms of
                Use, by any person or entity, without Kartzo’s prior express
                written permission. You may not add, delete, distort, or
                otherwise modify the Material. Any unauthorized attempt to
                modify any Material, to defeat or circumvent any security
                features, or to utilize our Platform or any part of the Material
                for any purpose other than its intended purposes is strictly
                prohibited. Subject to the above restrictions under this Clause,
                Kartzo hereby grants You a non-exclusive, freely revocable (upon
                notice from Kartzo), non-transferable access to view the
                Material on the Platform.
              </li>
            </ul>

            <h2 className="title-small light">
              13. Intellectual Property Rights
            </h2>
            <ul>
              <li>
                a. The Platform and process, and their selection and
                arrangement, including but not limited to, all text, videos,
                graphics, user interfaces, visual interfaces, sounds and music
                (if any), artwork, algorithm and computer code (and any
                combination thereof), except any third party software available
                on the Platform, is owned by Kartzo ("<b>Kartzo Property</b>")
                and the design, structure, selection, co-ordination, expression,
                look and feel and arrangement of such Kartzo Property is
                protected by copyright, patent and trademark laws, and various
                other intellectual property rights. You are not permitted to use
                Kartzo Property without the prior written consent of Kartzo.
              </li>
              <li>
                b. The trademarks, logos and service marks displayed on the
                Platform ("<b>Marks</b>") are the property of Kartzo, except any
                trademark, logos and service marks of third parties available on
                the Platform. You are not permitted to use the Marks without the
                prior consent of Kartzo or such third party as may be
                applicable.
              </li>
            </ul>

            <h2 className="title-small light">
              14. Disclaimer of Warranties &amp; Liabilities
            </h2>
            <p>
              You expressly understand and agree that, to the maximum extent
              permitted by applicable law:
            </p>
            <ul>
              <li>
                a. The Platform and Kartzo Property, Kartzo Services are
                provided by Kartzo on an "as is" basis without warranty of any
                kind, express, implied, statutory or otherwise, including the
                implied warranties of title, non-infringement, merchantability
                or fitness for a particular purpose. Without limiting the
                foregoing, Kartzo makes no warranty that (i) the Platform,
                Kartzo Services will meet Your requirements or Your use of the
                Platform will be uninterrupted, timely, secure or error-free;
                (ii) the quality of the Platform will meet Your expectations; or
                (iii) any errors or defects in the Platform will be corrected.
                No advice or information, whether oral or written, obtained by
                You from Kartzo shall create any warranty not expressly stated
                in the Terms of Use.
              </li>
              <li>
                b. Kartzo will have no liability related to any User content
                arising under intellectual property rights, libel, privacy,
                publicity, obscenity or other laws. Kartzo also disclaims all
                liability with respect to the misuse, loss, modification or
                unavailability of any User content.
              </li>
              <li>
                c. Kartzo will not be liable for any loss that You may incur as
                a consequence of unauthorized use of Your Account or Account
                information in connection with the Platform either with or
                without Your knowledge.
              </li>
              <li>
                d. Kartzo shall not be responsible for the delay or inability to
                use the Platform, Kartzo Services or related functionalities,
                the provision of or failure to provide functionalities, or for
                any information, software, functionalities and related graphics
                obtained through the Platform, or otherwise arising out of the
                use of the Platform, whether based on contract, tort,
                negligence, strict liability or otherwise. Further, Kartzo shall
                not be held responsible for non-availability of the Platform
                during periodic maintenance operations or any unplanned
                suspension of access to the Platform that may occur due to
                technical reasons or for any reason beyond Kartzo's control. You
                understand and agree that any material or data downloaded or
                otherwise obtained through the Platform is done entirely at Your
                own discretion and risk, and that You will be solely responsible
                for any damage to Your computer systems or loss of data that
                results from the download of such material or data.
              </li>
            </ul>

            <h2 className="title-small light">
              15. Indemnification and Limitation of Liability
            </h2>
            <ul>
              <li>
                a. You agree to indemnify, defend and hold harmless Kartzo and
                its affiliates including but not limited to its officers,
                directors, consultants, agents and employees ("
                <b>Indemnitees</b>") from and against any and all losses,
                liabilities, claims, damages, demands, costs and expenses
                (including legal fees and disbursements in connection therewith
                and interest chargeable thereon) asserted against or incurred by
                the Indemnitees that arise out of, result from, or may be
                payable by virtue of, any breach or non-performance of any
                obligation, covenant, representation or warranty by You pursuant
                to these Terms of Use. Further, You agree to hold the
                Indemnitees harmless against any claims made by any third party
                due to, or arising out of, or in connection with, Your use of
                the Platform, Kartzo Services, any misrepresentation with
                respect to the data or information provided by You in relation
                to the Account, Your violation of the Terms of Use, or Your
                violation of any rights of another, including any intellectual
                property rights.
              </li>
              <li>
                b. In no event shall the Indemnitees, be liable to You or any
                third party for any special, incidental, indirect, consequential
                or punitive damages whatsoever, arising out of or in connection
                with Your use of or access to the Platform or Kartzo Property on
                the Platform.
              </li>
              <li>
                c. You indemnification obligation under the Terms of Use will
                survive the termination of Your Account or use of the Platform
                or Kartzo Services.
              </li>
              <li>
                d. Subject to applicable laws, in no event will Kartzo or its
                employees aggregate liability, arising from or related to the
                Kartzo Services or the use of the Platform shall not exceed INR
                100 for any and all causes of actions brought by You or on
                behalf of You.
              </li>
              <li>
                e. The Platform and the Kartzo Services are only available to
                Users located in India. Users shall not access or use the
                Platform from any other jurisdiction except for India. If a User
                access or uses the Platform from any other jurisdiction except
                for India, the User shall be liable to comply with all
                applicable laws and Kartzo shall not be liable for the same,
                whatsoever.
              </li>
            </ul>

            <h2 className="title-small light">
              16. Violation of the Terms of Use
            </h2>
            <p>
              You agree that any violation by You of these Terms of Use will
              constitute an unlawful and unfair business practice, and will
              cause irreparable harm to the Company/Client, as the case may be,
              for which monetary damages would be inadequate, and You consent to
              the Company/Client obtaining any injunctive or equitable relief
              that they deem necessary or appropriate in such circumstances.
              These remedies are in addition to any other remedies that the
              Company/Client may have at law or in equity. If Company/Client
              takes any legal action against You as a result of Your violation
              of these Terms of Use, they will be entitled to recover from You,
              and You agree to pay, all reasonable attorneys’ fees and costs of
              such action, in addition to any other relief that may be granted.
            </p>

            <h2 className="title-small light">17. Additional Terms</h2>
            <p>
              a. We may also require You to follow additional rules, guidelines
              or other conditions in order to participate in certain promotions
              or activities available through the Platform. These additional
              terms shall form a part of this Terms of Use, and You agree to
              comply with them when You participate in those promotions, or
              otherwise engage in activities governed by such additional terms.
            </p>

            <h2 className="title-small light">18. Link to Third Parties</h2>
            <p>
              a. The Platform may contain links to other sites owned by third
              parties (i.e. advertisers, affiliate partners, strategic partners,
              or others). Kartzo shall not be responsible for examining or
              evaluating such third party websites, and Kartzo does not warrant
              the products or offerings of, any of these businesses or
              individuals, or the accuracy of the content of such third party
              websites. Kartzo does not assume any responsibility or liability
              for the actions, product, and content of any such third party
              websites. Before You use/access any such third-party websites, You
              should review the applicable terms of use and policies for such
              third party websites. If You decide to access any such linked
              third party website, You do so at Your own risk.
            </p>

            <h2 className="title-small light">19. Term and Termination</h2>
            <p>
              a. The Terms of Use will continue to apply until terminated by
              either You or Kartzo as set forth below. If You object to the
              Terms of Use or are dissatisfied with the Platform, Kartzo
              Services, Your only recourse is to (i) close Your Account on the
              Platform by writing to Us at accountdelete@Kartzo.in; and/or (ii)
              stop accessing the Platform. Kartzo will make Your account dormant
              upon receipt of request in writing. <br /> Kartzo may, in its sole
              discretion, bar your use of the Kartzo Services at any time, for
              any or no reason. Even after your account with Kartzo is disabled,
              dormant or made inactive, the terms agreed by You at the time of
              registration will remain in effect. This termination shall be
              effective only once You have cleared all Your dues that You are
              liable to pay as per the provisions of this Terms of Use.
            </p>
            <p>
              b. The Company may delist You or block Your future access to the
              Platform or suspend or terminate Your Account if it believes, in
              its sole and absolute discretion that You have infringed,
              breached, violated, abused, or unethically manipulated or
              exploited any term of these Terms of Use or anyway otherwise acted
              unethically.
            </p>
            <p>
              c. Notwithstanding anything in this clause, these Terms of Use
              will survive indefinitely unless and until Kartzo chooses to
              terminate them.
            </p>
            <p>
              d. You hereby agree and acknowledge, upon termination, Kartzo
              shall have the right to retain all information pertaining to the
              transactions initiated by You on the Platform.
            </p>

            <h2 className="title-small light">20. Governing Law</h2>
            <p>
              This Terms of Use shall be governed by and constructed in
              accordance with the laws of India without reference to conflict of
              laws principles and disputes arising in relation hereto shall be
              subject to the exclusive jurisdiction of courts, tribunals, fora,
              applicable authorities at Bangalore.
            </p>

            <h2 className="title-small light">21. Report Abuse</h2>
            <p>
              In the event You come across any abuse or violation of these Terms
              of Use or if You become aware of any objectionable content on the
              Platform, please report the same to the following e-mail id:
              support@duzo.in In case You have any queries with respect to the
              Terms or the Kartzo Services, please write to Us at
              support@Kartzo.in
            </p>

            <h2 className="title-small light">22. Communications</h2>
            <p>
              You hereby expressly agree to receive communications by way of
              SMSs and/or e-mails from Kartzo, or other third parties. You can
              unsubscribe/ opt-out from receiving communications through SMS and
              e-mail anytime by contacting us for the same. However, You may
              still receive communications from Your end with respect to Your
              use of the Kartzo Service.
            </p>

            <h2 className="title-small light">23. General</h2>
            <ul>
              <li>
                a. <b>Amendments:</b> Kartzo reserves the unconditional right to
                modify or amend this Terms of Use without any requirement to
                notify You of the same. You can determine when this Terms of Use
                was last modified by referring to the "<b>Last Updated</b>"
                legend above. It shall be Your responsibility to check this
                Terms of Use periodically for changes. Your acceptance of the
                amended Terms of Use shall signify Your consent to such changes
                and agreement to be legally bound by the same.
              </li>
              <li>
                b. <b>Notice:</b> All notices from Kartzo will be served by
                email to Your registered email address or by general
                notification on the Platform.
              </li>
              <li>
                c. <b>Assignment:</b> You cannot assign or otherwise transfer
                the Terms of Use, or any rights granted hereunder to any third
                party. Kartzo’s rights under the Terms of Use are freely
                transferable by Kartzo to any third party without the
                requirement of informing You or seeking Your consent.
              </li>
              <li>
                d. <b>Severability:</b> If, for any reason, a court of competent
                jurisdiction finds any provision of the Terms of Use, or any
                portion thereof, to be unenforceable, that provision shall be
                enforced to the maximum extent permissible so as to give effect
                to the intent of the parties as reflected by that provision, and
                the remainder of the Terms of Use shall continue in full force
                and effect.
              </li>
              <li>
                e. <b>Waiver:</b> Any failure by Kartzo to enforce or exercise
                any provision of the Terms of Use, or any related right, shall
                not constitute a waiver by Kartzo of that provision or right.
              </li>
              <li>
                f. <b>Integration:</b> These Terms of Use together with Kartzo’s
                Privacy Policy and any other legal notices, communications
                published by Kartzo on its Platform, and any other agreements
                executed between You and Kartzo shall constitute the entire
                agreement between you and Kartzo concerning its Platform, Kartzo
                Services and governs Your use of the Platform and Kartzo
                Service, superseding any prior agreements between You and Kartzo
                with respect to the Platform and Kartzo Service
              </li>
              <li>
                g. <b>IP Infringement</b> If You believe the Platform violates
                Your intellectual property, You must promptly notify Kartzo in
                writing at [legalnotices@Kartzo.in These notifications should
                only be submitted by the owner of the intellectual property or
                an agent duly authorized to act on his/her behalf. However, any
                false claim by You may result in the termination of Your access
                to the Platform. You are required to provide the following
                details in Your notice:
                <p>
                  i. the intellectual property that You believe is being
                  infringed;
                </p>
                <p>
                  ii. the item that You think is infringing and include
                  sufficient information about where the material is located on
                  the Platform;
                </p>
                <p>
                  iii. a statement that You believe in good faith that the item
                  You have identified as infringing is not authorized by the
                  intellectual property owner, its agent, or the law to be used
                  in connection with the Platform;
                </p>
                <p>
                  iv. Your contact details, such as Your address, telephone
                  number, and/or email;
                </p>
                <p>
                  v. a statement that the information You provided in Your
                  notice is accurate, and that You are the intellectual property
                  owner or an agent authorized to act on behalf of the
                  intellectual property owner whose intellectual property is
                  being infringed; and
                </p>
                <p>vi. Your physical or electronic signature.</p>
              </li>
            </ul>
          </div>

          <div className="container" id="Kartzo_cash">
            <h2 className="title align-center mt-60">
              Kartzo Cash - Terms and Conditions
            </h2>
            <p>
              The following terms and conditions are applicable to Kartzo Cash
              ("Kartzo Cash T&amp;C"). These Kartzo Cash T&amp;Cs are in
              addition to and will be read with the{" "}
              <a href="#user_terms">User Terms and Conditions</a> available here
              ("User Terms and Conditions"). The Kartzo Cash T&amp;C may be
              amended at the discretion of Kartzo Digital Private Limited
              ("Kartzo") and such amended terms will be posted here. Please
              review these Kartzo Cash T&amp;Cs from time to time.
            </p>
            <ul>
              <li>
                1. Kartzo Cash is a form of redemption points given by Kartzo
                for its users on the Kartzo App and is offered either at the
                time of joining Kartzo App, through the referral programme ("
                <a href="#user_referral_program">Referral program</a>") or
                through any other mode as may be indicated by Kartzo.
              </li>
              <li>
                2. The quantum of Kartzo Cash issued, the maximum amount of
                Kartzo Cash that can be used per order and the validity of
                Kartzo Cash may vary from time to time and will be indicated to
                a user on their respective Kartzo App.
              </li>
              <li>
                3. Kartzo Cash cannot be converted into actual currency or be
                withdrawn or transferred to another user in any way.
              </li>
              <li>
                4. Kartzo Cash is to be used by users personally. Kartzo Cash
                cannot be used for business or corporate purposes. Exploiting
                the use of Kartzo Cash or assisting others to exploit Kartzo
                Cash is strictly prohibited, and will result in
                suspension/termination from use of Kartzo Cash and Kartzo App.
                Users must not refer themselves or create multiple, fictitious
                or fake accounts with Kartzo. In addition, users and their
                referees cannot (i) use Kartzo Cash to violate any law, infringe
                or violate the rights of any third party, or otherwise act in a
                manner that is deemed unfair, disruptive, harassing, harmful,
                illegal; (ii) collect or harvest any personally identifiable
                information from the referral program; or (iii) use any system,
                bot or other device to participate or receive any benefit
                through the referral programme.
              </li>
              <li>
                5. Kartzo Cash may not be redeemed for cash. It is not
                transferable and may not be auctioned, traded, bartered or sold.
              </li>
              <li>
                6. Kartzo Cash may not be applicable for certain services and in
                certain geos, as per the independent discretion of Kartzo.
                Currently, Kartzo Cash cannot be redeemed against Pillion, Bike
                Pool, Pickup and Drop Services, Others task. Kartzo shall notify
                to the users, in case of any updates to the services or geos
                that cannot be redeemed for Kartzo Cash. Kartzo Cash may also
                not be applicable on certain items made available by a Merchant.
                These restricted items will be indicated to the user on the
                Kartzo App.
              </li>
              <li>
                7. Kartzo Cash cannot be clubbed with any other discount or
                offer run on the Kartzo App.
              </li>
              <li>
                8. In case of any issue pertaining to the quantum of Kartzo
                Cash, usage of Kartzo Cash etc., the independent decision made
                by Kartzo shall be final and binding. Further, in the event, the
                Company has reasons to believe, that a user has acted
                fraudulently for availing Kartzo Cash or has used Kartzo Cash in
                a manner inconsistent with these Kartzo Cash T&amp;Cs, Kartzo
                shall upon investigation have the right to suspend the user.
                Further, pending investigation, the user shall not be entitled
                to use Kartzo Cash available with them.
              </li>
              <li>
                9. Kartzo reserves the right to terminate Kartzo Cash or modify
                these Kartzo Cash T&amp;Cs and/or benefits at any point in time,
                without any reason or without notice to users. This wouldn’t
                affect the Kartzo Cash already issued to users. Kartzo reserves
                the right to disqualify any user at any time from using Kartzo
                Cash if there are reasons to believe that such user has violated
                any of these Kartzo Cash T&amp;C or the User Terms and
                Conditions.
              </li>
              <li>
                10. These Kartzo Cash T&amp;C shall be governed by and construed
                in accordance with the laws of India without reference to
                conflict of laws principles. Disputes arising in relation hereto
                shall be subject to the exclusive jurisdiction of courts at
                Bangalore.
              </li>
            </ul>
          </div>

          <div className="container" id="user_referral_program">
            <h2 className="title align-center mt-60">
              Kartzo Referral Programme – Terms and Conditions
            </h2>
            <ul>
              <li>
                1. Kartzo Referral Programme is a reward program initiated by
                Kartzo Digital Private Limited (“Kartzo”) for encouraging
                Eligible Users to refer the Kartzo App to their friends and
                family against Kartzo Cash.
              </li>
              <li>
                2. Each Eligible User (“Referee”) is provided with a referral
                code, which he/she may choose to share with people known to them
                personally and have consented to receive such referral code.
              </li>
              <li>
                3. Each new user (“Referred”) downloading the Kartzo App shall
                receive Kartzo Cash upon them entering the referral code shared
                by the Referee.
              </li>
              <li>
                4. A Referee shall receive Kartzo Cash upon the Referred using
                the Kartzo App within the first 7 (seven) days of the Referred
                downloading the Kartzo App for a task not less than INR 100
                (Indian Rupees One Hundred only).
              </li>
              <li>5. Each Referee can refer up to a maximum of 10 users.</li>
              <li>
                6. Users must refer and distribute the referral codes only to
                people known to them personally and have consented to receive
                such referral code. Users must not send bulk and spam emails to
                distribute the referral code nor must users post it on any
                public platform for distribution to strangers. Any violation of
                these terms will immediately lead to disqualification of use of
                the Kartzo App in addition to exposure to further legal action.
              </li>
              <li>
                7. Upon a Referee reaching the maximum number of referrals, the
                referral code shall become invalid.
              </li>
              <li>
                8. For the purpose of these terms and conditions “Eligible User”
                shall mean such users as may be indicated by Kartzo from time to
                time.
              </li>
              <li>
                9. In case of any issue pertaining to the eligibility to refer
                or be referred, the independent decision made by Kartzo shall be
                final and binding. For any issue pertaining to receipt of Kartzo
                Cash, please write to{" "}
                <a href="mailto:support@Kartzo.in">support@Kartzo.in</a>.
              </li>
              <li>
                10. Company reserves the right to terminate the Kartzo Referral
                Programme or modify these terms at any point in time, without
                notice to users. This wouldn’t affect the benefits already
                availed by such user.
              </li>
              <li>
                11. These terms are in addition to and not a substitution for
                the terms and conditions on the Kartzo App / website or other
                product(s) / service(s) specific terms and conditions. Further,
                these terms shall be governed by and constructed in accordance
                with the laws of India without reference to conflict of laws
                principles and disputes arising in relation hereto shall be
                subject to the exclusive jurisdiction of courts at Bangalore.
              </li>
            </ul>
          </div>

          <div className="container" id="partner_terms">
            <h2 className="title align-center mt-60">Partner Terms</h2>
            <p>
              These terms of use <span className="bold">(“Terms of Use”)</span>{" "}
              describe the terms on which the delivery partners
              <span className="bold">(“You”</span> or{" "}
              <span className="bold">“Your”</span> or{" "}
              <span className="bold">“Yourself”</span> or{" "}
              <span className="bold">“Delivery Partner”)</span>nterested in
              registering or availingKartzo Services (defined below) and
              accessing the platform www.Kartzo.com and the mobile application{" "}
              <span className="bold">“Kartzo”</span> owned and operated by{" "}
              <span className="bold">
                Kartzo Digital Private Limited (“Kartzo”)
              </span>{" "}
              and licensed for use on a revocable, non-exclusive, temporary,
              non-assignable basis to You,collectively referred to as, the{" "}
              <span className="bold">“Platform”</span>, connect with the users
              registered on the Platform <span className="bold">(“Users”)</span>{" "}
              and the merchants registered on the Platform{" "}
              <span className="bold">(“Merchants”)</span> to provide Your
              transportation, delivery and logistics services to them, as may
              initiated by them on the Platform.
            </p>

            <p>
              PLEASE READ THE TERMS OF USE CAREFULLY BEFORE USING OR REGISTERING
              ON THEPLATFORM OR AVAILING THE Kartzo SERVICES OR ACCESSING/USING
              ANY MATERIAL, INFORMATION THROUGH THE PLATFORM. YOUR USE OF THE
              PLATFORM OR Kartzo SERVICESSHALL SIGNIFY YOUR ACCEPTANCE OF THE
              TERMS OF USE AND YOUR AGREEMENT TO BELEGALLY BOUND BY THE SAME.
            </p>
            <p>
              Use of and access to the Platform is offered to You only upon
              acceptance of all the terms,conditions and notices contained in
              this Terms of Use, along with any amendments made byKartzo at its
              sole discretion and posted on the Platform. By using the Platform
              or the KartzoServices, You agree that You have read, understood
              and agreed to be bound by these Termsof Use and the Platform’s
              Privacy Policy available at{" "}
              <a href="https://www.Kartzo.com/privacy">
                https://www.Kartzo.com/privacy
              </a>
              .
            </p>

            <p>
              You hereby acknowledge and agree that Kartzo is a technology
              services provider that doesnot (i) provide Delivery Partner/DP
              Services (defined below), or (ii) function as a
              transportation/logistics carrier, (iii) operate as an agent for
              the delivery of good(s)/item(s) purchased, logistic(s) services
              and/or transportation of passengers.
            </p>

            <h2 className="title-small light">
              1. Delivery Partner/DP Services:
            </h2>
            <p>
              You may choose to perform any of the following services to Users
              and Merchants as per your choice and convenience. You may choose
              to perform these services on any day of the weekand for as long as
              you may wish for. When you click on the accept option upon a
              notification of a task, you expressly consent each time for
              providing your services to the User. You agree that You provide
              services directly to the User or Merchant, as the case maybe.
            </p>
            <ul>
              <li>
                a.{" "}
                <span className="bold">
                  Transportation/ Delivery Services from Merchant
                  Establishments.
                </span>{" "}
                You acknowledge that the Users may place orders with Merchants
                listed on the Platform through the Platform to purchase
                products/avail services (“<span className="bold">Items”</span>)
                from the Merchants. In this regard, You shall provide
                transportation/delivery services from the Merchant establishment
                to the location specified by the User with respect to the
                transactionsinitiated by the User on this Platform (“Delivery
                Services”). Unless otherwisespecified, You hereby agree that
                while performing Delivery Services pertaining to theItem from
                the Merchant to the User, You acknowledge that Kartzo is only a
                facilitator ofthe transactions that take place on the Platform
                and Kartzo shall not be a party to anytransaction that is
                initiated on the Platform. You shall be responsible for safely
                deliveringthe Items to the Users or to any person as may be
                specified by the User.
              </li>
              <li>
                b. <span className="bold">Pick Up and Drop Off Services.</span>{" "}
                You acknowledge that Users may initiate atransaction on the
                Platform by which You will be required to pick up packages/Items
                from a particular location and drop off the packages/Items at
                another location (
                <span className="bold">“Pick Up and Drop Off Services”</span>).
                You agree that before pick up of Item you shall ensure the
                packaging is not tempered, lose or broken. You further agree
                that before dropping offthe packages, You shall take reasonable
                measures to ensure that the packages/Items are dropped off at
                the correct drop off location in original condition/packaging
                and handed over to the correct person. You shall be responsible
                for safely delivering the Items to the Users or to any person as
                may be specified by the User.
              </li>
              <li>
                c. <span className="bold">Purchase Items.</span> You acknowledge
                that Users may initiate a transaction on the Platform by which
                You would be required to purchase any Item for the User (
                <span className="bold">“Purchase Services”</span>). It is hereby
                clarified and acknowledged by You that your services to the User
                is concluded only upon the Item being delivered to the User.
              </li>
            </ul>

            <p>
              You further agree and acknowledge that for any of the Services
              mentioned above, You shall act as an agent of the User and act in
              accordance with the instructions provided by the User and Kartzo
              will not be responsible for the Item purchased or for any
              loss/damaged caused tothe Item during transit.
            </p>

            <ul>
              <li>
                d. <span className="bold">Bike Taxi.</span> You acknowledge that
                in specific permissible Territories, User may initiate
                transactions on the Platform requesting for transportation
                services from You (
                <span className="bold">“Bike TaxiServices”</span>). You shall
                provide the Bike Taxi Services using Your vehicle, which is so
                permitted to be used for Bike Taxi Services. You acknowledge and
                agree that while performing the Bike Taxi Services, You shall
                act in accordance with the instructions provided by the User.
              </li>
              <li>
                e. <span className="bold">Bike Pool.</span> You acknowledge that
                in specific permissible Territories, User may initiate request
                for shared transportation from You (
                <span className="bold">“Bike Pool Services”</span>). You shall
                assist the User to commute between certain location en-route to
                your final destination using Your vehicle. You acknowledge and
                agree that the Bike Pool Services is not intended for commercial
                use and is meant to share the cost of the ride.
              </li>
              <li>
                f. For the purposes of this Terms of Use, Delivery Services,
                Pick Up and Drop Off Services, Purchase Services, Bike Taxi
                Services, and Bike Pool Services shall herein after together be
                referred to as the <span className="bold">“DP Services”</span>.
              </li>
              <li>
                g. You shall provide the DP Services, only in the applicable
                Territory in accordance with these Terms of Use and applicable
                law. For the purposes of this Terms of Use{" "}
                <span className="bold">“Territory”</span> means the city or
                metro areas in the territory of India, which Delivery Partners
                are enabled by the Platform to receive requests for DP Services.
              </li>
            </ul>
            <h2 className="title-small light">2. Registration</h2>

            <ul>
              <li>
                a. You shall be permitted to access the Platform, avail the
                Kartzo Services and connect with the Users and Merchants on the
                Platform, as the case maybe, to provide DP Services only upon
                creating an Account (defined below) and obtaining a registration
                on the Platform. Your ability to continue using the Platform,
                avail Kartzo Services and provide DP Services is subject to Your
                continued registration on the Platform. To register, You are
                required to provide all required details as may be sought by
                Kartzo. It is your responsibility to provide all your current,
                updated and requisite details. You shall be required to provide
                Kartzo, at the time of registration, forth with upon any
                revision, and at any time on Kartzo’s request, with information
                and documentary evidence pertaining to You, any authorizations
                that You may have, contact details and other details asrequested
                by Kartzo. The document/information that Kartzo may need from
                Your end shall be intimated to You from time to time. Kartzo
                reserves the right to independently verify Your documentation
                from time to time in any way Kartzo deems appropriate in its
                reasonable discretion.
              </li>
              <li>
                b. Upon registration on the Platform, you will receive a
                Delivery Partner Identification Number (“DP ID”). The DP ID is
                specific to You only. You are responsible for all DP Services
                provided under the DP ID allocated to You.
              </li>
              <li>
                c. You will be responsible for maintaining the confidentiality
                of the Account informationand are fully responsible for all
                activities that occur under Your Account. You agree to
                immediately notify Kartzo of any unauthorized use of Your
                Account information or any other breach of security. It is a
                good practice to exit from your Account at the end of every
                session. Kartzo cannot and will not be liable for any loss or
                damage arising from Your failure to comply with this provision.
                You may be held liable for losses incurred by Kartzo or any
                other User of or visitor to the Platform due to authorized or
                unauthorized use of Your Account. Use of another Delivery
                Partner’s Account information for using the Platform is
                expressly prohibited.
              </li>
              <li>
                d. Kartzo shall have the right to display the information
                provided by You on the Platform.You shall ensure that all the
                information provided by You is sufficient to give a clear
                description of Yourself and the DP Services performed by You for
                the Users, and is not false or misleading in any manner. Kartzo
                does not independently verify the information. Kartzo shall in
                no way be responsible or liable for the accuracy or completeness
                of any information provided by You.
              </li>
              <li>
                e. <span className="bold">Registration Fee.</span> Kartzo may
                charge a non-refundable on boarding fee at the time of
                registration on the platform.
              </li>
            </ul>

            <h2 className="title-small light">3. Kartzo Services</h2>
            <p>
              The Platform provides you with the following services (“Kartzo
              Services”)-
            </p>
            <ul>
              <li>
                <span className="bold">a.</span> License to the Platform;
              </li>
              <li>
                <span className="bold">b.</span> Where authorized, collection of
                your fee for DP Services.
              </li>
              <li>
                <span className="bold">c.</span> It may facilitate the issuance
                of invoice/payment statement to the Users, on Your behalf
              </li>
            </ul>

            <h2 className="title-small light">4. Provision of DP Services.</h2>

            <ul>
              <li>
                a. When You are logged into Your Account on the Platform, Users’
                requests for DP Services may appear to You on Your Account on
                the Platform if You are available and visible in the vicinity of
                the task raised by the User.{" "}
                <span className="bold">
                  You have the choice to accept the request from the User
                </span>
                . If you accept the User request for DP Services, You will
                receive in an automated manner certain user information which
                may inter alia include the pick-upaddress, User’s name, item to
                be purchased, purchase location, pick-up/drop off
                location,contact information etc. (
                <span className="bold">“User Information”</span>).
              </li>
              <li>
                b. Once you have accepted a User’s request for DP Services, with
                respect to Bike Taxi or Bike Pool Service, you shall be
                encouraged to follow the guidelines and standards as may be
                formulated by Kartzo with respect to safety, etiquettes, etc.
                from time to time. While performing these DP Services, You shall
                also be responsible to abide by the safety conditions as may be
                required by a relevant state / central authority.
              </li>
              <li>
                c. You hereby acknowledge and agree that once You have accepted
                a User’s request for DP Services, the Platform may display to
                the User in an automated manner, certain information about You
                which may inter alia include Your name, contact information,
                photoand location, Your rating, Your driving license information
                and Your vehicle registrationnumber and other personal
                information necessary for the successful and timely
                accomplishment of the DP Services.
              </li>
              <li>
                d. You agree and undertake that You shall not contact Users or
                use any User’s personal data/User Information for any reason
                other than for the purposes of fulfilling DP Services through
                the Platform in accordance with these Term of Use and applicable
                law.
              </li>
              <li>
                e. You shall provide valid invoices issued by Merchants to the
                User for the Items covered under DP Services (especially
                Delivery Services and Purchase Services) performed by You,(as
                may be applicable). For Your services, the Platform generates an
                automated service receipt/ Payment Statement/ Invoice as the
                case maybe, on Your behalf to the User.
              </li>
              <li>
                f. You shall transport all Items for the Users and provide all
                DP Services to the User directly to their specified destination
                or otherwise complete all logistics related tasks, as directed
                by the applicable User, without undue delay. In the event, You,
                at your own discretion feel that there will be an inordinate
                delay, You shall on a best efforts basis try and reach out to
                the User.
              </li>
              <li>
                g. With respect to DP Services, You hereby agree that You shall
                not open or attempt to openthe Items/packages to be dropped
                off/delivered to or on behalf of the User. However, if it comes
                to Your knowledge that a package contains illegal substance or
                Items not permissible to be delivered through the DP Services,
                You shall immediately report the same concerned law enforcement
                authorities. You expressly agree that You will not
                deliver/transport any alcoholic beverages or entertain any
                User’s request to deliver/purchase or transport any alcoholic
                beverages or any other contraband items.
              </li>
            </ul>

            <h2 className="title-small light">
              5. Delivery Partner’s Relationship with Kartzo.
            </h2>

            <ul>
              <li>
                a. Kartzo does not, and shall not be deemed to have any form of
                direct or indirect control over Delivery Partners inter alia
                with respect to the availability of Delivery Partners,
                performance of DP Services by the Delivery Partners or
                maintenance of DeliveryPartner’s vehicle or compliance with
                applicable laws applicable to Delivery Partners of DPServices.
                It is hereby clarified that{" "}
                <span className="bold">
                  there is no employer-employee relationship between Kartzo and
                  the Delivery Partners
                </span>
                . Delivery Partner acknowledges that Kartzo does not control, or
                purport to control:
                <ul>
                  <li>
                    i. when or for how long will the Delivery Partner utilize
                    the Platform or the Kartzo Services; or
                  </li>
                  <li>
                    Delivery Partner’s decision, via the Platform, to attempt to
                    accept or to decline orignore a User’s request for DP
                    Services on the Platform, subject to Kartzo’s then-current
                    cancellation policies.
                  </li>
                </ul>
              </li>
              <li>
                b. You are not an employee of Kartzo. You may thus choose to
                engage with other occupations or means of livelihood. There is
                no exclusivity arrangement with Kartzo and You have complete
                discretion to operate Your independent business or enroll with
                other platform for performing similar services. You have no
                authority to bind Kartzo and undertake not to hold Yourself out
                as an employee, agent or authorized representative of Kartzo or
                its affiliates. Where, by implication of mandatory law or
                otherwise, You may be deemed an employee, agent or
                representative of Kartzo, You undertake and agree to indemnify,
                defend and hold Kartzo and its affiliates harmless from and
                against any claims by any person, entity, regulators or
                governmental authorities based on such implied employment,
                agency or representative relationship.
              </li>
              <li>
                c. Your Account may be deactivated or otherwise restricted from
                accessing or using the Platform or the Kartzo Services in the
                event of a violation of these Terms of Use, disparagement of
                Kartzo or any of its affiliates, or Your act or omission that
                causes harm to Kartzo’s or any of its affiliates’ brand,
                reputation or business as determined by Kartzo in its sole
                discretion. Kartzo also retains the right to deactivate or
                otherwise restrict You from accessing or using the Platform or
                the Kartzo Services for any other reason at the sole and
                reasonable discretion of Kartzo.
              </li>
              <li>
                d. You agree that You may require certain enablers such as
                bikes, mobile phones, helmets,bags or other such instruments for
                you to perform DP Services. Kartzo is not responsible to provide
                any such support to You. In particular, Kartzo is not
                responsible to provide You with reimbursements of any fuel
                incurred by You, or insurance premium paid by You, or helmets
                purchased by you. You shall solely be responsible for
                maintaining the necessary equipment and internet connections
                that may be required to access, use and transact onthe Platform
                and avail the Kartzo Services.
              </li>
              <li>
                e. Kartzo may from time to time provide You with certain
                advisories in respect of Your performance of the DP Services.
                These advisories may be issued to facilitate compliance with
                applicable law or to generate a uniform platform experience for
                Users, Merchants and other Delivery Partners. You are encouraged
                to follow them.
              </li>
              <li>
                f. You may from time to time receive notice of certain
                welfare/benefit programs that You may avail as part of the
                Kartzo eco-system. Availing such benefits are subject to Your
                choice and opt-in. These benefits will be provided to you by
                third party service providers who Kartzo does not control or
                sponsor. You will not receive any employee benefits.
              </li>
              <li>
                g. To facilitate provision of DP Services, You may choose to
                avail certain third-party services such as personal loans,
                accident insurance policies etc. Some of these third-party
                services may be introduced to You through Kartzo. The choice of
                availing all such services is Yours. Kartzo is not responsible
                for such services provided by third parties. If you choose to
                avail such benefits You authorize Kartzo to share information
                about You as required for such third party to provide the
                services to You.
              </li>
            </ul>

            <h2 className="title-small light">
              6. Delivery Partner’s Relationship with Users.
            </h2>

            <ul>
              <li>
                a. Delivery Partner acknowledges and agrees that it’s provision
                of DP Services to Users creates a legal and direct business
                relationship between the Delivery Partner and the User, to which
                Kartzo is not a party. Kartzo is not responsible or liable for
                the actions or inactions of a User in relation to the activities
                of the Delivery Partner. You shall have the sole responsibility
                for any obligations or liabilities that may arise towards the
                Users or any third parties that arise from the provision of Your
                DP Services. You are solely responsible for taking such
                precautions as may be reasonable and proper (including
                maintaining adequate insurance policies that meets the
                requirements of all applicable laws) regarding any acts or
                omissions of a User or third party.
              </li>
            </ul>

            <h2 className="title-small light">7. Ratings.</h2>

            <ul>
              <li>
                a. You agree that: (i) after providing DP Services to a User,
                the Platform will prompt the User with an option to provide a
                rating of such DP Service provided by You and, optionally, to
                provide comments or feedback about You and such DP Service; and
                (ii) after providing the DP Services to the Users, You will be
                prompted on the Platform to provide a rating of the User and,
                optionally, to provide comments or feedback about the User. You
                shall provide ratings and feedback in good faith and unbiased
                manner.
              </li>
              <li>
                b. In order to continue to receive access to the Platform and
                the Kartzo Services, You hereby acknowledge that You must
                maintain an average rating by Users that exceeds the minimum
                average acceptable rating established by Kartzo for the
                Territory, as may be updated from time to time (
                <span className="bold">“Minimum Average Rating”</span>). In the
                event Your average rating falls below the Minimum Average
                Rating, Kartzo may provide You a limited period oftime to raise
                Your average rating above the Minimum Average Rating. You hereby
                agree that if You do not increase Your average rating above the
                Minimum Average Rating within the time period allowed (if any),
                Kartzo may deactivate Your access to the Platform and the Kartzo
                Services.
              </li>
              <li>
                c. Kartzo and its affiliates reserve the right to use, share and
                display Your ratings andcomments in any manner in connection
                with the business of Kartzo and its affiliates without
                attribution to or approval of Delivery Partners and You hereby
                consent to the same. Kartzo and its affiliates reserve the right
                to remove comments from Platform in the event that such comments
                include obscenities or other objectionable content, include an
                individual’s name or other personal information, or violate any
                privacy laws, intermediary guidelines, other applicable laws or
                Kartzo’s or its affiliates’ content policies.
              </li>
            </ul>

            <h2 className="title-small light">8. Devices.</h2>

            <ul>
              <li>
                a. In order to access the Platform and provide the DP Services
                to the Users, You may use Your own device (
                <span className="bold">“Delivery Partner Device”</span>).
              </li>
              <li>
                b. While using a Delivery Partner Device: (i) You shall be
                responsible for the acquisition, costand maintenance of such
                Delivery Partner Device as well as any necessary wireless data
                plan; and (ii) Kartzo shall make available the Platform for
                installation on such Delivery Partner Device. The foregoing
                right shall immediately terminate and You will delete and fully
                delete the Platform from the Delivery Partner Device in the
                event You cease to provide DP Services to the User using the
                Delivery Partner Device; or You have deleted Your Account from
                the Platform. You hereby agree that: (i) use of the Platform and
                Kartzo Services on a Delivery Partner Device requires an active
                data plan with a wireless carrier associated with the Delivery
                Partner Device, which data plan will be provided by You at Your
                own expense; and (ii) use of the Platform on a Delivery Partner
                Device as an interface with the Kartzo Services may consume very
                large amounts of data through the data plan. Kartzo advises that
                Delivery Partner Devices should only be used under a data plan
                with unlimited or very high data usage limits, and Kartzo shall
                not be responsible or liable for any fees, costs, or overage
                charges associated with any data plan during the performance of
                DP Services.
              </li>
            </ul>

            <h2 className="title-small light">9. Location Based Services.</h2>

            <ul>
              <li>
                You acknowledge and agree that Your geo-location information is
                required from You to provide the DP Services to the Users, using
                the Platform and is required by Kartzo for it to provide You
                with Kartzo Services. You acknowledge and hereby consent to the
                following:(a) Your geo‐location information will be monitored
                and tracked by Kartzo, when You are logged into Your Account on
                the Platform and available to receive requests for providing DP
                Services from the Users, or when You are providing
                transportation and/or logistics services to the Users; and (b)
                the approximate location of Your vehicle will be displayed to
                the User before and during the provision of DP Services to such
                User. In addition, Kartzo may monitor, track and share Your
                geo‐location information obtained by the Platform and Delivery
                Partner Device, as the case may be, for safety, security,
                technical, marketing and commercial purposes, including to
                provide and improve Kartzo’s products andservices.
              </li>
            </ul>

            <h2 className="title-small light">
              10. Delivery Partners and Vehicles
            </h2>

            <ul>
              <li>
                a. <span className="bold">Delivery Partner Requirements</span>.
                In order to register as a Delivery Partner, You must be above 18
                years of age. You acknowledge and agree that You shall at all
                times hold and maintain (i) a valid driver's license (if
                applicable) with the appropriate level of certification to
                operate the vehicle driven/ridden by You, and (ii) all licenses,
                permits, approvals and authority applicable to Your vehicle (if
                applicable) that are necessary to provide DP Services; (iii) the
                appropriate and current level of training, expertise and
                experience to provide DP Services in a professional manner with
                due skill, care and diligence; and (iv) high standards of
                professionalism, service and courtesy. You acknowledge and agree
                that You may be subject to certain background and driving record
                checks from time to time.
              </li>
              <li>
                b. <span className="bold">Vehicle Requirements</span>. You
                acknowledge and agree that Your vehicle with which You choose to
                provide DP Services shall be: (i) operated in compliance with
                all applicable laws; (ii) properly registered, insured and
                licensed in accordance with law to operate as a passenger
                transportation vehicle, a shared mobility vehicle and/or vehicle
                to transport/deliver Item(s)/product purchased in the Territory
                on behalf of the User; (iii) suitable for performing the
                passenger transportation service, shared mobility services
                and/or to transport Item(s) as contemplated by these Terms of
                Use; and (iv) maintained in good operating condition, consistent
                with industry safety and maintenance standards fora vehicle of
                its kind and any additional standards or requirements in the
                applicable Territory, and in a clean and sanitary condition
                (together herein after referred to as
                <span className="bold">“Vehicle Specification”</span>).
              </li>
            </ul>

            <h2 className="title-small light">11. Financial Terms</h2>

            <ul>
              <li>
                a. <span className="bold">User Payment</span>: While providing
                Purchase Services and Delivery Services for Items which are
                purchased/picked up from merchants not registered on the
                Platform, and the prices for such items are not provided on the
                Platform, You shall promptly provide the price details and Item
                details, including pictures of the Items to the Users on the
                Platform. Upon confirmation of the Items by the Users on the
                Platform, and on payment of the same by the User, You shall make
                the purchase on behalf of the Users. For Merchants who are
                registered on the Platform, You are not required to make any
                payments to the Merchant on behalf of the User.
              </li>
              <li>
                b. <span className="bold">Delivery Partner Fees</span>: For the
                provision of DP Services (except Bike Taxi Services/BikePool
                Services), You may charge a fee to the User, the amount of which
                is determined inaccordance with the guidelines framed by Kartzo
                for Delivery Partners (<span className="bold">“DP Fees”</span>).
                Note,Kartzo frames the guidelines for the purposes of providing
                a uniform experience on the Platform to Users, Merchants and
                Delivery Partners. Please review carefully the DP Fees
                applicable to the DP Services You choose to provide before You
                do so.
              </li>
              <li>
                c.{" "}
                <span className="bold">
                  Fare Calculation for Bike Taxi Services
                </span>
                . For the Bike Taxi Services provided by You to Users in
                specified Territories, You are entitled to charge a fare to the
                User for each instance of completed Bike Taxi Services provided
                to a User through the Platform(
                <span className="bold">“Fare”</span>). The Fare is calculated
                based upon a base fare amount (which shall be determined as per
                rate card/guidelines provided by Kartzo to the Delivery Partner)
                plus distance (as determined by Kartzo using location-based
                services enabled through the Delivery Partner Device) and/or
                time amounts, for the applicable Territory and toll charges, if
                any (<span className="bold">“Fare Calculation”</span>).
              </li>
              <li>
                d. <span className="bold">Changes to Fare Calculation</span>.
                Kartzo reserves the right to change the Fare Calculation at any
                time based upon local market factors, and Kartzo will provide
                notice to the Delivery Partner in the event of such change that
                would result in a change in the recommended Fare. Continued use
                of the Kartzo Services after any such change in the Fare
                Calculation shall constitute Your consent to such change.
              </li>
              <li>
                e. <span className="bold">Ride Cost</span>. For the Bike Pool
                Services provided by You to Users in specified Territories,
                Youare entitled to share the cost of Your ride with the User for
                each instance of completed Bike Pool Services provided to a User
                through the Platform (<span className="bold">“Ride Cost”</span>
                ). The Ride Cost is calculated based upon the average cost
                arrived during travel of per kilometer of distance. The Ride
                Cost is determined by considering the maximum usability (in
                kilometers) of vehicle, cost of acquisition of vehicle, residual
                value of vehicle,maintenance cost, fuel &amp; insurance cost
                etc.
              </li>
              <li>
                f. <span className="bold">Fare / Ride Cost Adjustment</span>.
                Any adjustment to Fare/Ride Cost for instances such as technical
                error in the Kartzo Services or force majeure events etc., shall
                be subject to uniform polices applicable from time to time.
              </li>
              <li>
                g. <span className="bold">Cancellation Charges</span>. You
                acknowledge and agree that Users may elect to cancel requests
                for DP Services that have been accepted by You at any time prior
                to the provision of DP Services. In the event that a User
                cancels an accepted request for DP Services, Kartzo may charge
                the User a cancellation fee on behalf of You. If charged, this
                cancellation fee shall be deemed Ride Cost/Fare/DP Fees for the
                cancelled DP Services and shall be remitted to You (
                <span className="bold">“Cancellation Fee”</span>).
              </li>
              <li>
                h. <span className="bold">Taxes</span>. You acknowledge and
                agree that You are required to: (i) complete all tax
                registration obligations (if any) and calculate and remit all
                tax liabilities related to the provision of DP Services as
                required by applicable law; and (ii) provide Kartzo with all
                relevant tax information. You further acknowledge and agree that
                You are responsible for paying taxes on Your own income arising
                from the performance of DP Services. Notwithstanding anything to
                the contrary in this Agreement, Kartzo may in its reasonable
                discretion based on applicable tax and regulatory
                considerations, collect and remit taxes resulting from Your
                provision of DP Services and/or provide any of the relevant tax
                information You have provided pursuant to the foregoing
                requirements in this Section directly to the applicable
                governmental tax authorities on Your behalf or otherwise. You
                further agree and acknowledge that Kartzo shall be entitled to
                deduct tax at source inaccordance with applicable law, prior to
                making any payouts to You.
              </li>
            </ul>

            <h2 className="title-small light">
              12. Proprietary Rights and License
            </h2>

            <ul>
              <li>
                a. <span className="bold">License Grant</span>. Subject to the
                terms and conditions of these Terms of Use, Kartzo hereby grants
                the Delivery Partner a non-exclusive, royalty-free,
                non-transferable, non-sub-licensable, non-assignable license,
                the Platform in connection with the provision of the Kartzo
                Services solely for the purpose of providing DP Services to
                Users. Further, subject to the terms and conditions of these
                Terms of Use, Kartzo hereby grants the Delivery Partner a
                non-exclusive, royalty-free, non-transferable,
                non-sub-licensable, non-assignable license to use the
                proprietary marks of Kartzo for the sole purpose of providing
                the DP Services. All rights not expressly granted to Delivery
                Partner are reserved by Kartzo, its affiliates and their
                respective licensors.
              </li>
              <li>
                b. <span className="bold">Restrictions</span>. You shall not,
                and shall not allow any other party to: (i) license, sublicense,
                sell, resell, transfer, assign, distribute or otherwise provide
                or make available to any other party the Kartzo Services,
                Platform or (if applicable) in any way; (ii) modify or make
                derivative works based upon the Kartzo Services or Platform;
                (iii) improperly use the Kartzo Services or Platform, including
                creating Internet “links” to any part of the Kartzo Services or
                Platform, “framing” or “mirroring” any part of the Kartzo
                Services or Platform on any other websites or systems, or
                “scraping” or otherwise improperly obtaining data from the
                Kartzo Services or the Platform; (iv) reverse engineer,
                decompile, modify, or disassemble the Kartzo Services or
                Platform,; or (v) send spam or otherwise duplicative or
                unsolicited messages. In addition, You shall not, and shall not
                allow any other party to,access or use the Kartzo Services or
                Platform to: (i) design or develop a competitive or
                substantially similar product or service; (ii) copy or extract
                any features, functionality, or content thereof; (iii) launch or
                cause to be launched on or in connection with the Kartzo
                Services an automated program or script, including web spiders,
                crawlers, robots,indexers, bots, viruses or worms, or any
                program which may make multiple server requests per second, or
                unduly burden or hinder the operation and/or performance of the
                Kartzo Services/Platform; or (iv) attempt to gain unauthorized
                access to the Kartzo Services or its related systems or
                networks, (v) defame, abuse, harass, threaten or otherwise
                violate the legal rights of others; (vi) impersonate any person
                or entity, or falsely state or otherwise misrepresent Your
                affiliation with a person or entity; (vi) publish, post, upload,
                distribute or disseminate any information that is harmful,
                harassing, blasphemous, defamatory, obscene, pornographic,
                pedophilic, libelous, hateful, or racially, ethnically
                objectionable, disparaging, inappropriate, profane, infringing
                or otherwise unlawful in any manner whatever; or that threatens
                the unity, integrity, defense, security or sovereignty of India,
                friendly relations with foreign states, or public order or
                causes incitement to the commission of any cognizable offence or
                prevents investigation of any offence or is insulting any other
                nation; (vii) upload files that contain software or other
                material protected by applicable intellectual property laws
                unless You own or control the rights there to or have received
                all necessary consents; (viii) upload or distribute files that
                contain viruses, corrupted files, or any other similar software
                or programs that may damage the operation of the Platform or
                another's computer; (ix) engage in any activity that interferes
                with or disrupts access to the Platform or the Kartzo Services
                (or the servers and networks which are connected to the
                Platform); (x) attempt to gain unauthorized access to any
                portion or feature of the Platform, any other systems or
                networks connected to the Platform, to any Kartzo server, or to
                any of the Kartzo Services offered on or through the Platform,
                by hacking, password mining or any other illegitimate means;
                (xi) probe, scan or test the vulnerability of the Platform or
                any network connected to the Platform, nor breach the security
                or authentication measures on the Platform or any network
                connected to the Platform. (xii) reverse look-up, trace or seek
                to trace any information on any other user (Merchant, User,
                Delivery Partner), of or visitor to, the Platform, to its
                source, or exploit the Platform or Kartzo Services or
                information made available or offered by or through the
                Platform, in any way whether or not the purpose is to reveal any
                information, including but not limited to personal
                identification information, other than Your own information, as
                provided on the Platform; (xiii) disrupt or interfere with the
                security of, or otherwise cause harm to, the Platform, systems
                resources, accounts, passwords, servers or networks connected to
                or accessible through the Platform or any affiliated or linked
                sites; (xiv) collect or store data about other users (Merchant,
                User, Delivery Partner), in connection with the prohibited
                conduct and activities set forth in this Terms of Use; and (xv)
                use any device or software to interfere or attempt to interfere
                with the proper working of the Platform or any transaction being
                conducted on the Platform, or with any other person’s use of the
                Platform; (xvi) use the Platform or any material or content on
                the Platform for any purpose that is unlawful or prohibited by
                these Terms of Use, or to solicit the performance of any illegal
                activity or other activity which infringes the rights of Kartzo
                or other third parties; (xvii) falsify or delete any author
                attributions, legal or other proper notices or proprietary
                designations or labels of the origin or source of software or
                other material contained in a file that is uploaded; (xviii)
                misuse the personal information of the registered users or use
                their personal information or disclose such personal information
                for any purpose other than to fulfil Your obligations under
                these Terms of Use; (xix) violate any code of conduct or other
                guidelines, which may be applicable for or to any particular
                Kartzo Service; (xx) violate the Terms of Use contained herein
                or elsewhere, or violate any applicable laws or regulations for
                the time being in force within or outside India;
              </li>
              <li>
                c. <span className="bold">Ownership</span>. The Kartzo Services,
                Platform and Kartzo Data (defined below), including all
                intellectual property rights therein are and shall at all time
                remain the property of Kartzo,its affiliates or their respective
                licensors, as the case maybe. Neither this Terms of Use nor Your
                use of the Kartzo Services, Platform or Kartzo Data conveys or
                grants to You any rights: (i) in or related to the Kartzo
                Services, Platform or Kartzo Data, , except for the limited
                license granted under these Terms of Use; or (ii) to use or
                reference in any manner Kartzo’s, its affiliates’, or their
                respective licensors’ company names, logos, product and service
                names, trademarks, service marks or other indicia of ownership.
                Additionally, You acknowledge Kartzo’s rights in its Kartzo
                family of trademarks and names, including Kartzo, alone and in
                combination with other letters, punctuation, words, symbols
                and/or designs, and the Kartzo Logo (
                <span className="bold">“Kartzo Marks and Names”</span>). You
                agree that You will not try to register or otherwise claim
                ownership in any of the Kartzo Marks and Names, alone or in
                combination with other letters, punctuation, words, symbols
                and/or designs, orin any confusingly similar mark or name.
              </li>
              <li>
                d. For the purposes of these Terms of Use{" "}
                <span className="bold">“Kartzo Data”</span> means all data
                related to the access and use of the Kartzo Services here under,
                including all data related to Users (including User
                information), all data pertaining to Merchant, Items
                (MerchantInformation), all data related to the provision of
                transportation and/or logistics services by the Delivery Partner
                via the Kartzo Services and the Platform, and the DP ID.
              </li>
            </ul>

            <h2 className="title-small light">13. Confidentiality</h2>

            <ul>
              <li>
                a. Each party acknowledges and agrees that in the performance of
                these Terms of Use it may have access to or may be exposed to,
                directly or indirectly, confidential information of the other
                party (<span className="bold">"Confidential Information"</span>
                ). Confidential Information includes Kartzo Data, DP IDs, User
                Information, Merchant Information, information related to the
                Platform, information related to any transaction initiated on
                the Platform, and the transaction volume, marketing and business
                plans, business, financial, technical, operational and such
                other non-public information of each party (whether disclosed in
                writing or verbally and whether expressly marked as confidential
                or not).
              </li>
              <li>
                b. Each party acknowledges and agrees that: (i) all Confidential
                Information shall remain the exclusive property of the
                disclosing party; (ii) it shall not use Confidential Information
                of the other party for any purpose except in furtherance of its
                obligation under the Terms of Use; (iii) it shall not disclose
                Confidential Information of the other party to any third
                party,except to its employees, officers, contractors, agents and
                service providers (
                <span className="bold">"Permitted Persons"</span>) as necessary
                to perform under this Terms of Use, provided Permitted Persons
                are bound in writing to obligations of confidentiality and
                non‐use of Confidential Information no less protective than the
                terms hereof; and (iv) it shall return or destroy all
                Confidential Information of the disclosing party upon the
                termination of this Terms of Use or at the request of the other
                party (subject to applicable law and, with respect to Kartzo,
                its internal record keeping requirements).
              </li>
              <li>
                c. You hereby acknowledge and agree that all Confidential
                Information provided to You or which is in Your custody shall be
                used by You only for the purposes of providing the DP Services
                in accordance with the provisions of this Terms of Use.
              </li>
              <li>
                d. If You choose to avail certain ancillary services from third
                party services, Your information may be required to be provided
                to such third-party services providers. You hereby consent to
                sharing your Confidential Information when You agree to receive
                such ancillary services.
              </li>
            </ul>

            <h2 className="title-small light">14. Access to Platform.</h2>

            <ul>
              <li>
                a. Notwithstanding these Terms of Use, Kartzo reserves the right
                to temporarily or permanently, as it may deem fit, discontinue
                Your access to the Platform, Kartzo Services and/or de-list You
                from the Platform with immediate effect in the following
                instances:
                <ul>
                  <li>
                    <span className="bold">i.</span> User complaints received by
                    Kartzo which are directly attributable to You; or
                  </li>
                  <li>
                    <span className="bold">ii.</span> Breach of the provisions
                    of any applicable law; or
                  </li>
                  <li>
                    <span className="bold">iii.</span> Breach of the
                    representations and warranties under these Terms of Use; or
                  </li>
                  <li>
                    <span className="bold">iv.</span> Any other breach of the
                    Terms of Use, Kartzo’s Privacy Policy or any other terms,
                    conditions, or policies that may be applicable to You from
                    time to time (or have acted in a manner that clearly shows
                    that You do not intend to not comply, or are unable to,
                    comply with the same);
                  </li>
                  <li>
                    <span className="bold">v.</span> The provision of the Kartzo
                    Services to You by Kartzo is, in the opinion of Kartzo, no
                    longer commercially viable or in any way detrimental to
                    Kartzo, its business or the Platform;
                  </li>
                  <li>
                    <span className="bold">vi.</span> You provide any
                    information that is untrue, inaccurate, not current or
                    incomplete (or becomes untrue, inaccurate, not current or
                    incomplete), or Kartzo has reasonable grounds to suspect
                    that such information is untrue, inaccurate, not current or
                    incomplete.
                  </li>
                  <li>
                    <span className="bold">vii.</span> Kartzo has elected to
                    discontinue, with or without reason, Your access to the
                    Platform, Kartzo Services or any part thereof.
                  </li>
                </ul>
              </li>
            </ul>

            <h2 className="title-small light">15. Eligibility to Use</h2>

            <p>
              You shall not have more than one active Account (as defined
              hereinafter) on the Platform. Additionally, You are prohibited
              from selling, trading, or otherwise transferring Your Account to
              another party.
            </p>

            <h2 className="title-small light">16. Third Party Content</h2>

            <p>
              The Platform makes available general third-party information and
              other data from external sources (
              <span className="bold">“Third Party Content”</span>). The
              provision of Third-Party Content is for general informational
              purposes only. You acknowledge that the Third-Party Content
              provided to You is obtained from sources believed to be reliable.
              Kartzo does not provide any guarantee with respect to any the
              Third-Party Content and Kartzo shall not be held liable for any
              loss suffered by You based on Your reliance on or use of
              Third-Party Content. Further, to the extent that such Third-Party
              Content is infringing upon some other party’s intellectual
              property rights or proprietary rights, Kartzo shall not be held
              liable for the same at any instances.
            </p>

            <h2 className="title-small light">17. Insurance</h2>

            <p>
              Delivery Partner represents and agrees that he or she holds or is
              otherwise covered by a valid insurance policy of liability
              insurance, including, but not limited to third party liability
              insurance (as per industry-standard coverage amounts and in
              pursuance of mandatory regulatory requirements) with respect to
              Delivery Partner’s operation of his/her vehicle(s)under these
              Terms of Use.
            </p>

            <h2 className="title-small light">
              18. Warranties, Covenants and Disclaimers
            </h2>

            <ul>
              <li>
                a. You agree to use the Platform and the materials provided
                therein only: (i) for purposes that are permitted by the Terms
                of Use; and (ii) in accordance with any applicable
                law,regulation or generally accepted practices or guidelines.
              </li>
              <li>
                b. You hereby represent and warrant that: (i) You have full
                power and authority to enter into this Terms of Use and perform
                your obligations hereunder; (ii) You have not entered into, and
                will not enter into, any arrangement that would prevent it from
                complying with this provisions of the Terms of Use and
                applicable law; (iii) You will comply with all applicable laws
                in its performance of this Terms of Use, including holding and
                complying with all permits, licenses, registrations,
                certifications and other governmental authorizations necessary
                to provide DP Services using the required vehicle pursuant to
                this Terms of Use.
              </li>
              <li>
                c. You represent and warrant that You have not received any
                notice from any third party or any governmental authority and no
                litigation is pending against You in any court of law which may
                have an adverse effect on the provision of
                logistic/delivery/transportation services.
              </li>
              <li>
                d. You represent and warrant that You upon performing the DP
                Services, promptly and accurately update on the Platform that
                You have completed such DP Services or delivered the Item, as
                the case may be.
              </li>
              <li>
                e. You represent and warrant that all governmental
                authorisations, consents, licenses, registration, approvals and
                other consents required under applicable laws for the provision
                of DP Services have been obtained and shall remain in force for
                as long as You are using the Platform and availing the Kartzo
                Services or during the provision of DP Services by You.
              </li>
              <li>
                f. You agree not to access (or attempt to access) the Platform
                and the materials or by any means other than through the
                interface that is provided by Kartzo. You shall not use any
                deep-link, robot, spider or other automatic device, program,
                algorithm or methodology, or any similar or equivalent manual
                process, to access, acquire, copy or monitor any portion of the
                Platform or any of its content (as defined below), or in any way
                reproduce or circumvent the navigational structure or
                presentation of the Platform, materials or any content therein,
                to obtain or attempt to obtain any materials, documents or
                information through any means not specifically made available
                through the Platform.
              </li>
              <li>
                g. You acknowledge and agree that by accessing or using the
                Platform or Kartzo Services, You may be exposed to content from
                other users (including but not limited to other Merchants, Users
                and Delivery Partners) that You may consider offensive, indecent
                or otherwise objectionable. Kartzo disclaims all liabilities
                arising in relation to such offensive content on the Platform.
              </li>
              <li>
                h. If the Platform allows You to post and upload any material on
                the Platform, You hereby undertake to ensure that such material
                is not offensive and is in accordance with applicable laws. All
                material added, created, uploaded, submitted, distributed, or
                posted to the Platform by You is Your sole responsibility. You
                hereby do and shall grant Kartzo a worldwide, non-exclusive,
                perpetual, royalty-free, sub-licensable and transferable license
                to use, reproduce, disclose, distribute, translate and otherwise
                fully exploit any such material, in connection with the Platform
                and Kartzo’s (and Kartzo’s successors’ and assigns’) businesses,
                including without limitation, for promoting the Platform in any
                media formats and through any media channels. You represent and
                warrant that You have all rights to grant such licenses to
                Kartzo without infringement or violation of any third party
                rights, including without limitation, any privacy rights,
                publicity rights, copyrights, trademarks, contract rights, or
                any other intellectual property or proprietary rights.
              </li>
              <li>
                i. <span className="bold">Disclaimer of Warranties</span>. You
                hereby accept and acknowledge that, the Kartzo Services and
                Platform is provided on an "as is" and "as available" basis.
                Kartzo does not represent, warrant or guarantee that Your access
                to or use of the Kartzo Services or Platform: (i) will be
                uninterrupted or error free; or (ii) will result in any
                guaranteed requests for DP Services. Kartzo functions as an
                on‐demand lead generation and related service only and makes no
                representations, warranties or guarantees as to the actions or
                inactions of the Users, who may request or receive DP Services
                from You, and Kartzo need not screen or otherwise evaluate
                Users. By using the Kartzo Services and Platform, You
                acknowledge and agree that You may be introduced to a third
                party (including Users, Delivery Merchants) that may pose harm
                or risk to You or other third parties. You are advised to take
                reasonable precautions with respect to interactions with third
                parties encountered in connection with the use of the Kartzo
                Services or the Platform. Kartzo expressly disclaims all
                liability for any act or omission of any Delivery Partner, any
                User, Merchant or other third party.
              </li>
              <li>
                j. <span className="bold">No Service Guarantee</span>. Kartzo
                does not guarantee the availability or uptime of the Kartzo
                Services or the Platform. You acknowledge and agree that the
                Kartzo Services or Platform may be unavailable at any time and
                for any reason (e.g., due to scheduled maintenance or network
                failure). Further, the Kartzo Services or Platform may be
                subject to limitations, delays, and other problems inherent in
                the use of the internet and electronic communications or for any
                other technological reasons, and Kartzo is not responsible for
                any delays, delivery failures or other damages, liabilities or
                losses, costs resulting from such problems.
              </li>
            </ul>

            <h2 className="title-small light">19. Indemnification</h2>

            <p>
              You shall indemnify, defend and hold harmless Kartzo and its
              affiliates and the irrespective officers, directors, employees,
              agents, successors and assigns (
              <span className="bold">“Indemnified Parties”</span>) from and
              against any and all liabilities, losses (including reputational
              loss and brand value loss caused due to deficiency of services on
              part of You), demands, expenses(including legal fees and
              disbursements in connection there with and interest chargeable
              upon), damages, penalties, fines, social security contributions
              and taxes asserted against or incurred by the Indemnified Parties
              arising out of or related to: (i) Your breach of Your
              representations, warranties or obligations under this Terms of
              Use; or (ii) a claim by a third party (including Users, Merchant,
              regulators and governmental authorities) directly or indirectly
              related to (x) Your provision of DP Services or use of the Kartzo
              Services or the Platform, (y) Your acts of negligence or willful
              misconduct in performance of this Terms of Use.
            </p>

            <h2 className="title-small light">20. Limits of Liability.</h2>

            <p>
              Kartzo and its affiliates shall not be liable under or related to
              this Terms of Use for any of the following, whether based on
              contract, tort or any other legal theory, even if a party has been
              advised of the possibility of such damages: (i) any incidental,
              punitive, special, exemplary, consequential, or other indirect
              damages of any type or kind; or (ii) Your or any third party’s
              property damage, or loss or inaccuracy of data, or loss of
              business, revenue, profits, use or other economic advantage. In no
              event shall the liability of Kartzo or its affiliates under this
              Terms of Use exceed INR 100/- (Rupees One Hundred). You
              acknowledge and agree that any and all claims You have or purport
              to have against Kartzo and/or its affiliates should be notified to
              Kartzo and/or its affiliates immediately and no later than 30 days
              from the event. You forfeit all rights in respect of that claim if
              You fail to do so. These limitations do not purport to limit
              liability that cannot be excluded by applicable law.
            </p>

            <h2 className="title-small light">21. Term and Termination</h2>

            <ul>
              <li>
                a. These Terms of Use will continue to apply until terminated by
                either You or Kartzo as set forth below (
                <span className="bold">“Term”</span>). These Terms shall
                continue to apply so long as You continue to access the
                Platform.
              </li>
              <li>
                b. If You want to terminate these Terms, You can do so by (i)
                notifying Kartzo to close Your Account; and (ii) not accessing
                the Platform. Such termination shall take effect after 15days of
                receipt of the above notice and Kartzo shall delist the Delivery
                Partner at the end of the 15th Day.
              </li>
              <li>
                c. Upon termination of Your Account, the DP ID allotted to You,
                and/or any other content or materials related to You shall be
                deleted. Kartzo may however retain Your transaction history on
                the Platform or in Your Account and any other Delivery Partner
                records, for be legal purposes without any obligation to provide
                you with the data.
              </li>
              <li>
                d. The termination of Your Account shall not relieve You of any
                liability that You may have incurred or may incur in relation to
                use of Kartzo Services or the Platform prior to such
                termination. Further, Kartzo shall not be liable to You or any
                third party for any termination of Your Account, or Your access
                to the Platform and Kartzo Services.
              </li>
            </ul>

            <h2 className="title-small light">
              22. Violation of the Terms of Use
            </h2>

            <ul>
              <li>
                a. You also agree that any violation by You of these Terms of
                Use will constitute an unlawful and unfair business practice,
                and will cause irreparable harm to Kartzo, for which monetary
                damages would be inadequate, and You consent to Kartzo obtaining
                any injunctive or equitable relief that Kartzo may deems
                necessary or appropriate in such circumstances. These remedies
                are in addition to any other remedies that Kartzo may have at
                law or in equity.
              </li>
              <li>
                b. If Kartzo does take any legal action against You as a result
                of Your violation of these Terms of Use, Kartzo will be entitled
                to recover from You, and You agree to pay, all reasonable
                attorneys’ fees and costs of such action, in addition to any
                other relief granted to Kartzo.
              </li>
            </ul>

            <h2 className="title-small light">
              23. Relationship of the Parties
            </h2>

            <p>
              Except as otherwise expressly provided herein to the relationship
              between Kartzo and Delivery Partner is solely that of independent
              contractors. The parties expressly agree that: (i) these Terms of
              Use do not create any relationship of employment with Kartzo nor
              does it impose any employer obligations on Kartzo (inter alia
              including obligations under labor laws and tax laws); and (ii) no
              joint venture, partnership, or principal-agent relationship exists
              between Kartzo and Delivery Partner(s). However, for the limited
              sole purpose of collection of DP Fees, Ride Cost, Fare etc.,
              Kartzo may be engaging with third parties’ services on behalf of
              Delivery Partner, for collecting payments from Users onbehalf of
              the Delivery Partner.
            </p>

            <h2 className="title-small light">24. Miscellaneous Terms</h2>

            <ul>
              <li>
                a. <span className="bold">Modification</span>. Kartzo reserves
                the right to modify these Terms of Use, effective upon
                publishing an updated version on the Platform. Kartzo shall not
                be required to notify You of any changes made to the Terms of
                Use. You are requested to regularly visit the homepage to view
                the most current Terms of Use. You can determine when Kartzo
                last modified the Terms of Use by referring to the{" "}
                <span className="bold">“Last Updated”</span> legend above. It
                shall be Your responsibility to check these Terms of Use
                periodically for changes. Kartzo may require You to provide Your
                consent to the updated Terms of Use in a specified manner prior
                to any further use of the Platform. If no such separate consent
                is sought, Your continued use of the Kartzo Services, or the
                Platform will constitute Your acceptance of those changes.
              </li>
              <li>
                b. <span className="bold">Supplemental Terms</span>.
                Supplemental terms may apply to Your use of the Platform or the
                Kartzo Services, such as use policies or terms related to
                certain features and functionality and/or zero
                tolerance/shipping policies, which may be modified by Kartzo
                from time to time (<span>“Supplemental Terms”</span>). You may
                be presented with certain Supplemental Terms from time to time.
                Supplemental Terms are in addition to, and shall be deemed a
                part of,these Term of Use. Supplemental Terms shall prevail over
                these Terms of Use in the eventof a conflict.
              </li>
              <li>
                c. <span className="bold">Severability</span>.If any provision
                of these Terms of Use is held to be illegal, invalid or
                unenforceable, in whole or in part, under any law, such
                provision or part thereof shall to that extent be deemed not to
                form part of this Terms of Use but the legality, validity and
                enforceability of the remainder of this Agree shall not be
                affected. In that event, the parties shall replace the illegal,
                invalid or unenforceable (part of the) provision with a(part of
                a) provision that is legal, valid and enforceable and that has,
                to the greatest extent possible, a similar effect as the
                illegal, invalid or unenforceable (part of the)provision, given
                the contents and purpose of these Terms of Use.
              </li>
              <li>
                d. <span className="bold">Assignment</span>. You shall not
                assign or transfer these Terms of Use or any of its rights or
                obligations hereunder, in whole or in part, without the prior
                written consent of Kartzo. Kartzo may assign or transfer any or
                all of its rights or obligations hereunder, in whole or in part,
                under these Terms from time to time without consent
              </li>
              <li>
                e. <span className="bold">Notices</span>. Any notice delivered
                by Kartzo to You under these Terms of Use will be deliveredby
                email to the email address associated with Your Account or by
                posting the same on the Platform. Any notice delivered by You to
                Kartzo under these Terms of Use will be delivered by contacting
                Kartzo on legal@Kartzo.in and/or its support representatives.
              </li>
              <li>
                f. <span className="bold">Governing Law; Arbitration</span>.
                This Terms of Use shall be governed exclusively by laws of India
                and the Parties expressly submit to the exclusive jurisdiction
                of the courts of Bangalore. In the event of any dispute, claim
                or controversy arising under, or in relationto, this Terms of
                Use (“Dispute”), such Dispute shall be resolved by arbitration
                inaccordance with the Arbitration and Conciliation Act, 1996.
                The Dispute shall be settled by a sole arbitrator, solely
                appointed by Kartzo pursuant to the provisions of the
                Arbitration and Conciliation Act, 1996. The seat of arbitration
                shall be Bengaluru, India and the arbitration proceedings shall
                be governed by the provisions of the Arbitration and
                Conciliation Act, 1996, as amended from time to time. All
                arbitration proceedings shall be conducted in English. The
                arbitration award shall be final and binding on the Parties and
                shall be enforceable in any competent court of law, and the
                Parties agree to be bound thereby and to act accordingly.
              </li>
            </ul>
          </div>

          <div className="container" id="pnd_terms">
            <h2 className="title align-center mt-60">
              Pick Up and Drop Off Terms
            </h2>
            <p>
              These pick up and drop off terms (
              <span className="bold">“PND Terms”</span>) are published in
              accordance with the provisions of Rule 3 (1) of the Information
              Technology (Intermediaries guidelines) Rules, 2011 that require
              publishing the rules and regulations, privacy policy. In this
              case, these rules and regulations with respect to Kartzo Digital
              Private Limited (<span className="bold">“Kartzo”</span>) will
              include, (i) these PND Terms, (ii) Terms of Use
              (https://Kartzo.in/terms), and the (iii) the Privacy Policy
              (https://Kartzo.in/privacy), for access or usage of{" "}
              <a href="/">www.Kartzo.in</a> (
              <span className="bold">“Website”</span>) and the Kartzo mobile
              application (<span className="bold">“Kartzo App”</span>).
            </p>
            <p>
              This document is an electronic record in terms of the Information
              Technology Act, 2000 and rules there under as applicable and the
              amended provisions pertaining to electronic records in various
              statutes as amended by the Information Technology Act, 2000.
            </p>
            <ul>
              <li>
                <span className="bold">1.</span> As agreed by you in the Terms
                of Use, Kartzo enables a registered user of the Kartzo App to
                connect with independent service providers (
                <span className="bold">“Kartzo Partner”</span>), to fulfil tasks
                raised by such user. Such tasks could include, tasks to pick up
                and drop items from one location (
                <span className="bold">“Pick-Up Location”</span>) and to drop to
                another location (<span className="bold">“Drop Location”</span>)
                (such pick up and drop off tasks,{" "}
                <span className="bold">“Pick-up/Drop-off Task(s)”</span>).
              </li>
              <li>
                <span className="bold">2.</span> You understand and agree that
                the pick-up and drop service is provided to you by the Kartzo
                Partner directly. Kartzo merely acts as a technology platform to
                facilitate such tasks raised by you, and Kartzo does not assume
                any responsibility or liability for any deficiency in the
                service on part of the Kartzo Partner.
              </li>
              <li>
                <span className="bold">3.</span> You agree that if the Kartzo
                Partner picks up certain item(s) from a Pick-Up Location on Your
                behalf, the Kartzo Partner does so on your sole instructions
                under the task raised by you. Kartzo is not a retail store,
                restaurant, food delivery service, merchandise delivery service,
                a courier or shipping service or food preparation entity.
              </li>
              <li>
                <span className="bold">4.</span> You acknowledge and agree that
                the Pick-Up Location and the Drop Location have been voluntarily
                added by you on the Kartzo App. You agree that your location
                data is collected in accordance with Kartzo’s Privacy Policy.
              </li>
              <li>
                <span className="bold">5.</span> You agree that you shall not
                request for a Pick-up/Drop-off Task on the Kartzo App, for
                item(s) which are illegal, hazardous, dangerous, or otherwise
                restricted or constitute items which are prohibited by any
                statute or law or regulation.
              </li>
              <li>
                <span className="bold">6.</span> You agree that before
                initiating a Pick-up/Drop-off Task on the Kartzo Platform, you
                are well aware of these contents of the package sent or
                requested by you through registered Kartzo Partners, and that
                such contents are legal and within limits of transportation
                under any applicable law. Such contents shall not be restricted
                and/or banned and/or dangerous and/or prohibited for carriage (
                <i>
                  such items include, but are not limited to, radio-active,
                  incendiary, corrosive or flammable substances, hazardous
                  chemicals, explosives, firearms or parts thereof and
                  ammunition, firecrackers, cyanides, precipitates, gold and
                  silver ore, bullion, precious metals and stones, jewelry,
                  semi-precious stones including commercial carbons or
                  industrial diamonds, currency (paper or coin) of any
                  nationality, securities (including stocks and bonds, share
                  certificates and blank signed share transfer forms), coupons,
                  stamps, negotiable instruments in bearer form, cashier's
                  cheques, travellers’ cheques, money orders, passports,
                  credit/debit/ATM cards, antiques, works of art, lottery
                  tickets and gambling devices, livestock, fish, insects,
                  animals, plants and plant material, human corpses, organs or
                  body parts, blood, urine and other liquid diagnostic
                  specimens, hazardous or bio-medical waste, wet ice,
                  pornographic materials, contraband, bottled alcoholic
                  beverages or any intoxicant or narcotics and psychotropic
                  substances
                </i>
                ).
              </li>
              <li>
                <span className="bold">7.</span> You also agree that you shall
                not request for dispatch of item(s) which require a special
                transportation permit or require any special license under
                applicable law.
              </li>
              <li>
                <span className="bold">8.</span> You are also aware that the
                Kartzo Partner may choose to not deliver item(s) for any reason
                whatsoever.
              </li>
              <li>
                <span className="bold">9.</span> You also agree that, upon
                becoming aware of the commission any offence or your intention
                to commit any offence upon initiating or during a
                Pick-up/Drop-off Task of any item(s) stipulated under paragraph
                6 of these PND Terms or otherwise restricted under applicable
                law, the Kartzo Partner may report such information to the law
                enforcement authorities.
              </li>
            </ul>
            <div id="pndcancellation_terms" className="pv-20">
              <h2 className="title-small">Cancellations</h2>
              <div>
                <ul>
                  <li>
                    As a general rule you shall not be entitled to cancel your
                    order once you have received confirmation of the same. If
                    you cancel your order after it has been confirmed, Kartzo
                    shall have a right to charge you cancellation fee of a
                    minimum INR 20 upto the order value.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container" id="merchant_terms">
            <h2 className="title align-center mt-60">Merchant Terms</h2>
            <div id="pharmacymerchant_terms" className="pv-20">
              <h2 className="title-small">
                Merchant (Pharmacy) Partner Terms of use
              </h2>
              <div>
                <p>
                  The Kartzo Master Framework Letter{" "}
                  <span className="bold">(“Letter”)</span> along with the
                  Merchant Partner Terms of Use{" "}
                  <span className="bold">(“Terms”)</span>, represents and
                  confirms our mutual Terms with respect to the Merchant
                  Partner’s participation on the proprietary mobile platform
                  currently made available by Kartzo Digital Private Limited{" "}
                  <span className="bold">(“Kartzo” or “us”)</span> or its
                  affiliates, from time-to-time, and referred to as the “Kartzo
                  App”. Upon signing by both parties, the Letter and the Kartzo
                  Merchant Terms of Use binding and enforceable legal contract
                  between you and Kartzo as of the date set forth above{" "}
                  <span className="bold">(“Effective Date”)</span>
                </p>

                <p className="bold">The Terms with you are as follows:</p>

                <h2 className="title-small light">1. Structure of Terms</h2>

                <p>
                  Our Terms shall consist of this Letter, together with the
                  addenda (individually, an{" "}
                  <span className="bold">“Addendum”</span>) addressing areas of
                  collaboration agreed to by both of us (this Letter and any and
                  all such Addenda are collectively the{" "}
                  <span className="bold">“Terms”</span>). In connection with
                  each Addendum, we will designate those actions,
                  responsibilities and services to be respectively provided by
                  each of us. In the event of a conflict, the terms contained in
                  an Addendum will supersede conflicting terms contained in
                  these Terms.
                </p>

                <h2 className="title-small light">2. Intended Projects</h2>

                <p>
                  We each agree to work in good faith with one another on
                  certain collaborative projects, (as described below) or other
                  projects as we mutually agree, in connection with the item(s),
                  which include medicines, cosmetics, other licensed drugs and
                  health products made available [each an{" "}
                  <span className="bold">“Item(s)”</span>] via the Kartzo App.
                  Each project will be further specified in an Addendum, and any
                  such project will only be undertaken once we mutually execute
                  such Addendum.
                </p>

                <h2 className="title-small light">3.</h2>

                <p>
                  The suggested search term(s) or Merchant item(s) visible on
                  the Kartzo App is the general availability of Item(s) during
                  the Merchant’s normal business hours. The Merchant’s customers
                  (the <span className="bold">“Buyers”</span> and/or{" "}
                  <span className="bold">“Kartzo App Users”/” User(s)”</span>)
                  may select Item(s) from the displayed search
                  term(s)/listing(s) on the Kartzo App.
                </p>

                <h2 className="title-small light">4. Delivery</h2>

                <p>
                  The <span className="bold">“Kartzo Web Dashboard”</span> will
                  be made available to the Merchant to access on-demand logistic
                  services by Delivery Partners. For the sake of clarity,
                  neither Kartzo nor its affiliates provide any delivery or
                  logistics services, but Kartzo provides a platform for outlets
                  like yours to connect with Delivery Partners for delivery
                  services and to receive demand prediction, payment processing
                  and related information services in connection with the sale
                  of the Items. <span className="bold">“Delivery Partner”</span>{" "}
                  is defined as an independent contractor who intends to provide
                  on demand delivery services using Kartzo’s proprietary
                  technology platform under license from Kartzo or one of its
                  affiliates. Kartzo will not have any obligation to deliver the
                  Item(s) as a platform provider. For purposes of delivery of
                  the Items, Kartzo and the Delivery Partners shall operate (i)
                  under cover of any approval, license or permission required to
                  operate your business at the Merchant Outlet and sell the
                  Item(s) and (ii) under your control, as your agent (including
                  but not limited to receipt agent of Item charges and based on
                  your instructions, if applicable, apply the Item charges
                  collected on your behalf towards disbursal of the fee payable
                  by you to Delivery Partner), and not employee. For the sake of
                  clarity, you, through the services provided by Delivery
                  Partners, are responsible for the delivery of Items and you
                  maintain possession, control and care of the Items at all
                  times. You shall have marketable legal right and title to sell
                  the products or render the services. You shall not offer any
                  products or services which are illegal, unlawful, expired and
                  in violation of applicable laws and policies. Kartzo will not
                  be liable for any damage or loss incurred by the Users in
                  relation to the delivery of the Items and will follow
                  reasonable guidance you provide regarding the delivery of the
                  Items.
                </p>

                <h2 className="title-small light">
                  5. Availability of Item(s)
                </h2>

                <ul>
                  <li>
                    <span className="bold">5.a. Item(s).</span> Kartzo will
                    provide you reasonable advice regarding demand prediction,
                    which you may use in connection with your determination of
                    the quantity and type of Items made available via the Kartzo
                    App. You are fully responsible for quality, safety and
                    delivery of the Items and you shall adhere to all applicable
                    laws and regulations in relation to the preparation,
                    provision, packaging and delivery of the Items. You will
                    determine any quality, portion, size, ingredient or other
                    criteria (including those of laws and regulations) that
                    apply to the Items (<span className="bold">“Criteria”</span>
                    ) and you are solely responsible for ensuring that the Items
                    meet such criteria when then are made available via the
                    Kartzo App. In the event of failing to provide Items that
                    adhere to the Criteria (each, a{" "}
                    <span className="bold">“Substandard Item”</span>), Kartzo is
                    under no obligation to make such Substandard Items available
                    for sale via the Kartzo App.
                  </li>
                  <li>
                    <span className="bold">5.b. Taxes.</span> You are
                    responsible for determining and setting the retail price (
                    <span className="bold">“Retail Price”</span>) for each Item
                    and duly informing Kartzo from time to time, including any
                    Item discount(s)/discounts on offer from time to time. You
                    shall be the “retailer” or{" "}
                    <span className="bold">“seller”</span> of all Items for the
                    purpose of any indirect tax (such as value added tax, sales
                    tax, service tax, goods and services tax) (
                    <span className="bold">“Indirect Tax”</span>) and the
                    responsible party for collection and remittance of
                    applicable Indirect Tax. For the sake of clarity, the Retail
                    Price for each Item shall include Indirect Tax, as
                    applicable. You undertake that all applicable taxes on
                    item(s) &amp; delivery would be deposited by you with the
                    government treasury within stipulated timelines. Except as
                    may be expressly agreed in this Terms, each party shall be
                    responsible for its expenses and costs during its
                    performance under this Terms.
                  </li>
                  <li>
                    <span className="bold">5.c. Item Inventory.</span> You
                    maintain title to all Item inventory until each Item is
                    delivered to a User. You are responsible for the costs of
                    all Items. Whenever a User wishes to avail Items or Service
                    as identified by the App, Kartzo will notify the Merchant
                    Partner of the specifications and particulars of the order
                    as is received from the User. Upon receipt of an order
                    request from a User, the Merchant Partner shall keep ready
                    the product or provide any service as required by the User.
                    In the event the specifications are not sufficient for the
                    Merchant Partner to process any order, the Merchant Partner
                    must seek further information as required.
                  </li>
                  <li>
                    <span className="bold">5.d.</span> Notwithstanding these
                    Terms, Kartzo reserves the right to temporarily discontinue
                    Services or permanently terminate with immediate effect for
                    material breach or non-compliance by the Merchant Partner
                    which includes, but is not limited to, the following
                    instances:
                    <ul>
                      <li>
                        (i). User/Buyer complaints received by Kartzo which are
                        directly or indirectly attributable to the quality of
                        item(s) provided by the Merchant Partner either through
                        poor ratings, as defined by Kartzo, through calls placed
                        with Kartzo or through any other means;
                      </li>
                      <li>
                        (ii). Sale of medicines requiring a prescription,
                        without one to the User or the sale of medicines which
                        are below the standard quality or prohibited from sale
                        under any law;
                      </li>
                      <li>
                        (iii). Breach of the provisions of the Drugs and
                        Cosmetics Act, 1940 and the rules, including any other
                        law applicable to the Merchant Partner;
                      </li>
                      <li>
                        (iv). Breach of the representations and warranties of
                        the Merchant Partner; or
                      </li>
                      <li>(v). Any other material breach of the terms.</li>
                      <li>
                        Notwithstanding anything contained under this Terms,
                        Kartzo has the right to immediately delist any of the
                        item(s) from the Platform, which is not in compliance
                        with applicable law or the rules or regulations, made
                        thereunder.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="bold">5.e.</span> You are responsible for
                    costs related to reimbursement to the Users in the event
                    Users have either refused to pay for or have claimed partial
                    or full refund, as applicable, for reasons that are
                    attributable to Merchant Partner, including but not limited
                    to, User’s expectations not being met or User
                    dissatisfaction in relation to, <i>inter alia</i>, the
                    quality of the Item(s), undelivered Item(s), discrepancy in
                    the Item(s) delivered which is not in accordance with the
                    Item placed and/or those Item(s) for which User requests for
                    a replacement. (
                    <span className="bold">“Disputed Orders”</span>) Any such
                    User(s) request a refund for any Item(s) (including, without
                    limitation, any costs associated with retrieving any such
                    Item(s), if applicable), for reasons that are considered by
                    Kartzo in its sole discretion as reasonable, for (i) request
                    by the Users of refund or (ii) acceptance by the Delivery
                    Partner of the request. Kartzo may deduct refunds from the
                    payment made to you under these Terms.
                  </li>
                  <li>
                    <span className="bold">5.f.</span> It is clarified that
                    Kartzo shall not be liable to make any payment for a
                    Disputed Order. Kartzo shall reserve the right to recover
                    from Merchant Partner, the amount paid to Users/Buyers as
                    refund upto the order value.
                  </li>
                  <li>
                    <span className="bold">5.g.</span> In case of complaints
                    from the User pertaining to item quality, or any other such
                    issues, Kartzo shall notify the same to Merchant Partner and
                    shall also redirect the Buyer to the consumer call center of
                    the Merchant. Merchant Partner shall alone be liable for
                    redressing and bound to take action on the complaints by the
                    User. Kartzo has the right to share with the Merchant
                    Partner, the relevant information including the Merchant
                    details to enable satisfactory resolution of the complaint.
                    Kartzo shall in the interest of satisfactory resolution of
                    the Complaint, share with the User, relevant information
                    pertaining to the Order along with Merchant details.
                  </li>
                  <li>
                    <span className="bold">5.h. Service Fee.</span> In
                    consideration for use of the Kartzo App, Kartzo will charge
                    you a service fee as specifically set forth on each
                    applicable Addendum as well as the Letter. All fees under
                    these Terms shall be paid in Indian Rupees and are exclusive
                    of any taxes, including Indirect Tax and withholding tax, if
                    applicable.
                  </li>
                  <li>
                    <span className="bold">5.i.</span> Kartzo does not guarantee
                    that you will be matched with the Delivery Partner at the
                    time you wish to be matched. Kartzo shall not be liable for
                    any failure to match.
                  </li>
                </ul>

                <h2 className="title-small light">6. Promotional Activities</h2>

                <ul>
                  <li>
                    <span className="bold">6.a. Marketing.</span> Kartzo will
                    each showcase the availability of the Items via the Kartzo
                    App through various promotional activities (e.g., our
                    respective social media channels, websites, or blogs), as
                    mutually agreed.
                  </li>
                  <li>
                    <span className="bold">6.b. Marks.</span> Subject to the
                    terms and conditions of this Terms, each party hereby grants
                    to the other party (and, in the case of Kartzo, to its
                    affiliates) a limited, non-exclusive and non-transferable
                    license during the Term to use the such party’s respective
                    Marks (as defined below), on a royalty-free basis, for the
                    sole purpose of performing the promotional activities as set
                    forth in an applicable Addendum. For purposes of this Terms,
                    the term <span className="bold">“Marks”</span> will mean the
                    trademarks, service marks, trade names, copyrights, logos,
                    slogans and other identifying symbols and indicia of the
                    applicable party. All uses of a party’s marks by the other
                    party will be in the form and format specified or approved
                    by the owner of such marks. Except as expressly set forth
                    herein, neither party will use the other party’s marks
                    without the prior, express, written consent of the other
                    party. All goodwill related to the use of a party’s marks by
                    the other party shall inure to the benefit of the owner of
                    such marks. Except as expressly set forth herein, neither
                    party shall be deemed to grant the other party any license
                    or rights under any intellectual property or other
                    proprietary rights.
                  </li>
                  <li>
                    <span className="bold">6.c. Publicity.</span> Except as may
                    be expressly set forth in this Terms or an applicable
                    Addendum, neither party may issue a press release or
                    otherwise refer to the other party in any manner with
                    respect to this Terms or otherwise, without the prior
                    written consent of such other party.
                  </li>
                  <li>
                    <span className="bold">6.d. Privacy.</span>{" "}
                    <span className="bold">“Personal Data”</span> means any
                    information obtained in connection with this Terms (a)
                    relating to an identified or identifiable natural person;
                    (b) that can reasonably be used to identify or authenticate
                    an individual, including but not limited to name, contact
                    information, precise location information, persistent
                    identifiers; and (c) any information that may otherwise be
                    considered <span className="bold">“personal data”</span> or{" "}
                    <span className="bold">“personal information”</span> under
                    the applicable law. Merchant agrees to use, disclose, store,
                    retain or otherwise process Personal Data solely for the
                    purpose of performing the services contemplated by this
                    Terms. Merchant shall maintain the accuracy and integrity of
                    any Personal Data provided by Kartzo in its possession,
                    custody or control. Merchant agrees to retain Personal Data
                    provided to Merchant by Kartzo solely by using the software
                    and tools provided by Kartzo.
                  </li>
                </ul>

                <h2 className="title-small light">7. Non-Exclusive</h2>
                <p>
                  We each acknowledge and agree that, unless otherwise stated in
                  a Letter/Addendum, our relationship is non-exclusive.
                </p>

                <h2 className="title-small light">
                  8. Confidential Information
                </h2>
                <p>
                  <span className="bold">“Confidential Information”</span> means
                  any confidential, proprietary or other non-public information
                  disclosed by one party (the{" "}
                  <span className="bold">“Discloser”</span>) to the other (the{" "}
                  <span className="bold">“Recipient”</span>), whether disclosed
                  verbally, in writing, or by inspection of tangible objects.
                  Confidential Information will not include that information
                  that (a) was previously known to the Recipient without an
                  obligation of confidentiality; (b) was acquired by the
                  Recipient without any obligation of confidentiality from a
                  third party with the right to make such disclosure; or (c) is
                  or becomes publicly available through no fault of the
                  Recipient. Each Recipient agrees that it will not disclose to
                  any third parties, or use in any way other than as necessary
                  to perform this Terms, the Discloser’s Confidential
                  Information. Each Recipient will ensure that Confidential
                  Information will only be made available to those of its
                  employees and agents who have a need to know such Confidential
                  Information and who are be bound by written obligations of
                  confidentiality at least as protective of the Discloser as
                  this Terms before such individual has access to the
                  Discloser’s Confidential Information. Each Recipient will not,
                  and will not authorize others to, remove, overprint or deface
                  any notice of copyright, trademark, logo, legend, or other
                  notices of ownership from any originals or copies of the
                  Discloser’s Confidential Information. The foregoing
                  prohibition on disclosure of Confidential Information will not
                  apply to the extent the Discloser has authorized such
                  disclosure, nor to the extent a Recipient is required to
                  disclose certain Confidential Information of the Discloser as
                  a legal obligation based on the applicable laws and
                  regulations or order of a court, provided that the Recipient
                  gives the Discloser prior written notice of such obligation to
                  disclose and reasonably assist in filing petition of objection
                  etc. prior to making such disclosure. Upon expiration or
                  termination of this Terms and as requested by a Discloser,
                  each Recipient will deliver to the Discloser (or destroy at
                  the Discloser’s election) any and all materials or documents
                  containing the Discloser’s Confidential Information, together
                  with all copies thereof in whatever form.
                </p>

                <h2 className="title-small light">
                  9. Representations and Warranties; Disclaimer
                </h2>
                <ul>
                  <li>
                    <span className="bold">9.a.</span> Each party hereby
                    represents and warrants that: (a) it has full power and
                    authority to enter into this Terms and perform its
                    obligations hereunder; (b) it is duly organized, validly
                    existing and in good standing under the laws of the
                    jurisdiction of its origin; (c) it has not entered into, and
                    during the Term (as defined below) will not enter into, any
                    Terms that would prevent it from complying with or
                    performing under this Terms (in your case, including without
                    limitation, any exclusive Terms with any third parties for
                    the availability of item via a technology platform); and (d)
                    the content, media and other materials used or provided as
                    part of this Terms shall not infringe or otherwise violate
                    the intellectual property rights, rights of publicity or
                    other proprietary rights of any third party.
                  </li>
                  <li>
                    <span className="bold">9.b.</span> The Merchant further
                    represents and warrants that it will comply with all
                    applicable laws and regulations in its performance of this
                    Terms including, but not limited to, the Drugs and Cosmetics
                    Act, 1940 and rules and regulations made thereunder,
                    including any law applicable to its engagement of Delivery
                    Partners.
                  </li>
                  <li>
                    <span className="bold">9.c.</span> The Merchant further
                    represents and warrants that the details of the tax
                    registrations provided by the Merchant and Indirect tax to
                    be levied on each item to be made available for sale via the
                    Kartzo App is as per{" "}
                    <span className="bold">Addendum II</span>, forming integral
                    part of this Terms. The Merchant further confirms and
                    declares that the information provided in{" "}
                    <span className="bold">Addendum II</span> and the copies of
                    tax registrations, are true and correct, and assumes
                    responsibility to intimate Kartzo in case of any change in
                    the provided information. The Merchant undertakes that all
                    Indirect Tax applied on each Item and Delivery made
                    available for sale via the Kartzo App would be deposited
                    with the Government Treasury within stipulated timelines.
                  </li>
                  <li>
                    <span className="bold">9.d.</span> EXCEPT AS SET FORTH
                    HEREIN, EACH PARTY MAKES NO REPRESENTATIONS, AND HEREBY
                    EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
                    REGARDING ITS SERVICES OR PRODUCTS OR PURPOSE OF THIS TERMS.
                  </li>
                </ul>

                <h2 className="title-small light">10. Indemnification</h2>
                <ul>
                  <li>
                    <span className="bold">10.a. Indemnified Claims.</span> Each
                    party (the{" "}
                    <span className="bold">“Indemnifying Party”</span>) will
                    indemnify, defend and hold harmless the other party, its
                    affiliates and their respective directors, officers,
                    employees and agents (the{" "}
                    <span className="bold">“Indemnified Party”</span>) from and
                    against any and all claims, damages, losses and expenses
                    (including reasonable attorney’s fees) (collectively,{" "}
                    <span className="bold">“Losses”</span>) with respect to any
                    third party claim arising out of or related to: (a) the
                    negligence or wilful misconduct of the Indemnifying Party
                    and its employees or agents (in your case, excluding Kartzo
                    and Delivery Partners to the extent they are your agents
                    pursuant to Section 3) in their performance of this Terms;
                    (b) any claims that the Indemnifying Party breached its
                    representations and warranties in this Terms; (c) any claims
                    that the Indemnifying Party’s Marks infringe a third party’s
                    intellectual property rights, as long as such Marks have
                    been used in the manner approved by the Indemnifying Party;
                    or (d) any breach and/or non-compliance with applicable data
                    protection laws. In addition, you will indemnify, defend and
                    hold harmless the Kartzo Indemnified Parties from and
                    against any and all Losses with respect to any third-party
                    claim arising out of or related to any harm resulting from
                    your violation or alleged violation of any applicable retail
                    or other health and safety code, rule or regulation, except
                    to the extent such harm was directly caused by the gross
                    negligence or wilful misconduct of Kartzo or its employees,
                    agents or Delivery Partners.
                  </li>
                  <li>
                    <span className="bold">10.b. Procedure.</span> Each
                    Indemnified Party shall provide prompt notice to the
                    Indemnifying Party of any potential claim subject to
                    indemnification hereunder. The Indemnifying Party will
                    assume the defense of the claim through counsel designated
                    by it and reasonably acceptable to the Indemnified Party.
                    The Indemnifying Party will not settle or compromise any
                    claim, without written consent of the Indemnified Party,
                    which will not be unreasonably withheld. The Indemnified
                    Party will reasonably cooperate with the Indemnifying Party
                    in the defense of a claim, at Indemnifying Party’s expense.
                  </li>
                </ul>

                <h2 className="title-small light">11. Limits of Liability</h2>
                <p>
                  For the purposes of this clause, “Liability” means liability
                  in or for breach of contract, negligence, misrepresentation,
                  tortious claim, restitution or any other cause of action
                  whatsoever relating to or arising under or in connection with
                  these Terms, including liability expressly provided for under
                  these Terms or arising by reason of the invalidity or
                  unenforceability of any term under this contract. Kartzo does
                  not exclude or limit Liability for any Liability that cannot
                  be excluded by law. Subject to the preceding sentence, Kartzo
                  shall not be under any Liability for loss of actual or
                  anticipated profits, loss of goodwill, loss of business, loss
                  of revenue or of the use of money, loss of contracts, loss of
                  anticipated savings, loss of data and/or undertaking the
                  restoration of data, fraudulent orders, any special, indirect
                  or consequential loss, and such liability is excluded whether
                  it is foreseeable, known, foreseen or otherwise. For the
                  avoidance of any doubt, this clause shall apply whether such
                  damage or loss is direct, indirect, consequential or
                  otherwise. However, Kartzo will use its best endeavors to
                  ensure that the unintentional operational errors do not occur,
                  Kartzo cannot provide any warranty or guarantee in this
                  regard. Notwithstanding anything to the contrary herein set
                  out, Kartzo’s aggregate liability under this Agreement and
                  respective Terms of Use shall not exceed the total value of a
                  Disputed Order.
                </p>

                <h2 className="title-small light">12. Insurance</h2>
                <p>
                  During the Term (as defined below) and for one (1) year
                  thereafter, the Merchant shall maintain General Commercial
                  Liability and, if required by law, Worker’s Compensation (or
                  substantially equivalent) insurance. The General Commercial
                  Liability insurance policy limits shall be the greater of (a)
                  the limits required by applicable law or (b) the limits
                  customarily maintained by companies in the merchant’s
                  industry, in India. All policies shall be written by reputable
                  insurance companies in the jurisdiction. Such insurance shall
                  be primary and non-contributing to any insurance maintained or
                  obtained by the other party and shall not be cancelled or
                  materially reduced without thirty (30) days’ prior written
                  notice to the other party. Upon Kartzo’s request, the Merchant
                  shall provide evidence of the insurance required herein. In no
                  event shall the limits of any policy be considered as limiting
                  the liability of a Merchant under the Terms.
                </p>

                <h2 className="title-small light">13. Term and Termination</h2>
                <p>
                  Either Kartzo or the Merchant Partner can terminate this
                  contract providing 15 days’ prior written notice to the other.
                  Kartzo shall delist the Merchant Partner at the end of the
                  15th Day. Upon termination in accordance with the terms
                  hereof, Merchant Partner shall only be required to service
                  Item(s) already placed through Kartzo prior to such expiry or
                  earlier termination of these Terms, and Kartzo shall be
                  entitled to receive Service Fee for such Item(s).
                </p>

                <h2 className="title-small light">14. No Waiver</h2>
                <p>
                  No failure or delay by any Party in exercising any right,
                  power or remedy under these Terms of Use or provided by law
                  shall operate as a waiver thereof or affect that right, power
                  or remedy. No waiver by any Party of any breach by any other
                  Party of any provision hereof shall be deemed to be a waiver
                  of any subsequent breach of that or any other provision
                  hereof.
                </p>

                <h2 className="title-small light">15. Relationship</h2>
                <p>
                  The Parties agree that nothing in this Terms shall be
                  construed as creating the relationship of employer and
                  employee, master and servant, or principal and agent, or a
                  partnership, or a joint venture of any kind whatsoever between
                  the Parties or between the parties and its respective
                  contractors / employees.
                </p>

                <h2 className="title-small light">16. Governing Law</h2>
                <p>
                  This Terms of Use shall be governed by and construed in
                  accordance with the laws of India. Any dispute arising out of
                  or in connection with Services, which the Parties are unable
                  to settle within 30 days, shall be referred to arbitration by
                  a sole arbitrator appointed mutually by both Parties. The
                  Arbitration shall be conducted in accordance with Arbitration
                  and Conciliation Act, 1996 or any statutory re-enactment or
                  modification thereof for the time being in force. The venue of
                  the arbitration shall be Bengaluru and the arbitration shall
                  be conducted in English language. Subject to the foregoing,
                  the courts at Bengaluru shall have exclusive jurisdiction.
                </p>

                <h2 className="title-small light">17. Severability</h2>
                <p>
                  If any provision of these Terms of Use is held by a court of
                  competent jurisdiction to be invalid or unenforceable, the
                  remainder of the Terms of Use which can be given effect
                  without the invalid provision shall continue in full force and
                  effect and shall in no way be impaired or invalidated.
                </p>

                <h2 className="title-small light">18. Notice</h2>
                <ul>
                  <li>
                    All notices under these Terms shall be sent by registered
                    post acknowledgment due, contemporaneous courier or email to
                    the address mentioned below:
                  </li>
                  <li>
                    <span className="bold">
                      Kartzo Digital Private Limited{" "}
                    </span>{" "}
                    <br />
                    Reg Office: 457, 10th Main Road, 2nd Stage, HAL 2nd Stage,
                    Indiranagar, Bengaluru, Karnataka 560038
                  </li>
                </ul>

                <h2 className="title-small light">19.</h2>
                <p>
                  If the Merchant Partner notices any discrepancy in the weekly
                  settlement, the Merchant Partner may raise a ticket by writing
                  an email to{" "}
                  <i>
                    <u>merchantsupport@Kartzo.in</u>
                  </i>{" "}
                  and the same will be mutually resolved by both parties within
                  15 days from the date on which the ticket was raised.
                </p>

                <h2 className="title-small light">20.</h2>
                <p>
                  The failure of either party to enforce, at any time or for any
                  period of time, the provisions hereof, or the failure of
                  either party to exercise any option herein, shall not be
                  construed as a waiver of such provision or option and shall in
                  no way affect that party’s right to enforce such provisions or
                  exercise such option.
                </p>

                <h2 className="title-small light">21.</h2>
                <p>
                  Any modification or amendment to this Terms shall be effective
                  only if in writing and signed or sealed with print name by
                  both parties. In the event any provision of this Terms is
                  determined to be invalid or unenforceable by ruling of an
                  arbitrator or court of competent jurisdiction, the remainder
                  of this Terms and each of the remaining terms and conditions
                  contained herein) shall remain in full force and effect.
                </p>

                <h2 className="title-small light">22.</h2>
                <p>
                  Any delay in or failure by either party in performance of this
                  Terms shall be excused if and to the extent such delay or
                  failure is caused by occurrences beyond the control of the
                  affected party including, but not limited to, decrees or
                  restraints of Government, acts of God, strikes, work stoppage
                  or other labor disturbances, war or sabotage (each being a
                  “Force Majeure Event”). The affected party will promptly
                  notify the other party upon becoming aware that any Force
                  Majeure has occurred or is likely to occur and will use
                  commercially reasonable efforts to minimize any resulting
                  delay in or interference with the performance of its
                  obligations under this Terms. This Terms may not be assigned,
                  in whole or in part, by a party without the prior written
                  consent of the other party, provided that each party may
                  assign this Terms, upon notice to the other party, to (a) an
                  affiliate of Kartzo (for Kartzo), or (b) in connection with
                  the sale of all or substantially all of such party’s equity,
                  business or assets. Subject to the foregoing, this Terms shall
                  be binding upon and shall inure to the benefit of each party
                  hereto and its respective successors and assigns. Nothing in
                  this Terms shall be deemed to create any joint venture, joint
                  enterprise, or agency relationship among the parties (except
                  as specifically set forth in Section 3 above), and no party
                  shall have the right to enter into contracts on behalf of, to
                  legally bind, to incur debt on behalf of, or to otherwise
                  incur any liability or obligation on behalf of, the other
                  party hereto. Each party shall be solely responsible for its
                  employees and contractors used in connection with this Terms.
                  This Terms contains the full and complete understanding and
                  Terms between the parties relating to the subject matter
                  hereof and supersedes all prior and contemporary
                  understandings and Terms, whether oral or written, relating
                  such subject matter hereof. This Terms may be executed in one
                  or more counterparts and by exchange of electronically signed
                  counterparts transmitted by pdf format or exchange by
                  hard-copy, each of which shall be deemed an original and all
                  of which, when taken together, shall constitute one and the
                  same original instrument.
                </p>
              </div>

              <div>
                <h2 className="title-xsmall align-center">
                  <p className="mb-15">
                    <b>
                      <u>Addendum I</u>
                    </b>
                  </p>
                  <p>
                    <b>Special Terms</b>
                  </p>
                </h2>

                <h2 className="title-small light">1. Reporting</h2>
                <p>
                  Kartzo will give you information regarding the number of Items
                  picked up by Delivery Partners and sold by you to the Users
                  pursuant to the Terms. The Merchant Partner shall maintain
                  such documents to record the proof of delivery of product or
                  performance of service. Without prejudice to the generality of
                  the aforesaid, Merchant shall routinely and at such time
                  intervals provide such reports and in such formats as may be
                  specified by the Company.
                </p>

                <h2 className="title-small light">2. Payment</h2>
                <ul>
                  <li>
                    <span className="bold">2.a. Service Fee.</span> In
                    consideration for Kartzo’s lead generation, demand
                    prediction, payment processing and other related services
                    provided via the Kartzo App under the Terms, Kartzo will
                    charge you a service fee, agreed under the Letter and
                    reiterated under the{" "}
                    <span className="bold">Addendum II</span> (exclusive of
                    Indirect Tax and withholding tax, if any) on Item Value, as
                    defined under the Letter or (the{" "}
                    <span className="bold">“Service Fee”</span>). This Service
                    Fee is charged as consideration for expediting the Users’
                    orders via the Kartzo App.
                  </li>
                  <li>
                    <span className="bold">
                      2.b. Goods and services tax (“GST”).
                    </span>{" "}
                    Collection by Kartzo from Users on your behalf would be
                    subject to tax deduction or collection at source in
                    accordance with the applicable GST laws.
                  </li>
                  <li>
                    <span className="bold">2.c. Remittance.</span> Kartzo will
                    remit to you the total (i) Item Payment (including any
                    Indirect Tax collected on your behalf but reduced by the
                    Service Fee, amounts remitted to Delivery Partners under
                    your instructions and tax deduction/ collection at source)
                    earned by you, (ii) less any refunds given to your customers
                    or Users (such final remitted amount being the{" "}
                    <span className="bold">“Item Revenue”</span>).
                  </li>
                  <li>
                    <span className="bold">2.d. </span> Item Revenue received by
                    Kartzo from the User on behalf of the Merchant Partner will
                    be settled into the Merchant Partner’s bank account, details
                    of which are set forth in{" "}
                    <span className="bold">Addendum II</span>. Settlement of
                    transaction payments shall be within the time period as set
                    forth by the guidelines of the Reserve Bank of India, where
                    applicable. The Merchant Partner agrees to provide such
                    documents and information necessary or as may be sought by a
                    payment facilitator or bank to enlist the Merchant Partner
                    as a payee of Kartzo. The Merchant Partner agrees that for
                    this purpose, information about and provided by the Merchant
                    Partner will be shared with a payment facilitator or bank.
                  </li>
                </ul>

                <h2 className="title-small light">3. Restrictions</h2>
                <p>
                  Delivery Partners are independent service providers, and as
                  such, they reserve the right to refuse to accept any item for
                  delivery in their sole discretion. Any item that you do not
                  have permission or license to sell or deliver may not be sold
                  to Users.
                </p>
              </div>

              <div>
                <h2 className="title-xsmall align-center">
                  <p className="mb-15">
                    <b>
                      <u>ADDENDUM II</u>
                    </b>
                  </p>
                  <p>
                    <b>
                      <u>TAX DETAILS OF THE MERCHANT</u>
                    </b>
                  </p>
                </h2>

                <p>1. Details of Tax Registrations</p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Details of Registration</th>{" "}
                      <th>Registration Number</th>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Permanent Account Number</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Goods &amp; Service Tax Registration
                      </td> <td></td>{" "}
                    </tr>
                  </tbody>
                </table>

                <p>
                  2. Indirect Taxes to be levied on each Item enlisted on the
                  Kartzo App
                </p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Nature of Tax</th> <th>Percentage Levy</th>
                    </tr>
                    <tr>
                      {" "}
                      <td>Service Tax</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Value Added Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Central Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>State Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Integrated Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  3. Other Charges to be levied on each Item enlisted on the
                  Kartzo App
                </p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Nature of Charges</th> <th> Percentage / Amount </th>
                    </tr>
                    <tr>
                      {" "}
                      <td>Packaging Charges</td> <td></td>{" "}
                    </tr>
                  </tbody>
                </table>

                <h2 className="title-xsmall align-center">
                  <p>
                    <b>
                      <u>OTHER DETAILS</u>
                    </b>
                  </p>
                </h2>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <td>Name of Merchant Partner </td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Effective Date</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Registered Address of the Merchant Partner</td>{" "}
                      <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Service Address, Email, Telephone numbers, User/Customer
                        Complaint Redressal Number
                      </td>{" "}
                      <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Merchant Partner contact person</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Service Fee</td> <td>% of the Item Value.</td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Mode of Payment Settlement</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Bank Account details of the Merchant Partner</td>{" "}
                      <td></td>{" "}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="grocerymerchant_terms" className="pv-20">
              <h2 className="title-small">
                Merchant (Grocery) Partner Terms of use
              </h2>
              <div>
                <p>
                  The Kartzo Master Framework Letter (
                  <span className="bold">“Letter”</span>) along with the
                  Restaurant/Merchant Partner Terms of Use (
                  <span className="bold">“Terms”</span>), represents and
                  confirms our mutual Terms with respect to the
                  Restaurant/Merchant Partner’s participation on the proprietary
                  mobile platform currently made available by Kartzo Digital
                  Private Limited (
                  <span className="bold">“Kartzo” or “us”</span>) or its
                  affiliates, from time-to-time, and referred to as the “Kartzo
                  App”. Upon signing by both parties, the Letter and the Kartzo
                  Restaurant/Merchant Terms of Use binding and enforceable legal
                  contract between you and Kartzo as of the date set forth above
                  (<span className="bold">“Effective Date”</span>)
                </p>
                <p className="bold">The Terms with you are as follows:</p>

                <h2 className="title-small light">1. Structure of Terms</h2>
                <p>
                  Our Terms shall consist of this Letter, together with the
                  addenda (individually, an{" "}
                  <span className="bold">“Addendum”</span>) addressing areas of
                  collaboration agreed to by both of us (this Letter and any and
                  all such Addenda are collectively the{" "}
                  <span className="bold">“Terms”</span>). In connection with
                  each Addendum, we will designate those actions,
                  responsibilities and services to be respectively provided by
                  each of us. In the event of a conflict, the terms contained in
                  an Addendum will supersede conflicting terms contained in
                  these Terms.
                </p>

                <h2 className="title-small light">2. Intended Projects</h2>
                <p>
                  We each agree to work in good faith with one another on
                  certain collaborative projects, (as described below) or other
                  projects as we mutually agree, in connection with the food or
                  packaged food item(s) or any grocery item(s) and/or beverages
                  the Restaurant/Merchant makes available (each, a{" "}
                  <span className="bold">“Meal”</span> or{" "}
                  <span className="bold">“Item(s)”</span>, as interchangeably
                  used under these Terms) via the Kartzo App. Each project will
                  be further specified in an Addendum, and any such project will
                  only be undertaken once we mutually execute such Addendum.
                </p>

                <h2 className="title-small light">3.</h2>
                <p>
                  The suggested search term(s) or Restaurant/Merchant item(s)
                  visible on the Kartzo App is the general availability of Meals
                  during the Restaurant’s normal business hours. The
                  Restaurant/Merchant’s customers (the{" "}
                  <span className="bold">“Buyers”</span> and/or{" "}
                  <span className="bold">“Kartzo App Users”/” User(s)”</span>)
                  may select Meals from the displayed search term(s)/listing(s)
                  on the Kartzo App.
                </p>

                <h2 className="title-small light">4. Delivery</h2>
                <p>
                  The <span className="bold">“Kartzo Web Dashboard”</span> will
                  be made available to the Restaurant/Merchant to access
                  on-demand logistic services by Delivery Partners. For the sake
                  of clarity, neither Kartzo nor its affiliates provide any
                  delivery or logistics services, but Kartzo provides a platform
                  for restaurants/outlets like yours to connect with Delivery
                  Partners for delivery services and to receive demand
                  prediction, payment processing and related information
                  services in connection with the sale of the Meals.{" "}
                  <span className="bold">“Delivery Partner”</span> is defined as
                  an independent contractor who intends to provide on demand
                  delivery services using Kartzo’s proprietary technology
                  platform under license from Kartzo or one of its affiliates.
                  Kartzo will not have any obligation to deliver the Item(s) as
                  a platform provider. For purposes of delivery of the Meals,
                  Kartzo and the Delivery Partners shall operate (i) under cover
                  of any approval, license or permission required to operate
                  your business at the Restaurant/Merchant Outlet and sell the
                  Meal and (ii) under your control, as your agent (including but
                  not limited to receipt agent of meal charges and based on your
                  instructions, if applicable, apply the meal charges collected
                  on your behalf towards disbursal of the fee payable by you to
                  Delivery Partner), and not employee. For the sake of clarity,
                  you, through the services provided by Delivery Partners, are
                  responsible for the delivery of Meals and you maintain
                  possession, control and care of the Meals at all times. You
                  shall have marketable legal right and title to sell the
                  products or render the services. You shall not offer any
                  products or services which are illegal, unlawful, expired and
                  in violation of applicable laws and policies. Kartzo will not
                  be liable for any damage or loss incurred by the Users in
                  relation to the delivery of the Meals and will follow
                  reasonable guidance you provide regarding the delivery of the
                  Meals.
                </p>

                <h2 className="title-small light">
                  5. Availability of Meal(s)/Item(s)
                </h2>
                <ul>
                  <li>
                    <span className="bold">5.a. Meal(s)/Item(s).</span> Kartzo
                    will provide you reasonable advice regarding demand
                    prediction, which you may use in connection with your
                    determination of the quantity and type of Meals/Items made
                    available via the Kartzo App. You are fully responsible for
                    quality, safety and delivery of the Meals/Items and you
                    shall adhere to all applicable laws and regulations in
                    relation to the preparation, provision, packaging and
                    delivery of the Meals/Items. You will determine any quality,
                    portion, size, ingredient or other criteria (including those
                    of laws and regulations) that apply to the Meals/Items (
                    <span className="bold">“Criteria”</span>) and you are solely
                    responsible for ensuring that the Meals/Items meet such
                    criteria when then are made available via the Kartzo App. In
                    the event of failing to provide Meals/Items that adhere to
                    the Criteria (each, a{" "}
                    <span className="bold">“Substandard Meal/Item”</span>),
                    Kartzo is under no obligation to make such Substandard
                    Meals/Items available for sale via the Kartzo App.
                  </li>
                  <li>
                    <span className="bold">5.b. Taxes.</span> You are
                    responsible for determining and setting the retail price (
                    <span className="bold">“Retail Price”</span>) for each
                    Meal/Item and duly informing Kartzo from time to time,
                    including any Meal/Item discount(s)/discounts on offer from
                    time to time. You shall be the “retailer” or{" "}
                    <span className="bold">“seller”</span> of all Meals/Items
                    for the purpose of any indirect tax (such as value added
                    tax, sales tax, service tax, goods and services tax) (
                    <span className="bold">“Indirect Tax”</span>) and the
                    responsible party for collection and remittance of
                    applicable Indirect Tax. For the sake of clarity, the Retail
                    Price for each Meal/Item shall include Indirect Tax, as
                    applicable. You undertake that all applicable taxes on
                    meal(s)/item(s) &amp; delivery would be deposited by you
                    with the government treasury within stipulated timelines.
                    Except as may be expressly agreed in this Terms, each party
                    shall be responsible for its expenses and costs during its
                    performance under this Terms.
                  </li>
                  <li>
                    <span className="bold">5.c. Meal/Item Inventory.</span> You
                    maintain title to all Meal/Item inventory until each
                    Meal/Item is delivered to a User. You are responsible for
                    the costs of all Meals/Items. Whenever a User wishes to
                    avail Meals/Items or Service as identified by the App,
                    Kartzo will notify the Restaurant Partner of the
                    specifications and particulars of the order as is received
                    from the User. Upon receipt of an order request from a User,
                    the Restaurant Partner shall keep ready the product or
                    provide any service as required by the User. In the event
                    the specifications are not sufficient for the
                    Restaurant/Merchant Partner to process any order, the
                    Restaurant/Merchant Partner must seek further information as
                    required.
                  </li>
                  <li>
                    <span className="bold">5.d. </span> Notwithstanding these
                    Terms, Kartzo reserves the right to temporarily discontinue
                    Services or permanently terminate with immediate effect for
                    material breach or non-compliance by the Restaurant Partner
                    which includes, but is not limited to, the following
                    instances:
                    <ul>
                      <li>
                        (i). User/Buyer complaints received by Kartzo which are
                        directly or indirectly attributable to the quality of
                        food provided by the Restaurant Partner either through
                        poor ratings, as defined by Kartzo, through calls placed
                        with Kartzo or through any other means;
                      </li>
                      <li>
                        (ii). Breach of the provisions of the Food Safety and
                        Standards Act, 2006 and the rules and regulations, made
                        thereunder, by Restaurant Partner;
                      </li>
                      <li>
                        (iii). Breach of the representations and warranties of
                        the Restaurant Partner; or
                      </li>
                      <li>(iv). Any other material breach of the terms.</li>
                      <li>
                        Notwithstanding anything contained under this Terms,
                        Kartzo has the right to immediately delist any of the
                        food products from the Platform, which is not in
                        compliance with the Food Safety and Standards Act, 2006
                        or the rules or regulations, made thereunder.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="bold">5.e. </span> You are responsible for
                    costs related to reimbursement to the Users in the event
                    Users have either refused to pay for or have claimed partial
                    or full refund, as applicable, for reasons that are
                    attributable to Restaurant Partner, including but not
                    limited to, User’s expectations not being met or User
                    dissatisfaction in relation to, <i>inter alia</i>, the
                    quality of the Meal(s)/Item(s), undelivered Meal(s)/Item(s),
                    discrepancy in the Meal(s)/Item(s) delivered which is not in
                    accordance with the Meal/Item placed and/or those
                    Meal(s)/Item(s) for which User requests for a replacement. (
                    <span className="bold">“Disputed Orders”</span>) Any such
                    User(s) request a refund for any Meal(s)/Item(s) (including,
                    without limitation, any costs associated with retrieving any
                    such Meal(s), if applicable), for reasons that are
                    considered by Kartzo in its sole discretion as reasonable,
                    for (i) request by the Users of refund or (ii) acceptance by
                    the Delivery Partner of the request. Kartzo may deduct
                    refunds from the payment made to you under these Terms.
                  </li>
                  <li>
                    <span className="bold">5.f. </span> It is clarified that
                    Kartzo shall not be liable to make any payment for a
                    Disputed Order. Kartzo shall reserve the right to recover
                    from Restaurant Partner, the amount paid to Users/Buyers as
                    refund upto the order value.
                  </li>
                  <li>
                    <span className="bold">5.g. </span> In case of complaints
                    from the User pertaining to food efficacy, quality, or any
                    other such issues, Kartzo shall notify the same to
                    Restaurant Partner and shall also redirect the Buyer to the
                    consumer call center of the Restaurant. Restaurant Partner
                    shall alone be liable for redressing and bound to take
                    action on the complaints by the User. Kartzo has the right
                    to share with the Restaurant Partner, the relevant
                    information including the Restaurant details to enable
                    satisfactory resolution of the complaint. Kartzo shall in
                    the interest of satisfactory resolution of the Complaint,
                    share with the User, relevant information pertaining to the
                    Order along with Restaurant details.
                  </li>
                  <li>
                    <span className="bold">5.h. Service Fee.</span> In
                    consideration for use of the Kartzo App, Kartzo will charge
                    you a service fee as specifically set forth on each
                    applicable Addendum as well as the Letter. All fees under
                    these Terms shall be paid in Indian Rupees and are exclusive
                    of any taxes, including Indirect Tax and withholding tax, if
                    applicable.
                  </li>
                  <li>
                    <span className="bold">5.i. </span> Kartzo does not
                    guarantee that you will be matched with the Delivery Partner
                    at the time you wish to be matched. Kartzo shall not be
                    liable for any failure to match.
                  </li>
                </ul>

                <h2 className="title-small light">6. Promotional Activities</h2>
                <ul>
                  <li>
                    <span className="bold">6.a. Marketing.</span> Kartzo will
                    each showcase the availability of the Meals via the Kartzo
                    App through various promotional activities (e.g., our
                    respective social media channels, websites, or blogs), as
                    mutually agreed.
                  </li>
                  <li>
                    <span className="bold">6.b. Marks.</span> Subject to the
                    terms and conditions of this Terms, each party hereby grants
                    to the other party (and, in the case of Kartzo, to its
                    affiliates) a limited, non-exclusive and non-transferable
                    license during the Term to use the such party’s respective
                    Marks (as defined below), on a royalty-free basis, for the
                    sole purpose of performing the promotional activities as set
                    forth in an applicable Addendum. For purposes of this Terms,
                    the term <span className="bold">“Marks”</span> will mean the
                    trademarks, service marks, trade names, copyrights, logos,
                    slogans and other identifying symbols and indicia of the
                    applicable party. All uses of a party’s marks by the other
                    party will be in the form and format specified or approved
                    by the owner of such marks. Except as expressly set forth
                    herein, neither party will use the other party’s marks
                    without the prior, express, written consent of the other
                    party. All goodwill related to the use of a party’s marks by
                    the other party shall inure to the benefit of the owner of
                    such marks. Except as expressly set forth herein, neither
                    party shall be deemed to grant the other party any license
                    or rights under any intellectual property or other
                    proprietary rights.
                  </li>
                  <li>
                    <span className="bold">6.c. Publicity.</span> Except as may
                    be expressly set forth in this Terms or an applicable
                    Addendum, neither party may issue a press release or
                    otherwise refer to the other party in any manner with
                    respect to this Terms or otherwise, without the prior
                    written consent of such other party.
                  </li>
                  <li>
                    <span className="bold">6.d. Privacy.</span>{" "}
                    <span className="bold"> “Personal Data” </span>means any
                    information obtained in connection with this Terms (a)
                    relating to an identified or identifiable natural person;
                    (b) that can reasonably be used to identify or authenticate
                    an individual, including but not limited to name, contact
                    information, precise location information, persistent
                    identifiers; and (c) any information that may otherwise be
                    considered <span className="bold">“personal data”</span> or{" "}
                    <span className="bold">“personal information”</span> under
                    the applicable law. Restaurant agrees to use, disclose,
                    store, retain or otherwise process Personal Data solely for
                    the purpose of performing the services contemplated by this
                    Terms. Restaurant shall maintain the accuracy and integrity
                    of any Personal Data provided by Kartzo in its possession,
                    custody or control. Restaurant agrees to retain Personal
                    Data provided to Restaurant by Kartzo solely by using the
                    software and tools provided by Kartzo.
                  </li>
                </ul>

                <h2 className="title-small light">7. Non-Exclusive</h2>
                <p>
                  We each acknowledge and agree that, unless otherwise stated in
                  a Letter/Addendum, our relationship is non-exclusive.
                </p>

                <h2 className="title-small light">
                  8. Confidential Information
                </h2>
                <p>
                  <span className="bold">“Confidential Information”</span> means
                  any confidential, proprietary or other non-public information
                  disclosed by one party (the{" "}
                  <span className="bold">“Discloser”</span>) to the other (the{" "}
                  <span className="bold">“Recipient”</span>), whether disclosed
                  verbally, in writing, or by inspection of tangible objects.
                  Confidential Information will not include that information
                  that (a) was previously known to the Recipient without an
                  obligation of confidentiality; (b) was acquired by the
                  Recipient without any obligation of confidentiality from a
                  third party with the right to make such disclosure; or (c) is
                  or becomes publicly available through no fault of the
                  Recipient. Each Recipient agrees that it will not disclose to
                  any third parties, or use in any way other than as necessary
                  to perform this Terms, the Discloser’s Confidential
                  Information. Each Recipient will ensure that Confidential
                  Information will only be made available to those of its
                  employees and agents who have a need to know such Confidential
                  Information and who are be bound by written obligations of
                  confidentiality at least as protective of the Discloser as
                  this Terms before such individual has access to the
                  Discloser’s Confidential Information. Each Recipient will not,
                  and will not authorize others to, remove, overprint or deface
                  any notice of copyright, trademark, logo, legend, or other
                  notices of ownership from any originals or copies of the
                  Discloser’s Confidential Information. The foregoing
                  prohibition on disclosure of Confidential Information will not
                  apply to the extent the Discloser has authorized such
                  disclosure, nor to the extent a Recipient is required to
                  disclose certain Confidential Information of the Discloser as
                  a legal obligation based on the applicable laws and
                  regulations or order of a court, provided that the Recipient
                  gives the Discloser prior written notice of such obligation to
                  disclose and reasonably assist in filing petition of objection
                  etc. prior to making such disclosure. Upon expiration or
                  termination of this Terms and as requested by a Discloser,
                  each Recipient will deliver to the Discloser (or destroy at
                  the Discloser’s election) any and all materials or documents
                  containing the Discloser’s Confidential Information, together
                  with all copies thereof in whatever form.
                </p>

                <h2 className="title-small light">
                  9. Representations and Warranties; Disclaimer
                </h2>
                <ul>
                  <li>
                    <span className="bold">9.a.</span> Each party hereby
                    represents and warrants that: (a) it has full power and
                    authority to enter into this Terms and perform its
                    obligations hereunder; (b) it is duly organized, validly
                    existing and in good standing under the laws of the
                    jurisdiction of its origin; (c) it has not entered into, and
                    during the Term (as defined below) will not enter into, any
                    Terms that would prevent it from complying with or
                    performing under this Terms (in your case, including without
                    limitation, any exclusive Terms with any third parties for
                    the availability of food via a technology platform); and (d)
                    the content, media and other materials used or provided as
                    part of this Terms shall not infringe or otherwise violate
                    the intellectual property rights, rights of publicity or
                    other proprietary rights of any third party.
                  </li>
                  <li>
                    <span className="bold">9.b.</span> The Restaurant further
                    represents and warrants that it will comply with all
                    applicable laws and regulations in its performance of this
                    Terms including, but not limited to, the Food Safety &amp;
                    Standards Act, 2006 and rules and regulations made
                    thereunder, its engagement of Delivery Partners.
                  </li>
                  <li>
                    <span className="bold">9.c.</span> The Restaurant further
                    represents and warrants that the details of the tax
                    registrations provided by the Restaurant and Indirect tax to
                    be levied on each meal to be made available for sale via the
                    Kartzo App is as per{" "}
                    <span className="bold">Addendum II</span>, forming integral
                    part of this Terms. The Restaurant further confirms and
                    declares that the information provided in{" "}
                    <span className="bold">Addendum II</span> and the copies of
                    tax registrations, are true and correct, and assumes
                    responsibility to intimate Kartzo in case of any change in
                    the provided information. The Restaurant undertakes that all
                    Indirect Tax applied on each Meal and Delivery made
                    available for sale via the Kartzo App would be deposited
                    with the Government Treasury within stipulated timelines.
                  </li>
                  <li>
                    <span className="bold">9.d.</span> EXCEPT AS SET FORTH
                    HEREIN, EACH PARTY MAKES NO REPRESENTATIONS, AND HEREBY
                    EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
                    REGARDING ITS SERVICES OR PRODUCTS OR PURPOSE OF THIS TERMS.
                  </li>
                </ul>

                <h2 className="title-small light">10. Indemnification</h2>
                <ul>
                  <li>
                    <span className="bold">10.a. Indemnified Claims.</span> Each
                    party (the{" "}
                    <span className="bold">“Indemnifying Party”</span>) will
                    indemnify, defend and hold harmless the other party, its
                    affiliates and their respective directors, officers,
                    employees and agents (the{" "}
                    <span className="bold">“Indemnified Party”</span>) from and
                    against any and all claims, damages, losses and expenses
                    (including reasonable attorney’s fees) (collectively,{" "}
                    <span className="bold">“Losses”</span>) with respect to any
                    third party claim arising out of or related to: (a) the
                    negligence or wilful misconduct of the Indemnifying Party
                    and its employees or agents (in your case, excluding Kartzo
                    and Delivery Partners to the extent they are your agents
                    pursuant to Section 3) in their performance of this Terms;
                    (b) any claims that the Indemnifying Party breached its
                    representations and warranties in this Terms; (c) any claims
                    that the Indemnifying Party’s Marks infringe a third party’s
                    intellectual property rights, as long as such Marks have
                    been used in the manner approved by the Indemnifying Party;
                    or (d) any breach and/or non-compliance with applicable data
                    protection laws. In addition, you will indemnify, defend and
                    hold harmless the Kartzo Indemnified Parties from and
                    against any and all Losses with respect to any third-party
                    claim arising out of or related to any harm resulting from
                    your violation or alleged violation of any applicable retail
                    food or other health and safety code, rule or regulation,
                    except to the extent such harm was directly caused by the
                    gross negligence or wilful misconduct of Kartzo or its
                    employees, agents or Delivery Partners.
                  </li>
                  <li>
                    <span className="bold">10.b. Procedure.</span> Each
                    Indemnified Party shall provide prompt notice to the
                    Indemnifying Party of any potential claim subject to
                    indemnification hereunder. The Indemnifying Party will
                    assume the defense of the claim through counsel designated
                    by it and reasonably acceptable to the Indemnified Party.
                    The Indemnifying Party will not settle or compromise any
                    claim, without written consent of the Indemnified Party,
                    which will not be unreasonably withheld. The Indemnified
                    Party will reasonably cooperate with the Indemnifying Party
                    in the defense of a claim, at Indemnifying Party’s expense.
                  </li>
                </ul>

                <h2 className="title-small light">11. Limits of Liability</h2>
                <p>
                  For the purposes of this clause,{" "}
                  <span className="bold">“Liability”</span> means liability in
                  or for breach of contract, negligence, misrepresentation,
                  tortious claim, restitution or any other cause of action
                  whatsoever relating to or arising under or in connection with
                  these Terms, including liability expressly provided for under
                  these Terms or arising by reason of the invalidity or
                  unenforceability of any term under this contract. Kartzo does
                  not exclude or limit Liability for any Liability that cannot
                  be excluded by law. Subject to the preceding sentence, Kartzo
                  shall not be under any Liability for loss of actual or
                  anticipated profits, loss of goodwill, loss of business, loss
                  of revenue or of the use of money, loss of contracts, loss of
                  anticipated savings, loss of data and/or undertaking the
                  restoration of data, fraudulent orders, any special, indirect
                  or consequential loss, and such liability is excluded whether
                  it is foreseeable, known, foreseen or otherwise. For the
                  avoidance of any doubt, this clause shall apply whether such
                  damage or loss is direct, indirect, consequential or
                  otherwise. However, Kartzo will use its best endeavors to
                  ensure that the unintentional operational errors do not occur,
                  Kartzo cannot provide any warranty or guarantee in this
                  regard. Notwithstanding anything to the contrary herein set
                  out, Kartzo’s aggregate liability under this Agreement and
                  respective Terms of Use shall not exceed the total value of a
                  Disputed Order.
                </p>

                <h2 className="title-small light">12. Insurance</h2>
                <p>
                  During the Term (as defined below) and for one (1) year
                  thereafter, the Restaurant shall maintain General Commercial
                  Liability and, if required by law, Worker’s Compensation (or
                  substantially equivalent) insurance. The General Commercial
                  Liability insurance policy limits shall be the greater of (a)
                  the limits required by applicable law or (b) the limits
                  customarily maintained by companies in the restaurant
                  industry, in India. All policies shall be written by reputable
                  insurance companies in the jurisdiction. Such insurance shall
                  be primary and non-contributing to any insurance maintained or
                  obtained by the other party and shall not be cancelled or
                  materially reduced without thirty (30) days’ prior written
                  notice to the other party. Upon Kartzo’s request, the
                  Restaurant shall provide evidence of the insurance required
                  herein. In no event shall the limits of any policy be
                  considered as limiting the liability of a Restaurant under the
                  Terms.
                </p>

                <h2 className="title-small light">13. Term and Termination</h2>
                <p>
                  Either Kartzo or the Restaurant Partner can terminate this
                  contract providing 15 days’ prior written notice to the other.
                  Kartzo shall delist the Restaurant Partner at the end of the
                  15th Day. Upon termination in accordance with the terms
                  hereof, Restaurant Partner shall only be required to service
                  Meal(s) already placed through Kartzo prior to such expiry or
                  earlier termination of these Terms, and Kartzo shall be
                  entitled to receive Service Fee for such Meal(s).
                </p>

                <h2 className="title-small light">14. No Waiver</h2>
                <p>
                  No failure or delay by any Party in exercising any right,
                  power or remedy under these Terms of Use or provided by law
                  shall operate as a waiver thereof or affect that right, power
                  or remedy. No waiver by any Party of any breach by any other
                  Party of any provision hereof shall be deemed to be a waiver
                  of any subsequent breach of that or any other provision
                  hereof.
                </p>

                <h2 className="title-small light">15. Relationship</h2>
                <p>
                  The Parties agree that nothing in this Terms shall be
                  construed as creating the relationship of employer and
                  employee, master and servant, or principal and agent, or a
                  partnership, or a joint venture of any kind whatsoever between
                  the Parties or between the parties and its respective
                  contractors / employees.
                </p>

                <h2 className="title-small light">16. Governing Law</h2>
                <p>
                  This Terms of Use shall be governed by and construed in
                  accordance with the laws of India. Any dispute arising out of
                  or in connection with Services, which the Parties are unable
                  to settle within 30 days, shall be referred to arbitration by
                  a sole arbitrator appointed mutually by both Parties. The
                  Arbitration shall be conducted in accordance with Arbitration
                  and Conciliation Act, 1996 or any statutory re-enactment or
                  modification thereof for the time being in force. The venue of
                  the arbitration shall be Bengaluru and the arbitration shall
                  be conducted in English language. Subject to the foregoing,
                  the courts at Bengaluru shall have exclusive jurisdiction.
                </p>

                <h2 className="title-small light">17. Severability</h2>
                <p>
                  If any provision of these Terms of Use is held by a court of
                  competent jurisdiction to be invalid or unenforceable, the
                  remainder of the Terms of Use which can be given effect
                  without the invalid provision shall continue in full force and
                  effect and shall in no way be impaired or invalidated.
                </p>

                <h2 className="title-small light">18. Notice</h2>
                <ul>
                  <li>
                    All notices under these Terms shall be sent by registered
                    post acknowledgment due, contemporaneous courier or email to
                    the address mentioned below:
                  </li>
                  <li>
                    <span className="bold">
                      Kartzo Digital Private Limited{" "}
                    </span>{" "}
                    <br />
                    Reg Office: 457, 10th Main Road, 2nd Stage, HAL 2nd Stage,
                    Indiranagar, Bengaluru, Karnataka 560038
                  </li>
                </ul>

                <h2 className="title-small light">19.</h2>
                <p>
                  If the Restaurant Partner notices any discrepancy in the
                  weekly settlement, the Restaurant Partner may raise a ticket
                  by writing an email to{" "}
                  <i>
                    <u>merchantsupport@Kartzo.in</u>
                  </i>{" "}
                  and the same will be mutually resolved by both parties within
                  15 days from the date on which the ticket was raised.
                </p>

                <h2 className="title-small light">20.</h2>
                <p>
                  The failure of either party to enforce, at any time or for any
                  period of time, the provisions hereof, or the failure of
                  either party to exercise any option herein, shall not be
                  construed as a waiver of such provision or option and shall in
                  no way affect that party’s right to enforce such provisions or
                  exercise such option.
                </p>

                <h2 className="title-small light">21.</h2>
                <p>
                  Any modification or amendment to this Terms shall be effective
                  only if in writing and signed or sealed with print name by
                  both parties. In the event any provision of this Terms is
                  determined to be invalid or unenforceable by ruling of an
                  arbitrator or court of competent jurisdiction, the remainder
                  of this Terms and each of the remaining terms and conditions
                  contained herein) shall remain in full force and effect.
                </p>

                <h2 className="title-small light">22.</h2>
                <p>
                  Any delay in or failure by either party in performance of this
                  Terms shall be excused if and to the extent such delay or
                  failure is caused by occurrences beyond the control of the
                  affected party including, but not limited to, decrees or
                  restraints of Government, acts of God, strikes, work stoppage
                  or other labor disturbances, war or sabotage (each being a
                  “Force Majeure Event”). The affected party will promptly
                  notify the other party upon becoming aware that any Force
                  Majeure has occurred or is likely to occur and will use
                  commercially reasonable efforts to minimize any resulting
                  delay in or interference with the performance of its
                  obligations under this Terms. This Terms may not be assigned,
                  in whole or in part, by a party without the prior written
                  consent of the other party, provided that each party may
                  assign this Terms, upon notice to the other party, to (a) an
                  affiliate of Kartzo (for Kartzo), or (b) in connection with
                  the sale of all or substantially all of such party’s equity,
                  business or assets. Subject to the foregoing, this Terms shall
                  be binding upon and shall inure to the benefit of each party
                  hereto and its respective successors and assigns. Nothing in
                  this Terms shall be deemed to create any joint venture, joint
                  enterprise, or agency relationship among the parties (except
                  as specifically set forth in Section 3 above), and no party
                  shall have the right to enter into contracts on behalf of, to
                  legally bind, to incur debt on behalf of, or to otherwise
                  incur any liability or obligation on behalf of, the other
                  party hereto. Each party shall be solely responsible for its
                  employees and contractors used in connection with this Terms.
                  This Terms contains the full and complete understanding and
                  Terms between the parties relating to the subject matter
                  hereof and supersedes all prior and contemporary
                  understandings and Terms, whether oral or written, relating
                  such subject matter hereof. This Terms may be executed in one
                  or more counterparts and by exchange of electronically signed
                  counterparts transmitted by pdf format or exchange by
                  hard-copy, each of which shall be deemed an original and all
                  of which, when taken together, shall constitute one and the
                  same original instrument.
                </p>
              </div>
              <div>
                <h2 className="title-xsmall align-center">
                  <p className="mb-15">
                    <b>
                      <u>Addendum I</u>
                    </b>
                  </p>
                  <p>
                    <b>Special Terms</b>
                  </p>
                </h2>

                <h2 className="title-small light">1. Reporting</h2>
                <p>
                  Kartzo will give you information regarding the number of Meals
                  picked up by Delivery Partners and sold by you to the Users
                  pursuant to the Terms. The Restaurant Partner shall maintain
                  such documents to record the proof of delivery of product or
                  performance of service. Without prejudice to the generality of
                  the aforesaid, Restaurant shall routinely and at such time
                  intervals provide such reports and in such formats as may be
                  specified by the Company.
                </p>

                <h2 className="title-small light">2. Payment</h2>
                <ul>
                  <li>
                    <span className="bold">2.a. Service Fee.</span> In
                    consideration for Kartzo’s lead generation, demand
                    prediction, payment processing and other related services
                    provided via the Kartzo App under the Terms, Kartzo will
                    charge you a service fee, agreed under the Letter and
                    reiterated under the{" "}
                    <span className="bold">Addendum II</span> (exclusive of
                    Indirect Tax and withholding tax, if any) on Meal Value, as
                    defined under the Letter or (the{" "}
                    <span className="bold">“Service Fee”</span>). This Service
                    Fee is charged as consideration for expediting the Users’
                    orders via the Kartzo App.
                  </li>
                  <li>
                    <span className="bold">
                      2.b. Goods and services tax (“GST”).
                    </span>{" "}
                    Collection by Kartzo from Users on your behalf would be
                    subject to tax deduction or collection at source in
                    accordance with the applicable GST laws.
                  </li>
                  <li>
                    <span className="bold">2.c. Remittance.</span> Kartzo will
                    remit to you the total (i) Meal Payment (including any
                    Indirect Tax collected on your behalf but reduced by the
                    Service Fee, amounts remitted to Delivery Partners under
                    your instructions and tax deduction/ collection at source)
                    earned by you, (ii) less any refunds given to your customers
                    or Users (such final remitted amount being the{" "}
                    <span className="bold">“Meal Revenue”</span>).
                  </li>
                  <li>
                    <span className="bold">2.d.</span> Meal Revenue received by
                    Kartzo from the User on behalf of the Restaurant Partner
                    will be settled into the Restaurant Partner’s bank account,
                    details of which are set forth in{" "}
                    <span className="bold">
                      <u>Addendum II</u>
                    </span>
                    . Settlement of transaction payments shall be within the
                    time period as set forth by the guidelines of the Reserve
                    Bank of India, where applicable. The Restaurant Partner
                    agrees to provide such documents and information necessary
                    or as may be sought by a payment facilitator or bank to
                    enlist the Restaurant Partner as a payee of Kartzo. The
                    Restaurant Partner agrees that for this purpose, information
                    about and provided by the Restaurant Partner will be shared
                    with a payment facilitator or bank.
                  </li>
                </ul>

                <h2 className="title-small light">3. Restrictions</h2>
                <p>
                  Delivery Partners are independent service providers, and as
                  such, they reserve the right to refuse to accept any item for
                  delivery in their sole discretion. Any item that you do not
                  have permission or license to sell or deliver may not be sold
                  to Users.
                </p>
              </div>

              <div>
                <h2 className="title-xsmall align-center">
                  <p className="mb-15">
                    <b>
                      <u>ADDENDUM II</u>
                    </b>
                  </p>
                  <p>
                    <b>
                      <u>TAX DETAILS OF THE RESTAURANT/MERCHANT</u>
                    </b>
                  </p>
                </h2>

                <p>1. Details of Tax Registrations</p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Details of Registration</th>{" "}
                      <th>Registration Number</th>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Permanent Account Number</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Goods &amp; Service Tax Registration
                      </td> <td></td>{" "}
                    </tr>
                  </tbody>
                </table>

                <p>
                  2. Indirect Taxes to be levied on each Item enlisted on the
                  Kartzo App
                </p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Nature of Tax</th> <th>Percentage Levy</th>
                    </tr>
                    <tr>
                      {" "}
                      <td>Service Tax</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Value Added Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Central Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>State Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Integrated Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  3. Other Charges to be levied on each Meal enlisted on the
                  Kartzo App
                </p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Nature of Charges</th> <th> Percentage / Amount </th>
                    </tr>
                    <tr>
                      {" "}
                      <td>Packaging Charges</td> <td></td>{" "}
                    </tr>
                  </tbody>
                </table>

                <h2 className="title-xsmall align-center">
                  <p>
                    <b>
                      <u>OTHER DETAILS</u>
                    </b>
                  </p>
                </h2>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <td>Name of Restaurant Partner </td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Effective Date</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Registered Address of the Restaurant Partner{" "}
                      </td>{" "}
                      <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Service Address, Email, Telephone numbers, User/Customer
                        Complaint Redressal Number
                      </td>{" "}
                      <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Restaurant Partner contact person</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Service Fee</td> <td>% of the Meal Value.</td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Mode of Payment Settlement</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Bank Account details of the Restaurant Partner{" "}
                      </td>{" "}
                      <td></td>{" "}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="restaurantmerchant_terms" className="pv-20">
              <h2 className="title-small">
                Merchant (Restaurant) Partner Terms of Use
              </h2>
              <div>
                <p>
                  The Kartzo Master Framework Letter (
                  <span className="bold">“Letter”</span>) along with the
                  Restaurant/Merchant Partner Terms of Use (
                  <span className="bold">“Terms”</span>), represents and
                  confirms our mutual Terms with respect to the
                  Restaurant/Merchant Partner’s participation on the proprietary
                  mobile platform currently made available by Kartzo Digital
                  Private Limited (
                  <span className="bold">“Kartzo” or “us”</span>) or its
                  affiliates, from time-to-time, and referred to as the “Kartzo
                  App”. Upon signing by both parties, the Letter and the Kartzo
                  Restaurant/Merchant Terms of Use binding and enforceable legal
                  contract between you and Kartzo as of the date set forth above
                  (<span className="bold">“Effective Date”</span>)
                </p>

                <p className="bold">The Terms with you are as follows:</p>

                <h2 className="title-small light">1. Structure of Terms</h2>

                <p>
                  Our Terms shall consist of this Letter, together with the
                  addenda (individually, an{" "}
                  <span className="bold">“Addendum”</span>) addressing areas of
                  collaboration agreed to by both of us (this Letter and any and
                  all such Addenda are collectively the{" "}
                  <span className="bold">“Terms”</span>). In connection with
                  each Addendum, we will designate those actions,
                  responsibilities and services to be respectively provided by
                  each of us. In the event of a conflict, the terms contained in
                  an Addendum will supersede conflicting terms contained in
                  these Terms.
                </p>

                <h2 className="title-small light">2. Intended Projects</h2>

                <p>
                  We each agree to work in good faith with one another on
                  certain collaborative projects, (as described below) or other
                  projects as we mutually agree, in connection with the food or
                  packaged food item(s) or any grocery item(s) and/or beverages
                  the Restaurant/Merchant makes available (each, a{" "}
                  <span className="bold">“Meal” or “Item(s)”</span>, as
                  interchangeably used under these Terms) via the Kartzo App.
                  Each project will be further specified in an Addendum, and any
                  such project will only be undertaken once we mutually execute
                  such Addendum.
                </p>

                <h2 className="title-small light">3.</h2>

                <p>
                  The suggested search term(s) or Restaurant/Merchant item(s)
                  visible on the Kartzo App is the general availability of Meals
                  during the Restaurant’s normal business hours. The
                  Restaurant/Merchant’s customers (the{" "}
                  <span className="bold">“Buyers”</span> and/or{" "}
                  <span className="bold">“Kartzo App Users”/” User(s)”</span>)
                  may select Meals from the displayed search term(s)/listing(s)
                  on the Kartzo App.
                </p>

                <h2 className="title-small light">4. Delivery</h2>

                <p>
                  The <span className="bold">“Kartzo Web Dashboard”</span> will
                  be made available to the Restaurant/Merchant to access
                  on-demand logistic services by Delivery Partners. For the sake
                  of clarity, neither Kartzo nor its affiliates provide any
                  delivery or logistics services, but Kartzo provides a platform
                  for restaurants/outlets like yours to connect with Delivery
                  Partners for delivery services and to receive demand
                  prediction, payment processing and related information
                  services in connection with the sale of the Meals.{" "}
                  <span className="bold">“Delivery Partner”</span> is defined as
                  an independent contractor who intends to provide on demand
                  delivery services using Kartzo’s proprietary technology
                  platform under license from Kartzo or one of its affiliates.
                  Kartzo will not have any obligation to deliver the Item(s) as
                  a platform provider. For purposes of delivery of the Meals,
                  Kartzo and the Delivery Partners shall operate (i) under cover
                  of any approval, license or permission required to operate
                  your business at the Restaurant/Merchant Outlet and sell the
                  Meal and (ii) under your control, as your agent (including but
                  not limited to receipt agent of meal charges and based on your
                  instructions, if applicable, apply the meal charges collected
                  on your behalf towards disbursal of the fee payable by you to
                  Delivery Partner), and not employee. For the sake of clarity,
                  you, through the services provided by Delivery Partners, are
                  responsible for the delivery of Meals and you maintain
                  possession, control and care of the Meals at all times. You
                  shall have marketable legal right and title to sell the
                  products or render the services. You shall not offer any
                  products or services which are illegal, unlawful, expired and
                  in violation of applicable laws and policies. Kartzo will not
                  be liable for any damage or loss incurred by the Users in
                  relation to the delivery of the Meals and will follow
                  reasonable guidance you provide regarding the delivery of the
                  Meals.
                </p>

                <h2 className="title-small light">
                  5. Availability of Meal(s)/Item(s)
                </h2>

                <ul>
                  <li>
                    <span className="bold">5.a. Meal(s)/Item(s).</span> Kartzo
                    will provide you reasonable advice regarding demand
                    prediction, which you may use in connection with your
                    determination of the quantity and type of Meals/Items made
                    available via the Kartzo App. You are fully responsible for
                    quality, safety and delivery of the Meals/Items and you
                    shall adhere to all applicable laws and regulations in
                    relation to the preparation, provision, packaging and
                    delivery of the Meals/Items. You will determine any quality,
                    portion, size, ingredient or other criteria (including those
                    of laws and regulations) that apply to the Meals/Items (
                    <span className="bold">“Criteria”</span>) and you are solely
                    responsible for ensuring that the Meals/Items meet such
                    criteria when then are made available via the Kartzo App. In
                    the event of failing to provide Meals/Items that adhere to
                    the Criteria (each, a{" "}
                    <span className="bold">“Substandard Meal/Item”</span>),
                    Kartzo is under no obligation to make such Substandard
                    Meals/Items available for sale via the Kartzo App.
                  </li>
                  <li>
                    <span className="bold">5.b. Taxes.</span> You are
                    responsible for determining and setting the retail price (
                    <span className="bold">“Retail Price”</span>) for each
                    Meal/Item and duly informing Kartzo from time to time,
                    including any Meal/Item discount(s)/discounts on offer from
                    time to time. You shall be the “retailer” or{" "}
                    <span className="bold">“seller”</span> of all Meals/Items
                    for the purpose of any indirect tax (such as value added
                    tax, sales tax, service tax, goods and services tax) (
                    <span className="bold">“Indirect Tax”</span>) and the
                    responsible party for collection and remittance of
                    applicable Indirect Tax. For the sake of clarity, the Retail
                    Price for each Meal/Item shall include Indirect Tax, as
                    applicable. You undertake that all applicable taxes on
                    meal(s)/item(s) &amp; delivery would be deposited by you
                    with the government treasury within stipulated timelines.
                    Except as may be expressly agreed in this Terms, each party
                    shall be responsible for its expenses and costs during its
                    performance under this Terms.
                  </li>
                  <li>
                    <span className="bold">5.c. Meal/Item Inventory.</span> You
                    maintain title to all Meal/Item inventory until each
                    Meal/Item is delivered to a User. You are responsible for
                    the costs of all Meals/Items. Whenever a User wishes to
                    avail Meals/Items or Service as identified by the App,
                    Kartzo will notify the Restaurant Partner of the
                    specifications and particulars of the order as is received
                    from the User. Upon receipt of an order request from a User,
                    the Restaurant Partner shall keep ready the product or
                    provide any service as required by the User. In the event
                    the specifications are not sufficient for the
                    Restaurant/Merchant Partner to process any order, the
                    Restaurant/Merchant Partner must seek further information as
                    required.
                  </li>
                  <li>
                    <span className="bold">5.d.</span> Notwithstanding these
                    Terms, Kartzo reserves the right to temporarily discontinue
                    Services or permanently terminate with immediate effect for
                    material breach or non-compliance by the Restaurant Partner
                    which includes, but is not limited to, the following
                    instances:
                    <ul>
                      <li>
                        (i). User/Buyer complaints received by Kartzo which are
                        directly or indirectly attributable to the quality of
                        food provided by the Restaurant Partner either through
                        poor ratings, as defined by Kartzo, through calls placed
                        with Kartzo or through any other means;
                      </li>
                      <li>
                        (ii). Breach of the provisions of the Food Safety and
                        Standards Act, 2006 and the rules and regulations, made
                        thereunder, by Restaurant Partner;
                      </li>
                      <li>
                        (iii). Breach of the representations and warranties of
                        the Restaurant Partner; or
                      </li>
                      <li>(iv). Any other material breach of the terms.</li>
                      <li>
                        Notwithstanding anything contained under this Terms,
                        Kartzo has the right to immediately delist any of the
                        food products from the Platform, which is not in
                        compliance with the Food Safety and Standards Act, 2006
                        or the rules or regulations, made thereunder.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="bold">5.e.</span> You are responsible for
                    costs related to reimbursement to the Users in the event
                    Users have either refused to pay for or have claimed partial
                    or full refund, as applicable, for reasons that are
                    attributable to Restaurant Partner, including but not
                    limited to, User’s expectations not being met or User
                    dissatisfaction in relation to, <i>inter alia</i>, the
                    quality of the Meal(s)/Item(s), undelivered Meal(s)/Item(s),
                    discrepancy in the Meal(s)/Item(s) delivered which is not in
                    accordance with the Meal/Item placed and/or those
                    Meal(s)/Item(s) for which User requests for a replacement. (
                    <span className="bold">“Disputed Orders”</span>) Any such
                    User(s) request a refund for any Meal(s)/Item(s) (including,
                    without limitation, any costs associated with retrieving any
                    such Meal(s), if applicable), for reasons that are
                    considered by Kartzo in its sole discretion as reasonable,
                    for (i) request by the Users of refund or (ii) acceptance by
                    the Delivery Partner of the request. Kartzo may deduct
                    refunds from the payment made to you under these Terms.
                  </li>
                  <li>
                    <span className="bold">5.f.</span> It is clarified that
                    Kartzo shall not be liable to make any payment for a
                    Disputed Order. Kartzo shall reserve the right to recover
                    from Restaurant Partner, the amount paid to Users/Buyers as
                    refund upto the order value.
                  </li>
                  <li>
                    <span className="bold">5.g.</span> In case of complaints
                    from the User pertaining to food efficacy, quality, or any
                    other such issues, Kartzo shall notify the same to
                    Restaurant Partner and shall also redirect the Buyer to the
                    consumer call center of the Restaurant. Restaurant Partner
                    shall alone be liable for redressing and bound to take
                    action on the complaints by the User. Kartzo has the right
                    to share with the Restaurant Partner, the relevant
                    information including the Restaurant details to enable
                    satisfactory resolution of the complaint. Kartzo shall in
                    the interest of satisfactory resolution of the Complaint,
                    share with the User, relevant information pertaining to the
                    Order along with Restaurant details.
                  </li>
                  <li>
                    <span className="bold">5.h. Service Fee.</span> In
                    consideration for use of the Kartzo App, Kartzo will charge
                    you a service fee as specifically set forth on each
                    applicable Addendum as well as the Letter. All fees under
                    these Terms shall be paid in Indian Rupees and are exclusive
                    of any taxes, including Indirect Tax and withholding tax, if
                    applicable.
                  </li>
                  <li>
                    <span className="bold">5.i.</span> Kartzo does not guarantee
                    that you will be matched with the Delivery Partner at the
                    time you wish to be matched. Kartzo shall not be liable for
                    any failure to match.
                  </li>
                </ul>

                <h2 className="title-small light">6. Promotional Activities</h2>

                <ul>
                  <li>
                    <span className="bold">6.a. Marketing.</span> Kartzo will
                    each showcase the availability of the Meals via the Kartzo
                    App through various promotional activities (e.g., our
                    respective social media channels, websites, or blogs), as
                    mutually agreed.
                  </li>
                  <li>
                    <span className="bold">6.b. Marks.</span> Subject to the
                    terms and conditions of this Terms, each party hereby grants
                    to the other party (and, in the case of Kartzo, to its
                    affiliates) a limited, non-exclusive and non-transferable
                    license during the Term to use the such party’s respective
                    Marks (as defined below), on a royalty-free basis, for the
                    sole purpose of performing the promotional activities as set
                    forth in an applicable Addendum. For purposes of this Terms,
                    the term <span className="bold">“Marks”</span> will mean the
                    trademarks, service marks, trade names, copyrights, logos,
                    slogans and other identifying symbols and indicia of the
                    applicable party. All uses of a party’s marks by the other
                    party will be in the form and format specified or approved
                    by the owner of such marks. Except as expressly set forth
                    herein, neither party will use the other party’s marks
                    without the prior, express, written consent of the other
                    party. All goodwill related to the use of a party’s marks by
                    the other party shall inure to the benefit of the owner of
                    such marks. Except as expressly set forth herein, neither
                    party shall be deemed to grant the other party any license
                    or rights under any intellectual property or other
                    proprietary rights.
                  </li>
                  <li>
                    <span className="bold">6.c. Publicity.</span> Except as may
                    be expressly set forth in this Terms or an applicable
                    Addendum, neither party may issue a press release or
                    otherwise refer to the other party in any manner with
                    respect to this Terms or otherwise, without the prior
                    written consent of such other party.
                  </li>
                  <li>
                    <span className="bold">6.d. Privacy.</span>{" "}
                    <span className="bold">“Personal Data”</span> means any
                    information obtained in connection with this Terms (a)
                    relating to an identified or identifiable natural person;
                    (b) that can reasonably be used to identify or authenticate
                    an individual, including but not limited to name, contact
                    information, precise location information, persistent
                    identifiers; and (c) any information that may otherwise be
                    considered <span className="bold">“personal data”</span> or{" "}
                    <span className="bold">“personal information”</span> under
                    the applicable law. Restaurant agrees to use, disclose,
                    store, retain or otherwise process Personal Data solely for
                    the purpose of performing the services contemplated by this
                    Terms. Restaurant shall maintain the accuracy and integrity
                    of any Personal Data provided by Kartzo in its possession,
                    custody or control. Restaurant agrees to retain Personal
                    Data provided to Restaurant by Kartzo solely by using the
                    software and tools provided by Kartzo.
                  </li>
                </ul>

                <h2 className="title-small light">7. Non-Exclusive</h2>

                <p>
                  We each acknowledge and agree that, unless otherwise stated in
                  a Letter/Addendum, our relationship is non-exclusive.
                </p>

                <h2 className="title-small light">
                  8. Confidential Information
                </h2>

                <p>
                  <span className="bold">“Confidential Information”</span> means
                  any confidential, proprietary or other non-public information
                  disclosed by one party (the{" "}
                  <span className="bold">“Discloser”</span>) to the other (the{" "}
                  <span className="bold">“Recipient”</span>), whether disclosed
                  verbally, in writing, or by inspection of tangible objects.
                  Confidential Information will not include that information
                  that (a) was previously known to the Recipient without an
                  obligation of confidentiality; (b) was acquired by the
                  Recipient without any obligation of confidentiality from a
                  third party with the right to make such disclosure; or (c) is
                  or becomes publicly available through no fault of the
                  Recipient. Each Recipient agrees that it will not disclose to
                  any third parties, or use in any way other than as necessary
                  to perform this Terms, the Discloser’s Confidential
                  Information. Each Recipient will ensure that Confidential
                  Information will only be made available to those of its
                  employees and agents who have a need to know such Confidential
                  Information and who are be bound by written obligations of
                  confidentiality at least as protective of the Discloser as
                  this Terms before such individual has access to the
                  Discloser’s Confidential Information. Each Recipient will not,
                  and will not authorize others to, remove, overprint or deface
                  any notice of copyright, trademark, logo, legend, or other
                  notices of ownership from any originals or copies of the
                  Discloser’s Confidential Information. The foregoing
                  prohibition on disclosure of Confidential Information will not
                  apply to the extent the Discloser has authorized such
                  disclosure, nor to the extent a Recipient is required to
                  disclose certain Confidential Information of the Discloser as
                  a legal obligation based on the applicable laws and
                  regulations or order of a court, provided that the Recipient
                  gives the Discloser prior written notice of such obligation to
                  disclose and reasonably assist in filing petition of objection
                  etc. prior to making such disclosure. Upon expiration or
                  termination of this Terms and as requested by a Discloser,
                  each Recipient will deliver to the Discloser (or destroy at
                  the Discloser’s election) any and all materials or documents
                  containing the Discloser’s Confidential Information, together
                  with all copies thereof in whatever form.
                </p>

                <h2 className="title-small light">
                  9. Representations and Warranties; Disclaimer
                </h2>

                <ul>
                  <li>
                    <span className="bold">9.a.</span> Each party hereby
                    represents and warrants that: (a) it has full power and
                    authority to enter into this Terms and perform its
                    obligations hereunder; (b) it is duly organized, validly
                    existing and in good standing under the laws of the
                    jurisdiction of its origin; (c) it has not entered into, and
                    during the Term (as defined below) will not enter into, any
                    Terms that would prevent it from complying with or
                    performing under this Terms (in your case, including without
                    limitation, any exclusive Terms with any third parties for
                    the availability of food via a technology platform); and (d)
                    the content, media and other materials used or provided as
                    part of this Terms shall not infringe or otherwise violate
                    the intellectual property rights, rights of publicity or
                    other proprietary rights of any third party.
                  </li>
                  <li>
                    <span className="bold">9.b.</span> The Restaurant further
                    represents and warrants that it will comply with all
                    applicable laws and regulations in its performance of this
                    Terms including, but not limited to, the Food Safety &amp;
                    Standards Act, 2006 and rules and regulations made
                    thereunder, its engagement of Delivery Partners.
                  </li>
                  <li>
                    <span className="bold">9.c.</span> The Restaurant further
                    represents and warrants that the details of the tax
                    registrations provided by the Restaurant and Indirect tax to
                    be levied on each meal to be made available for sale via the
                    Kartzo App is as per{" "}
                    <span className="bold">Addendum II</span>, forming integral
                    part of this Terms. The Restaurant further confirms and
                    declares that the information provided in{" "}
                    <span className="bold">Addendum II</span> and the copies of
                    tax registrations, are true and correct, and assumes
                    responsibility to intimate Kartzo in case of any change in
                    the provided information. The Restaurant undertakes that all
                    Indirect Tax applied on each Meal and Delivery made
                    available for sale via the Kartzo App would be deposited
                    with the Government Treasury within stipulated timelines.
                  </li>
                  <li>
                    <span className="bold">9.d.</span> EXCEPT AS SET FORTH
                    HEREIN, EACH PARTY MAKES NO REPRESENTATIONS, AND HEREBY
                    EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
                    REGARDING ITS SERVICES OR PRODUCTS OR PURPOSE OF THIS TERMS.
                  </li>
                </ul>

                <h2 className="title-small light">10. Indemnification</h2>

                <ul>
                  <li>
                    <span className="bold">10.a. Indemnified Claims.</span> Each
                    party (the{" "}
                    <span className="bold">“Indemnifying Party”</span>) will
                    indemnify, defend and hold harmless the other party, its
                    affiliates and their respective directors, officers,
                    employees and agents (the{" "}
                    <span className="bold">“Indemnified Party”</span>) from and
                    against any and all claims, damages, losses and expenses
                    (including reasonable attorney’s fees) (collectively,{" "}
                    <span className="bold">“Losses”</span>) with respect to any
                    third party claim arising out of or related to: (a) the
                    negligence or wilful misconduct of the Indemnifying Party
                    and its employees or agents (in your case, excluding Kartzo
                    and Delivery Partners to the extent they are your agents
                    pursuant to Section 3) in their performance of this Terms;
                    (b) any claims that the Indemnifying Party breached its
                    representations and warranties in this Terms; (c) any claims
                    that the Indemnifying Party’s Marks infringe a third party’s
                    intellectual property rights, as long as such Marks have
                    been used in the manner approved by the Indemnifying Party;
                    or (d) any breach and/or non-compliance with applicable data
                    protection laws. In addition, you will indemnify, defend and
                    hold harmless the Kartzo Indemnified Parties from and
                    against any and all Losses with respect to any third-party
                    claim arising out of or related to any harm resulting from
                    your violation or alleged violation of any applicable retail
                    food or other health and safety code, rule or regulation,
                    except to the extent such harm was directly caused by the
                    gross negligence or wilful misconduct of Kartzo or its
                    employees, agents or Delivery Partners.
                  </li>
                  <li>
                    <span className="bold">10.b. Procedure.</span> Each
                    Indemnified Party shall provide prompt notice to the
                    Indemnifying Party of any potential claim subject to
                    indemnification hereunder. The Indemnifying Party will
                    assume the defense of the claim through counsel designated
                    by it and reasonably acceptable to the Indemnified Party.
                    The Indemnifying Party will not settle or compromise any
                    claim, without written consent of the Indemnified Party,
                    which will not be unreasonably withheld. The Indemnified
                    Party will reasonably cooperate with the Indemnifying Party
                    in the defense of a claim, at Indemnifying Party’s expense.
                  </li>
                </ul>

                <h2 className="title-small light">11. Limits of Liability</h2>

                <p>
                  For the purposes of this clause,{" "}
                  <span className="bold">“Liability”</span> means liability in
                  or for breach of contract, negligence, misrepresentation,
                  tortious claim, restitution or any other cause of action
                  whatsoever relating to or arising under or in connection with
                  these Terms, including liability expressly provided for under
                  these Terms or arising by reason of the invalidity or
                  unenforceability of any term under this contract. Kartzo does
                  not exclude or limit Liability for any Liability that cannot
                  be excluded by law. Subject to the preceding sentence, Kartzo
                  shall not be under any Liability for loss of actual or
                  anticipated profits, loss of goodwill, loss of business, loss
                  of revenue or of the use of money, loss of contracts, loss of
                  anticipated savings, loss of data and/or undertaking the
                  restoration of data, fraudulent orders, any special, indirect
                  or consequential loss, and such liability is excluded whether
                  it is foreseeable, known, foreseen or otherwise. For the
                  avoidance of any doubt, this clause shall apply whether such
                  damage or loss is direct, indirect, consequential or
                  otherwise. However, Kartzo will use its best endeavors to
                  ensure that the unintentional operational errors do not occur,
                  Kartzo cannot provide any warranty or guarantee in this
                  regard. Notwithstanding anything to the contrary herein set
                  out, Kartzo’s aggregate liability under this Agreement and
                  respective Terms of Use shall not exceed the total value of a
                  Disputed Order.
                </p>

                <h2 className="title-small light">12. Insurance</h2>

                <p>
                  During the Term (as defined below) and for one (1) year
                  thereafter, the Restaurant shall maintain General Commercial
                  Liability and, if required by law, Worker’s Compensation (or
                  substantially equivalent) insurance. The General Commercial
                  Liability insurance policy limits shall be the greater of (a)
                  the limits required by applicable law or (b) the limits
                  customarily maintained by companies in the restaurant
                  industry, in India. All policies shall be written by reputable
                  insurance companies in the jurisdiction. Such insurance shall
                  be primary and non-contributing to any insurance maintained or
                  obtained by the other party and shall not be cancelled or
                  materially reduced without thirty (30) days’ prior written
                  notice to the other party. Upon Kartzo’s request, the
                  Restaurant shall provide evidence of the insurance required
                  herein. In no event shall the limits of any policy be
                  considered as limiting the liability of a Restaurant under the
                  Terms.
                </p>

                <h2 className="title-small light">13. Term and Termination</h2>

                <p>
                  Either Kartzo or the Restaurant Partner can terminate this
                  contract providing 15 days’ prior written notice to the other.
                  Kartzo shall delist the Restaurant Partner at the end of the
                  15th Day. Upon termination in accordance with the terms
                  hereof, Restaurant Partner shall only be required to service
                  Meal(s) already placed through Kartzo prior to such expiry or
                  earlier termination of these Terms, and Kartzo shall be
                  entitled to receive Service Fee for such Meal(s).
                </p>

                <h2 className="title-small light">14. No Waiver</h2>

                <p>
                  No failure or delay by any Party in exercising any right,
                  power or remedy under these Terms of Use or provided by law
                  shall operate as a waiver thereof or affect that right, power
                  or remedy. No waiver by any Party of any breach by any other
                  Party of any provision hereof shall be deemed to be a waiver
                  of any subsequent breach of that or any other provision
                  hereof.
                </p>

                <h2 className="title-small light">15. Relationship</h2>

                <p>
                  The Parties agree that nothing in this Terms shall be
                  construed as creating the relationship of employer and
                  employee, master and servant, or principal and agent, or a
                  partnership, or a joint venture of any kind whatsoever between
                  the Parties or between the parties and its respective
                  contractors / employees.
                </p>

                <h2 className="title-small light">16. Governing Law</h2>

                <p>
                  This Terms of Use shall be governed by and construed in
                  accordance with the laws of India. Any dispute arising out of
                  or in connection with Services, which the Parties are unable
                  to settle within 30 days, shall be referred to arbitration by
                  a sole arbitrator appointed mutually by both Parties. The
                  Arbitration shall be conducted in accordance with Arbitration
                  and Conciliation Act, 1996 or any statutory re-enactment or
                  modification thereof for the time being in force. The venue of
                  the arbitration shall be Bengaluru and the arbitration shall
                  be conducted in English language. Subject to the foregoing,
                  the courts at Bengaluru shall have exclusive jurisdiction.
                </p>

                <h2 className="title-small light">17. Severability</h2>

                <p>
                  If any provision of these Terms of Use is held by a court of
                  competent jurisdiction to be invalid or unenforceable, the
                  remainder of the Terms of Use which can be given effect
                  without the invalid provision shall continue in full force and
                  effect and shall in no way be impaired or invalidated.
                </p>

                <h2 className="title-small light">18. Notice</h2>

                <ul>
                  <li>
                    All notices under these Terms shall be sent by registered
                    post acknowledgment due, contemporaneous courier or email to
                    the address mentioned below:
                  </li>
                  <li>
                    <span className="bold">
                      Kartzo Digital Private Limited{" "}
                    </span>{" "}
                    <br />
                    Reg Office: 457, 10th Main Road, 2nd Stage, HAL 2nd Stage,
                    Indiranagar, Bengaluru, Karnataka 560038
                  </li>
                </ul>

                <h2 className="title-small light">19.</h2>

                <p>
                  If the Restaurant Partner notices any discrepancy in the
                  weekly settlement, the Restaurant Partner may raise a ticket
                  by writing an email to{" "}
                  <i>
                    <u>merchantsupport@Kartzo.in</u>
                  </i>{" "}
                  and the same will be mutually resolved by both parties within
                  15 days from the date on which the ticket was raised.
                </p>

                <h2 className="title-small light">20.</h2>

                <p>
                  The failure of either party to enforce, at any time or for any
                  period of time, the provisions hereof, or the failure of
                  either party to exercise any option herein, shall not be
                  construed as a waiver of such provision or option and shall in
                  no way affect that party’s right to enforce such provisions or
                  exercise such option.
                </p>

                <h2 className="title-small light">21.</h2>

                <p>
                  Any modification or amendment to this Terms shall be effective
                  only if in writing and signed or sealed with print name by
                  both parties. In the event any provision of this Terms is
                  determined to be invalid or unenforceable by ruling of an
                  arbitrator or court of competent jurisdiction, the remainder
                  of this Terms and each of the remaining terms and conditions
                  contained herein) shall remain in full force and effect.
                </p>

                <h2 className="title-small light">22.</h2>

                <p>
                  Any delay in or failure by either party in performance of this
                  Terms shall be excused if and to the extent such delay or
                  failure is caused by occurrences beyond the control of the
                  affected party including, but not limited to, decrees or
                  restraints of Government, acts of God, strikes, work stoppage
                  or other labor disturbances, war or sabotage (each being a
                  “Force Majeure Event”). The affected party will promptly
                  notify the other party upon becoming aware that any Force
                  Majeure has occurred or is likely to occur and will use
                  commercially reasonable efforts to minimize any resulting
                  delay in or interference with the performance of its
                  obligations under this Terms. This Terms may not be assigned,
                  in whole or in part, by a party without the prior written
                  consent of the other party, provided that each party may
                  assign this Terms, upon notice to the other party, to (a) an
                  affiliate of Kartzo (for Kartzo), or (b) in connection with
                  the sale of all or substantially all of such party’s equity,
                  business or assets. Subject to the foregoing, this Terms shall
                  be binding upon and shall inure to the benefit of each party
                  hereto and its respective successors and assigns. Nothing in
                  this Terms shall be deemed to create any joint venture, joint
                  enterprise, or agency relationship among the parties (except
                  as specifically set forth in Section 3 above), and no party
                  shall have the right to enter into contracts on behalf of, to
                  legally bind, to incur debt on behalf of, or to otherwise
                  incur any liability or obligation on behalf of, the other
                  party hereto. Each party shall be solely responsible for its
                  employees and contractors used in connection with this Terms.
                  This Terms contains the full and complete understanding and
                  Terms between the parties relating to the subject matter
                  hereof and supersedes all prior and contemporary
                  understandings and Terms, whether oral or written, relating
                  such subject matter hereof. This Terms may be executed in one
                  or more counterparts and by exchange of electronically signed
                  counterparts transmitted by pdf format or exchange by
                  hard-copy, each of which shall be deemed an original and all
                  of which, when taken together, shall constitute one and the
                  same original instrument.
                </p>
              </div>

              <div>
                <h2 className="title-xsmall align-center">
                  <p className="mb-15">
                    <b>
                      <u>Addendum I</u>
                    </b>
                  </p>
                  <p>
                    <b>Special Terms</b>
                  </p>
                </h2>

                <h2 className="title-small light">1. Reporting</h2>

                <p>
                  Kartzo will give you information regarding the number of Meals
                  picked up by Delivery Partners and sold by you to the Users
                  pursuant to the Terms. The Restaurant Partner shall maintain
                  such documents to record the proof of delivery of product or
                  performance of service. Without prejudice to the generality of
                  the aforesaid, Restaurant shall routinely and at such time
                  intervals provide such reports and in such formats as may be
                  specified by the Company.
                </p>

                <h2 className="title-small light">2. Payment</h2>

                <ul>
                  <li>
                    <span className="bold">2.a. Service Fee.</span> In
                    consideration for Kartzo’s lead generation, demand
                    prediction, payment processing and other related services
                    provided via the Kartzo App under the Terms, Kartzo will
                    charge you a service fee, agreed under the Letter and
                    reiterated under the{" "}
                    <span className="bold">Addendum II</span> (exclusive of
                    Indirect Tax and withholding tax, if any) on Meal Value, as
                    defined under the Letter or (the{" "}
                    <span className="bold">“Service Fee”</span>). This Service
                    Fee is charged as consideration for expediting the Users’
                    orders via the Kartzo App.
                  </li>
                  <li>
                    <span className="bold">
                      2.b. Goods and services tax (“GST”).
                    </span>{" "}
                    Collection by Kartzo from Users on your behalf would be
                    subject to tax deduction or collection at source in
                    accordance with the applicable GST laws.
                  </li>
                  <li>
                    <span className="bold">2.c. Remittance.</span> Kartzo will
                    remit to you the total (i) Meal Payment (including any
                    Indirect Tax collected on your behalf but reduced by the
                    Service Fee, amounts remitted to Delivery Partners under
                    your instructions and tax deduction/ collection at source)
                    earned by you, (ii) less any refunds given to your customers
                    or Users (such final remitted amount being the{" "}
                    <span className="bold">“Meal Revenue”</span>).
                  </li>
                  <li>
                    <span className="bold">2.d.</span> Meal Revenue received by
                    Kartzo from the User on behalf of the Restaurant Partner
                    will be settled into the Restaurant Partner’s bank account,
                    details of which are set forth in{" "}
                    <span className="bold">
                      <u>Addendum II</u>
                    </span>
                    . Settlement of transaction payments shall be within the
                    time period as set forth by the guidelines of the Reserve
                    Bank of India, where applicable. The Restaurant Partner
                    agrees to provide such documents and information necessary
                    or as may be sought by a payment facilitator or bank to
                    enlist the Restaurant Partner as a payee of Kartzo. The
                    Restaurant Partner agrees that for this purpose, information
                    about and provided by the Restaurant Partner will be shared
                    with a payment facilitator or bank.
                  </li>
                </ul>

                <h2 className="title-small light">3. Restrictions</h2>

                <p>
                  Delivery Partners are independent service providers, and as
                  such, they reserve the right to refuse to accept any item for
                  delivery in their sole discretion. Any item that you do not
                  have permission or license to sell or deliver may not be sold
                  to Users.
                </p>
              </div>

              <div>
                <h2 className="title-xsmall align-center">
                  <p className="mb-15">
                    <b>
                      <u>ADDENDUM II</u>
                    </b>
                  </p>
                  <p>
                    <b>
                      <u>TAX DETAILS OF THE RESTAURANT/MERCHANT</u>
                    </b>
                  </p>
                </h2>

                <p>1. Details of Tax Registrations</p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Details of Registration</th>{" "}
                      <th>Registration Number</th>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Permanent Account Number</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Goods &amp; Service Tax Registration
                      </td> <td></td>{" "}
                    </tr>
                  </tbody>
                </table>

                <p>
                  2. Indirect Taxes to be levied on each Meal enlisted on the
                  Kartzo App
                </p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Nature of Tax</th> <th>Percentage Levy</th>
                    </tr>
                    <tr>
                      {" "}
                      <td>Service Tax</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Value Added Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Central Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>State Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Integrated Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  3. Other Charges to be levied on each Meal enlisted on the
                  Kartzo App
                </p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Nature of Charges</th> <th> Percentage / Amount </th>
                    </tr>
                    <tr>
                      {" "}
                      <td>Packaging Charges</td> <td></td>{" "}
                    </tr>
                  </tbody>
                </table>

                <h2 className="title-xsmall align-center">
                  <p>
                    <b>
                      <u>OTHER DETAILS</u>
                    </b>
                  </p>
                </h2>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <td>Name of Restaurant Partner </td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Effective Date</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Registered Address of the Restaurant Partner{" "}
                      </td>{" "}
                      <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Service Address, Email, Telephone numbers, User/Customer
                        Complaint Redressal Number
                      </td>{" "}
                      <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Restaurant Partner contact person</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Service Fee</td> <td>% of the Meal Value.</td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Mode of Payment Settlement</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Bank Account details of the Restaurant Partner{" "}
                      </td>{" "}
                      <td></td>{" "}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="petstoremerchant_terms" className="pv-20">
              <h2 className="title-small">
                Merchant (Pet Store) Partner Terms of Use
              </h2>
              <div>
                <p>
                  The Kartzo Master Framework Letter (
                  <span className="bold">“Letter”</span>) along with the
                  Merchant Partner Terms of Use (
                  <span className="bold">“Terms”</span>), represents and
                  confirms our mutual Terms with respect to the Merchant
                  Partner’s participation on the proprietary mobile platform
                  currently made available by Kartzo Digital Private Limited (
                  <span className="bold">“Kartzo” or “us”</span>) or its
                  affiliates, from time-to-time, and referred to as the “Kartzo
                  App”. Upon signing by both parties, the Letter and the Kartzo
                  Merchant Terms of Use binding and enforceable legal contract
                  between you and Kartzo as of the date set forth above (
                  <span className="bold">“Effective Date”</span>)
                </p>

                <p className="bold">The Terms with you are as follows:</p>

                <h2 className="title-small light">1. Structure of Terms</h2>

                <p>
                  Our Terms shall consist of this Letter, together with the
                  addenda (individually, an{" "}
                  <span className="bold">“Addendum”</span>) addressing areas of
                  collaboration agreed to by both of us (this Letter and any and
                  all such Addenda are collectively the{" "}
                  <span className="bold">“Terms”</span>). In connection with
                  each Addendum, we will designate those actions,
                  responsibilities and services to be respectively provided by
                  each of us. In the event of a conflict, the terms contained in
                  an Addendum will supersede conflicting terms contained in
                  these Terms.
                </p>

                <h2 className="title-small light">2. Intended Projects</h2>

                <p>
                  We each agree to work in good faith with one another on
                  certain collaborative projects, (as described below) or other
                  projects as we mutually agree, in connection with the item(s),
                  which include perishable/non-perishable goods including other
                  item(s) or accessories produced for pets made available [each
                  an <span className="bold">“Item(s)”</span>] via the Kartzo
                  App. Each project will be further specified in an Addendum,
                  and any such project will only be undertaken once we mutually
                  execute such Addendum.
                </p>

                <h2 className="title-small light">3.</h2>

                <p>
                  The suggested search term(s) or Merchant item(s) visible on
                  the Kartzo App is the general availability of Item(s) during
                  the Merchant’s normal business hours. The Merchant’s customers
                  (the <span className="bold">“Buyers”</span> and/or{" "}
                  <span className="bold">“Kartzo App Users”/” User(s)”</span>)
                  may select Item(s) from the displayed search
                  term(s)/listing(s) on the Kartzo App.
                </p>

                <h2 className="title-small light">4. Delivery</h2>

                <p>
                  The <span className="bold">“Kartzo Web Dashboard”</span> will
                  be made available to the Merchant to access on-demand logistic
                  services by Delivery Partners. For the sake of clarity,
                  neither Kartzo nor its affiliates provide any delivery or
                  logistics services, but Kartzo provides a platform for outlets
                  like yours to connect with Delivery Partners for delivery
                  services and to receive demand prediction, payment processing
                  and related information services in connection with the sale
                  of the Items. <span className="bold">“Delivery Partner”</span>{" "}
                  is defined as an independent contractor who intends to provide
                  on demand delivery services using Kartzo’s proprietary
                  technology platform under license from Kartzo or one of its
                  affiliates. Kartzo will not have any obligation to deliver the
                  Item(s) as a platform provider. For purposes of delivery of
                  the Items, Kartzo and the Delivery Partners shall operate (i)
                  under cover of any approval, license or permission required to
                  operate your business at the Merchant Outlet and sell the
                  Item(s) and (ii) under your control, as your agent (including
                  but not limited to receipt agent of Item charges and based on
                  your instructions, if applicable, apply the Item charges
                  collected on your behalf towards disbursal of the fee payable
                  by you to Delivery Partner), and not employee. For the sake of
                  clarity, you, through the services provided by Delivery
                  Partners, are responsible for the delivery of Items and you
                  maintain possession, control and care of the Items at all
                  times. You shall have marketable legal right and title to sell
                  the products or render the services. You shall not offer any
                  products or services which are illegal, unlawful, expired and
                  in violation of applicable laws and policies. Kartzo will not
                  be liable for any damage or loss incurred by the Users in
                  relation to the delivery of the Items and will follow
                  reasonable guidance you provide regarding the delivery of the
                  Items.
                </p>

                <h2 className="title-small light">
                  5. Availability of Item(s)
                </h2>

                <ul>
                  <li>
                    <span className="bold">5.a. Item(s).</span> Kartzo will
                    provide you reasonable advice regarding demand prediction,
                    which you may use in connection with your determination of
                    the quantity and type of Items made available via the Kartzo
                    App. You are fully responsible for quality, safety and
                    delivery of the Items and you shall adhere to all applicable
                    laws and regulations in relation to the preparation,
                    provision, packaging and delivery of the Items. You will
                    determine any quality, portion, size, ingredient or other
                    criteria (including those of laws and regulations) that
                    apply to the Items (<span className="bold">“Criteria”</span>
                    ) and you are solely responsible for ensuring that the Items
                    meet such criteria when then are made available via the
                    Kartzo App. In the event of failing to provide Items that
                    adhere to the Criteria (each, a{" "}
                    <span className="bold">“Substandard Item”</span>), Kartzo is
                    under no obligation to make such Substandard Items available
                    for sale via the Kartzo App.
                  </li>
                  <li>
                    <span className="bold">5.b. Taxes.</span> You are
                    responsible for determining and setting the retail price (
                    <span className="bold">“Retail Price”</span>) for each Item
                    and duly informing Kartzo from time to time, including any
                    Item discount(s)/discounts on offer from time to time. You
                    shall be the “retailer” or{" "}
                    <span className="bold">“seller”</span> of all Items for the
                    purpose of any indirect tax (such as value added tax, sales
                    tax, service tax, goods and services tax) (
                    <span className="bold">“Indirect Tax”</span>) and the
                    responsible party for collection and remittance of
                    applicable Indirect Tax. For the sake of clarity, the Retail
                    Price for each Item shall include Indirect Tax, as
                    applicable. You undertake that all applicable taxes on
                    item(s) &amp; delivery would be deposited by you with the
                    government treasury within stipulated timelines. Except as
                    may be expressly agreed in this Terms, each party shall be
                    responsible for its expenses and costs during its
                    performance under this Terms.
                  </li>
                  <li>
                    <span className="bold">5.c. Item Inventory.</span> You
                    maintain title to all Item inventory until each Item is
                    delivered to a User. You are responsible for the costs of
                    all Items. Whenever a User wishes to avail Items or Service
                    as identified by the App, Kartzo will notify the Merchant
                    Partner of the specifications and particulars of the order
                    as is received from the User. Upon receipt of an order
                    request from a User, the Merchant Partner shall keep ready
                    the product or provide any service as required by the User.
                    In the event the specifications are not sufficient for the
                    Merchant Partner to process any order, the Merchant Partner
                    must seek further information as required.
                  </li>
                  <li>
                    <span className="bold">5.d.</span> Notwithstanding these
                    Terms, Kartzo reserves the right to temporarily discontinue
                    Services or permanently terminate with immediate effect for
                    material breach or non-compliance by the Merchant Partner
                    which includes, but is not limited to, the following
                    instances:
                    <ul>
                      <li>
                        (i). User/Buyer complaints received by Kartzo which are
                        directly or indirectly attributable to the quality of
                        item(s) provided by the Merchant Partner either through
                        poor ratings, as defined by Kartzo, through calls placed
                        with Kartzo or through any other means;
                      </li>
                      <li>
                        (ii). Breach of the provisions of the Prevention of
                        Cruelty to Animals Act, 1960 and and the rules and
                        regulations, made thereunder, by Merchant Partner;
                      </li>
                      <li>
                        (iii). Breach of the representations and warranties of
                        the Merchant Partner; or
                      </li>
                      <li>(iv). Any other material breach of the terms.</li>
                      <li>
                        Notwithstanding anything contained under this Terms,
                        Kartzo has the right to immediately delist any of the
                        item(s) from the Platform, which is not in compliance
                        with the Prevention of Cruelty to Animals Act, 1960 or
                        the rules or regulations, made thereunder.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="bold">5.e.</span> You are responsible for
                    costs related to reimbursement to the Users in the event
                    Users have either refused to pay for or have claimed partial
                    or full refund, as applicable, for reasons that are
                    attributable to Merchant Partner, including but not limited
                    to, User’s expectations not being met or User
                    dissatisfaction in relation to, <i>inter alia</i>, the
                    quality of the Item(s), undelivered Item(s), discrepancy in
                    the Item(s) delivered which is not in accordance with the
                    Item placed and/or those Item(s) for which User requests for
                    a replacement. (
                    <span className="bold">“Disputed Orders”</span>) Any such
                    User(s) request a refund for any Item(s) (including, without
                    limitation, any costs associated with retrieving any such
                    Item(s), if applicable), for reasons that are considered by
                    Kartzo in its sole discretion as reasonable, for (i) request
                    by the Users of refund or (ii) acceptance by the Delivery
                    Partner of the request. Kartzo may deduct refunds from the
                    payment made to you under these Terms.
                  </li>
                  <li>
                    <span className="bold">5.f.</span> It is clarified that
                    Kartzo shall not be liable to make any payment for a
                    Disputed Order. Kartzo shall reserve the right to recover
                    from Merchant Partner, the amount paid to Users/Buyers as
                    refund upto the order value.
                  </li>
                  <li>
                    <span className="bold">5.g.</span> In case of complaints
                    from the User pertaining to item quality, or any other such
                    issues, Kartzo shall notify the same to Merchant Partner and
                    shall also redirect the Buyer to the consumer call center of
                    the Merchant. Merchant Partner shall alone be liable for
                    redressing and bound to take action on the complaints by the
                    User. Kartzo has the right to share with the Merchant
                    Partner, the relevant information including the Merchant
                    details to enable satisfactory resolution of the complaint.
                    Kartzo shall in the interest of satisfactory resolution of
                    the Complaint, share with the User, relevant information
                    pertaining to the Order along with Merchant details.
                  </li>
                  <li>
                    <span className="bold">5.h. Service Fee.</span> In
                    consideration for use of the Kartzo App, Kartzo will charge
                    you a service fee as specifically set forth on each
                    applicable Addendum as well as the Letter. All fees under
                    these Terms shall be paid in Indian Rupees and are exclusive
                    of any taxes, including Indirect Tax and withholding tax, if
                    applicable.
                  </li>
                  <li>
                    <span className="bold">5.i.</span> Kartzo does not guarantee
                    that you will be matched with the Delivery Partner at the
                    time you wish to be matched. Kartzo shall not be liable for
                    any failure to match.
                  </li>
                </ul>

                <h2 className="title-small light">6. Promotional Activities</h2>

                <ul>
                  <li>
                    <span className="bold">6.a. Marketing.</span> Kartzo will
                    each showcase the availability of the Items via the Kartzo
                    App through various promotional activities (e.g., our
                    respective social media channels, websites, or blogs), as
                    mutually agreed.
                  </li>
                  <li>
                    <span className="bold">6.b. Marks.</span> Subject to the
                    terms and conditions of this Terms, each party hereby grants
                    to the other party (and, in the case of Kartzo, to its
                    affiliates) a limited, non-exclusive and non-transferable
                    license during the Term to use the such party’s respective
                    Marks (as defined below), on a royalty-free basis, for the
                    sole purpose of performing the promotional activities as set
                    forth in an applicable Addendum. For purposes of this Terms,
                    the term <span className="bold">“Marks”</span> will mean the
                    trademarks, service marks, trade names, copyrights, logos,
                    slogans and other identifying symbols and indicia of the
                    applicable party. All uses of a party’s marks by the other
                    party will be in the form and format specified or approved
                    by the owner of such marks. Except as expressly set forth
                    herein, neither party will use the other party’s marks
                    without the prior, express, written consent of the other
                    party. All goodwill related to the use of a party’s marks by
                    the other party shall inure to the benefit of the owner of
                    such marks. Except as expressly set forth herein, neither
                    party shall be deemed to grant the other party any license
                    or rights under any intellectual property or other
                    proprietary rights.
                  </li>
                  <li>
                    <span className="bold">6.c. Publicity.</span> Except as may
                    be expressly set forth in this Terms or an applicable
                    Addendum, neither party may issue a press release or
                    otherwise refer to the other party in any manner with
                    respect to this Terms or otherwise, without the prior
                    written consent of such other party.
                  </li>
                  <li>
                    <span className="bold">6.d. Privacy.</span>{" "}
                    <span className="bold">“Personal Data”</span> means any
                    information obtained in connection with this Terms (a)
                    relating to an identified or identifiable natural person;
                    (b) that can reasonably be used to identify or authenticate
                    an individual, including but not limited to name, contact
                    information, precise location information, persistent
                    identifiers; and (c) any information that may otherwise be
                    considered <span className="bold">“personal data”</span> or{" "}
                    <span className="bold">“personal information”</span> under
                    the applicable law. Merchant agrees to use, disclose, store,
                    retain or otherwise process Personal Data solely for the
                    purpose of performing the services contemplated by this
                    Terms. Merchant shall maintain the accuracy and integrity of
                    any Personal Data provided by Kartzo in its possession,
                    custody or control. Merchant agrees to retain Personal Data
                    provided to Merchant by Kartzo solely by using the software
                    and tools provided by Kartzo.
                  </li>
                </ul>

                <h2 className="title-small light">7. Non-Exclusive</h2>

                <p>
                  We each acknowledge and agree that, unless otherwise stated in
                  a Letter/Addendum, our relationship is non-exclusive.
                </p>

                <h2 className="title-small light">
                  8. Confidential Information
                </h2>

                <p>
                  <span className="bold">“Confidential Information”</span> means
                  any confidential, proprietary or other non-public information
                  disclosed by one party (the{" "}
                  <span className="bold">“Discloser”</span>) to the other (the{" "}
                  <span className="bold">“Recipient”</span>), whether disclosed
                  verbally, in writing, or by inspection of tangible objects.
                  Confidential Information will not include that information
                  that (a) was previously known to the Recipient without an
                  obligation of confidentiality; (b) was acquired by the
                  Recipient without any obligation of confidentiality from a
                  third party with the right to make such disclosure; or (c) is
                  or becomes publicly available through no fault of the
                  Recipient. Each Recipient agrees that it will not disclose to
                  any third parties, or use in any way other than as necessary
                  to perform this Terms, the Discloser’s Confidential
                  Information. Each Recipient will ensure that Confidential
                  Information will only be made available to those of its
                  employees and agents who have a need to know such Confidential
                  Information and who are be bound by written obligations of
                  confidentiality at least as protective of the Discloser as
                  this Terms before such individual has access to the
                  Discloser’s Confidential Information. Each Recipient will not,
                  and will not authorize others to, remove, overprint or deface
                  any notice of copyright, trademark, logo, legend, or other
                  notices of ownership from any originals or copies of the
                  Discloser’s Confidential Information. The foregoing
                  prohibition on disclosure of Confidential Information will not
                  apply to the extent the Discloser has authorized such
                  disclosure, nor to the extent a Recipient is required to
                  disclose certain Confidential Information of the Discloser as
                  a legal obligation based on the applicable laws and
                  regulations or order of a court, provided that the Recipient
                  gives the Discloser prior written notice of such obligation to
                  disclose and reasonably assist in filing petition of objection
                  etc. prior to making such disclosure. Upon expiration or
                  termination of this Terms and as requested by a Discloser,
                  each Recipient will deliver to the Discloser (or destroy at
                  the Discloser’s election) any and all materials or documents
                  containing the Discloser’s Confidential Information, together
                  with all copies thereof in whatever form.
                </p>

                <h2 className="title-small light">
                  9. Representations and Warranties; Disclaimer
                </h2>

                <ul>
                  <li>
                    <span className="bold">9.a.</span> Each party hereby
                    represents and warrants that: (a) it has full power and
                    authority to enter into this Terms and perform its
                    obligations hereunder; (b) it is duly organized, validly
                    existing and in good standing under the laws of the
                    jurisdiction of its origin; (c) it has not entered into, and
                    during the Term (as defined below) will not enter into, any
                    Terms that would prevent it from complying with or
                    performing under this Terms (in your case, including without
                    limitation, any exclusive Terms with any third parties for
                    the availability of item via a technology platform); and (d)
                    the content, media and other materials used or provided as
                    part of this Terms shall not infringe or otherwise violate
                    the intellectual property rights, rights of publicity or
                    other proprietary rights of any third party.
                  </li>
                  <li>
                    <span className="bold">9.b.</span> The Merchant further
                    represents and warrants that it will comply with all
                    applicable laws and regulations in its performance of this
                    Terms including, but not limited to, the Prevention of
                    Cruelty to Animals Act, 1960 and rules and regulations made
                    thereunder, including any law applicable to its engagement
                    of Delivery Partners.
                  </li>
                  <li>
                    <span className="bold">9.c.</span> The Merchant further
                    represents and warrants that the details of the tax
                    registrations provided by the Merchant and Indirect tax to
                    be levied on each item to be made available for sale via the
                    Kartzo App is as per Addendum II, forming integral part of
                    this Terms. The Merchant further confirms and declares that
                    the information provided in Addendum II and the copies of
                    tax registrations, are true and correct, and assumes
                    responsibility to intimate Kartzo in case of any change in
                    the provided information. The Merchant undertakes that all
                    Indirect Tax applied on each Item and Delivery made
                    available for sale via the Kartzo App would be deposited
                    with the Government Treasury within stipulated timelines.
                  </li>
                  <li>
                    <span className="bold">9.d.</span> EXCEPT AS SET FORTH
                    HEREIN, EACH PARTY MAKES NO REPRESENTATIONS, AND HEREBY
                    EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
                    REGARDING ITS SERVICES OR PRODUCTS OR PURPOSE OF THIS TERMS.
                  </li>
                </ul>

                <h2 className="title-small light">10. Indemnification</h2>

                <ul>
                  <li>
                    <span className="bold">10.a. Indemnified Claims.</span> Each
                    party (the{" "}
                    <span className="bold">“Indemnifying Party”</span>) will
                    indemnify, defend and hold harmless the other party, its
                    affiliates and their respective directors, officers,
                    employees and agents (the{" "}
                    <span className="bold">“Indemnified Party”</span>) from and
                    against any and all claims, damages, losses and expenses
                    (including reasonable attorney’s fees) (collectively,{" "}
                    <span className="bold">“Losses”</span>) with respect to any
                    third party claim arising out of or related to: (a) the
                    negligence or wilful misconduct of the Indemnifying Party
                    and its employees or agents (in your case, excluding Kartzo
                    and Delivery Partners to the extent they are your agents
                    pursuant to Section 3) in their performance of this Terms;
                    (b) any claims that the Indemnifying Party breached its
                    representations and warranties in this Terms; (c) any claims
                    that the Indemnifying Party’s Marks infringe a third party’s
                    intellectual property rights, as long as such Marks have
                    been used in the manner approved by the Indemnifying Party;
                    or (d) any breach and/or non-compliance with applicable data
                    protection laws. In addition, you will indemnify, defend and
                    hold harmless the Kartzo Indemnified Parties from and
                    against any and all Losses with respect to any third-party
                    claim arising out of or related to any harm resulting from
                    your violation or alleged violation of any applicable retail
                    or other health and safety code, rule or regulation, except
                    to the extent such harm was directly caused by the gross
                    negligence or wilful misconduct of Kartzo or its employees,
                    agents or Delivery Partners.
                  </li>
                  <li>
                    <span className="bold">10.b. Procedure.</span> Each
                    Indemnified Party shall provide prompt notice to the
                    Indemnifying Party of any potential claim subject to
                    indemnification hereunder. The Indemnifying Party will
                    assume the defense of the claim through counsel designated
                    by it and reasonably acceptable to the Indemnified Party.
                    The Indemnifying Party will not settle or compromise any
                    claim, without written consent of the Indemnified Party,
                    which will not be unreasonably withheld. The Indemnified
                    Party will reasonably cooperate with the Indemnifying Party
                    in the defense of a claim, at Indemnifying Party’s expense.
                  </li>
                </ul>

                <h2 className="title-small light">11. Limits of Liability</h2>

                <p>
                  For the purposes of this clause,{" "}
                  <span className="bold">“Liability”</span> means liability in
                  or for breach of contract, negligence, misrepresentation,
                  tortious claim, restitution or any other cause of action
                  whatsoever relating to or arising under or in connection with
                  these Terms, including liability expressly provided for under
                  these Terms or arising by reason of the invalidity or
                  unenforceability of any term under this contract. Kartzo does
                  not exclude or limit Liability for any Liability that cannot
                  be excluded by law. Subject to the preceding sentence, Kartzo
                  shall not be under any Liability for loss of actual or
                  anticipated profits, loss of goodwill, loss of business, loss
                  of revenue or of the use of money, loss of contracts, loss of
                  anticipated savings, loss of data and/or undertaking the
                  restoration of data, fraudulent orders, any special, indirect
                  or consequential loss, and such liability is excluded whether
                  it is foreseeable, known, foreseen or otherwise. For the
                  avoidance of any doubt, this clause shall apply whether such
                  damage or loss is direct, indirect, consequential or
                  otherwise. However, Kartzo will use its best endeavors to
                  ensure that the unintentional operational errors do not occur,
                  Kartzo cannot provide any warranty or guarantee in this
                  regard. Notwithstanding anything to the contrary herein set
                  out, Kartzo’s aggregate liability under this Agreement and
                  respective Terms of Use shall not exceed the total value of a
                  Disputed Order.
                </p>

                <h2 className="title-small light">12. Insurance</h2>

                <p>
                  During the Term (as defined below) and for one (1) year
                  thereafter, the Merchant shall maintain General Commercial
                  Liability and, if required by law, Worker’s Compensation (or
                  substantially equivalent) insurance. The General Commercial
                  Liability insurance policy limits shall be the greater of (a)
                  the limits required by applicable law or (b) the limits
                  customarily maintained by companies in the merchant’s
                  industry, in India. All policies shall be written by reputable
                  insurance companies in the jurisdiction. Such insurance shall
                  be primary and non-contributing to any insurance maintained or
                  obtained by the other party and shall not be cancelled or
                  materially reduced without thirty (30) days’ prior written
                  notice to the other party. Upon Kartzo’s request, the Merchant
                  shall provide evidence of the insurance required herein. In no
                  event shall the limits of any policy be considered as limiting
                  the liability of a Merchant under the Terms.
                </p>

                <h2 className="title-small light">13. Term and Termination</h2>

                <p>
                  Either Kartzo or the Merchant Partner can terminate this
                  contract providing 15 days’ prior written notice to the other.
                  Kartzo shall delist the Merchant Partner at the end of the
                  15th Day. Upon termination in accordance with the terms
                  hereof, Merchant Partner shall only be required to service
                  Item(s) already placed through Kartzo prior to such expiry or
                  earlier termination of these Terms, and Kartzo shall be
                  entitled to receive Service Fee for such Item(s).
                </p>

                <h2 className="title-small light">14. No Waiver</h2>

                <p>
                  No failure or delay by any Party in exercising any right,
                  power or remedy under these Terms of Use or provided by law
                  shall operate as a waiver thereof or affect that right, power
                  or remedy. No waiver by any Party of any breach by any other
                  Party of any provision hereof shall be deemed to be a waiver
                  of any subsequent breach of that or any other provision
                  hereof.
                </p>

                <h2 className="title-small light">15. Relationship</h2>

                <p>
                  The Parties agree that nothing in this Terms shall be
                  construed as creating the relationship of employer and
                  employee, master and servant, or principal and agent, or a
                  partnership, or a joint venture of any kind whatsoever between
                  the Parties or between the parties and its respective
                  contractors / employees.
                </p>

                <h2 className="title-small light">16. Governing Law</h2>

                <p>
                  This Terms of Use shall be governed by and construed in
                  accordance with the laws of India. Any dispute arising out of
                  or in connection with Services, which the Parties are unable
                  to settle within 30 days, shall be referred to arbitration by
                  a sole arbitrator appointed mutually by both Parties. The
                  Arbitration shall be conducted in accordance with Arbitration
                  and Conciliation Act, 1996 or any statutory re-enactment or
                  modification thereof for the time being in force. The venue of
                  the arbitration shall be Bengaluru and the arbitration shall
                  be conducted in English language. Subject to the foregoing,
                  the courts at Bengaluru shall have exclusive jurisdiction.
                </p>

                <h2 className="title-small light">17. Severability</h2>

                <p>
                  If any provision of these Terms of Use is held by a court of
                  competent jurisdiction to be invalid or unenforceable, the
                  remainder of the Terms of Use which can be given effect
                  without the invalid provision shall continue in full force and
                  effect and shall in no way be impaired or invalidated.
                </p>

                <h2 className="title-small light">18. Notice</h2>

                <ul>
                  <li>
                    All notices under these Terms shall be sent by registered
                    post acknowledgment due, contemporaneous courier or email to
                    the address mentioned below:
                  </li>
                  <li>
                    <span className="bold">
                      Kartzo Digital Private Limited{" "}
                    </span>{" "}
                    <br />
                    Reg Office: 457, 10th Main Road, 2nd Stage, HAL 2nd Stage,
                    Indiranagar, Bengaluru, Karnataka 560038
                  </li>
                </ul>

                <h2 className="title-small light">19.</h2>

                <p>
                  If the Merchant Partner notices any discrepancy in the weekly
                  settlement, the Merchant Partner may raise a ticket by writing
                  an email to{" "}
                  <i>
                    <u>merchantsupport@Kartzo.in</u>
                  </i>{" "}
                  and the same will be mutually resolved by both parties within
                  15 days from the date on which the ticket was raised.
                </p>

                <h2 className="title-small light">20.</h2>

                <p>
                  The failure of either party to enforce, at any time or for any
                  period of time, the provisions hereof, or the failure of
                  either party to exercise any option herein, shall not be
                  construed as a waiver of such provision or option and shall in
                  no way affect that party’s right to enforce such provisions or
                  exercise such option.
                </p>

                <h2 className="title-small light">21.</h2>

                <p>
                  Any modification or amendment to this Terms shall be effective
                  only if in writing and signed or sealed with print name by
                  both parties. In the event any provision of this Terms is
                  determined to be invalid or unenforceable by ruling of an
                  arbitrator or court of competent jurisdiction, the remainder
                  of this Terms and each of the remaining terms and conditions
                  contained herein) shall remain in full force and effect.
                </p>

                <h2 className="title-small light">22.</h2>

                <p>
                  Any delay in or failure by either party in performance of this
                  Terms shall be excused if and to the extent such delay or
                  failure is caused by occurrences beyond the control of the
                  affected party including, but not limited to, decrees or
                  restraints of Government, acts of God, strikes, work stoppage
                  or other labor disturbances, war or sabotage (each being a
                  “Force Majeure Event”). The affected party will promptly
                  notify the other party upon becoming aware that any Force
                  Majeure has occurred or is likely to occur and will use
                  commercially reasonable efforts to minimize any resulting
                  delay in or interference with the performance of its
                  obligations under this Terms. This Terms may not be assigned,
                  in whole or in part, by a party without the prior written
                  consent of the other party, provided that each party may
                  assign this Terms, upon notice to the other party, to (a) an
                  affiliate of Kartzo (for Kartzo), or (b) in connection with
                  the sale of all or substantially all of such party’s equity,
                  business or assets. Subject to the foregoing, this Terms shall
                  be binding upon and shall inure to the benefit of each party
                  hereto and its respective successors and assigns. Nothing in
                  this Terms shall be deemed to create any joint venture, joint
                  enterprise, or agency relationship among the parties (except
                  as specifically set forth in Section 3 above), and no party
                  shall have the right to enter into contracts on behalf of, to
                  legally bind, to incur debt on behalf of, or to otherwise
                  incur any liability or obligation on behalf of, the other
                  party hereto. Each party shall be solely responsible for its
                  employees and contractors used in connection with this Terms.
                  This Terms contains the full and complete understanding and
                  Terms between the parties relating to the subject matter
                  hereof and supersedes all prior and contemporary
                  understandings and Terms, whether oral or written, relating
                  such subject matter hereof. This Terms may be executed in one
                  or more counterparts and by exchange of electronically signed
                  counterparts transmitted by pdf format or exchange by
                  hard-copy, each of which shall be deemed an original and all
                  of which, when taken together, shall constitute one and the
                  same original instrument.
                </p>
              </div>

              <div>
                <h2 className="title-xsmall align-center">
                  <p className="mb-15">
                    <b>
                      <u>Addendum I</u>
                    </b>
                  </p>
                  <p>
                    <b>Special Terms</b>
                  </p>
                </h2>

                <h2 className="title-small light">1. Reporting</h2>

                <p>
                  Kartzo will give you information regarding the number of Items
                  picked up by Delivery Partners and sold by you to the Users
                  pursuant to the Terms. The Merchant Partner shall maintain
                  such documents to record the proof of delivery of product or
                  performance of service. Without prejudice to the generality of
                  the aforesaid, Merchant shall routinely and at such time
                  intervals provide such reports and in such formats as may be
                  specified by the Company.
                </p>

                <h2 className="title-small light">2. Payment</h2>

                <ul>
                  <li>
                    <span className="bold">2.a. Service Fee.</span> In
                    consideration for Kartzo’s lead generation, demand
                    prediction, payment processing and other related services
                    provided via the Kartzo App under the Terms, Kartzo will
                    charge you a service fee, agreed under the Letter and
                    reiterated under the{" "}
                    <span className="bold">Addendum II</span> (exclusive of
                    Indirect Tax and withholding tax, if any) on Item Value, as
                    defined under the Letter or (the{" "}
                    <span className="bold">“Service Fee”</span>). This Service
                    Fee is charged as consideration for expediting the Users’
                    orders via the Kartzo App.
                  </li>
                  <li>
                    <span className="bold">
                      2.b. Goods and services tax (“GST”).
                    </span>{" "}
                    Collection by Kartzo from Users on your behalf would be
                    subject to tax deduction or collection at source in
                    accordance with the applicable GST laws.
                  </li>
                  <li>
                    <span className="bold">2.c. Remittance.</span> Kartzo will
                    remit to you the total (i) Item Payment (including any
                    Indirect Tax collected on your behalf but reduced by the
                    Service Fee, amounts remitted to Delivery Partners under
                    your instructions and tax deduction/ collection at source)
                    earned by you, (ii) less any refunds given to your customers
                    or Users (such final remitted amount being the{" "}
                    <span className="bold">“Item Revenue”</span>).
                  </li>
                  <li>
                    <span className="bold">2.d.</span> Item Revenue received by
                    Kartzo from the User on behalf of the Merchant Partner will
                    be settled into the Merchant Partner’s bank account, details
                    of which are set forth in{" "}
                    <span className="bold">
                      <u>Addendum II</u>
                    </span>
                    . Settlement of transaction payments shall be within the
                    time period as set forth by the guidelines of the Reserve
                    Bank of India, where applicable. The Merchant Partner agrees
                    to provide such documents and information necessary or as
                    may be sought by a payment facilitator or bank to enlist the
                    Merchant Partner as a payee of Kartzo. The Merchant Partner
                    agrees that for this purpose, information about and provided
                    by the Merchant Partner will be shared with a payment
                    facilitator or bank.
                  </li>
                </ul>

                <h2 className="title-small light">3. Restrictions</h2>

                <p>
                  Delivery Partners are independent service providers, and as
                  such, they reserve the right to refuse to accept any item for
                  delivery in their sole discretion. Any item that you do not
                  have permission or license to sell or deliver may not be sold
                  to Users.
                </p>
              </div>

              <div>
                <h2 className="title-xsmall align-center">
                  <p className="mb-15">
                    <b>
                      <u>ADDENDUM II</u>
                    </b>
                  </p>
                  <p>
                    <b>
                      <u>TAX DETAILS OF THE MERCHANT</u>
                    </b>
                  </p>
                </h2>

                <p>1. Details of Tax Registrations</p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Details of Registration</th>{" "}
                      <th>Registration Number</th>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Permanent Account Number</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Goods &amp; Service Tax Registration
                      </td> <td></td>{" "}
                    </tr>
                  </tbody>
                </table>

                <p>
                  2. Indirect Taxes to be levied on each Item enlisted on the
                  Kartzo App
                </p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Nature of Tax</th> <th>Percentage Levy</th>
                    </tr>
                    <tr>
                      {" "}
                      <td>Service Tax</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Value Added Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Central Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>State Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                    <tr>
                      {" "}
                      <td>Integrated Goods &amp; Service Tax</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  3. Other Charges to be levied on each Item enlisted on the
                  Kartzo App
                </p>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <th>Nature of Charges</th> <th> Percentage / Amount </th>
                    </tr>
                    <tr>
                      {" "}
                      <td>Packaging Charges</td> <td></td>{" "}
                    </tr>
                  </tbody>
                </table>

                <h2 className="title-xsmall align-center">
                  <p>
                    <b>
                      <u>OTHER DETAILS</u>
                    </b>
                  </p>
                </h2>
                <table>
                  <tbody>
                    <tr>
                      {" "}
                      <td>Name of Merchant Partner </td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Effective Date</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Registered Address of the Merchant Partner </td>{" "}
                      <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Service Address, Email, Telephone numbers, User/Customer
                        Complaint Redressal Number
                      </td>{" "}
                      <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Merchant Partner contact person</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Service Fee</td> <td>% of the Item Value.</td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>Mode of Payment Settlement</td> <td></td>{" "}
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        Bank Account details of the Merchant Partner{" "}
                      </td>{" "}
                      <td></td>{" "}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="offersampling_userterms" className="pv-20">
              <h2 className="title-small">
                Merchant Outlet Offer(s) and Sampling: Terms &amp; Conditions
              </h2>

              <div>
                <ul>
                  <li>
                    <span className="bold">1.</span> As a registered User, You
                    understand that Kartzo is merely a technology intermediary
                    communicating a promotion on behalf of the Merchant and is
                    not in any manner liable for the content hosted or otherwise
                    the Offer extended through the Kartzo App.
                  </li>
                  <li>
                    <span className="bold">2.</span> You acknowledge that the
                    product is offered for sale or otherwise offered without any
                    consideration, as the case maybe, by the Merchant and not
                    Kartzo.
                  </li>
                  <li>
                    <span className="bold">3.</span> You agree that any
                    product/item procured/purchased by you from the Merchant
                    shall be for your personal consumption.
                  </li>
                  <li>
                    <span className="bold">4.</span> All commercial/contractual
                    terms are offered by and agreed to between User and
                    Merchant(s) alone. The commercial/contractual terms include
                    without limitation price, shipping costs, payment methods,
                    payment terms, date, period and mode of delivery, warranties
                    related to products and services and after sales services
                    related to products and services. Kartzo does not have any
                    control or does not determine or advise or in any way
                    involve itself in the offering or acceptance of such
                    commercial/contractual terms between the Buyers and Sellers.
                  </li>
                  <li>
                    <span className="bold">5.</span> Kartzo does not make any
                    representation or Warranty as to specifics (such as quality,
                    value, saleability, etc.) of the products or services
                    proposed to be sold or offered to be sold or purchased on
                    the Kartzo App. Kartzo shall not be liable in case the
                    product sold by the Merchant is unfit for use or faulty or
                    rendered unfit during carriage of the same from the point of
                    pick-up to the drop-off point.
                  </li>
                  <li>
                    <span className="bold">6.</span> Kartzo does not make any
                    representation or warranty as to the item-specifics (such as
                    legal title, creditworthiness, identity, etc) of any of its
                    Users. You are advised to independently verify the bona
                    fides of any particular Merchant that You choose to deal
                    with on the Kartzo App and use Your best judgment in that
                    behalf.
                  </li>
                  <li>
                    <span className="bold">7.</span> Kartzo does not implicitly
                    or explicitly support or endorse the sale or purchase of any
                    products or services on the Kartzo App. Kartzo accepts no
                    liability for any errors or omissions, whether on behalf of
                    itself or third parties.
                  </li>
                  <li>
                    <span className="bold">8.</span> Consistent with Kartzo’s
                    Privacy Policy, Kartzo may share your information with third
                    parties to manage, expedite and improve the Kartzo App
                    services provided to you or otherwise to carry out specific
                    service requests, including any other reason(s) as covered
                    under the Privacy Policy acknowledged by you.
                  </li>
                  <li>
                    <span className="bold">9.</span> Kartzo is not responsible
                    for any non-performance or breach of any contract entered
                    into between Users and Merchants. Kartzo shall not and is
                    not required to mediate or resolve any dispute or
                    disagreement between Users and Merchants.
                  </li>
                  <li>
                    <span className="bold">10.</span> At no time shall Kartzo
                    hold any right, title or interest over the products nor
                    shall Kartzo have any obligations or liabilities in respect
                    of such contract.
                  </li>
                  <li>
                    <span className="bold">11.</span> Kartzo is not responsible
                    for unsatisfactory or delayed performance of services or
                    damages or delays as a result of products which are out of
                    stock, unavailable or back ordered.
                  </li>
                  <li>
                    <span className="bold">12.</span> You shall independently
                    agree upon the manner and terms and conditions of delivery,
                    payment, insurance etc. with the Merchant that you transact
                    with.
                  </li>
                </ul>
              </div>
            </div>
            <div id="merchantcancellation_terms" className="pv-20">
              <h2 className="title-small">Cancellations</h2>
              <div>
                <ul>
                  <li>
                    As a general rule you shall not be entitled to cancel your
                    order once you have received confirmation of the same. If
                    you cancel your order after it has been confirmed, Kartzo
                    shall have a right to charge you cancellation fee of a
                    minimum INR 20 upto the order value.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- <div className="container" id="dc_promotion_terms">
            <h2 className="title align-center mt-60">
                    Offer: Your Bill. Our Cash.
            </h2>
            <p>
                Please ensure that the following terms and conditions (“Terms”) are read by you before accepting the Kartzo Cash Promotional Offer (“Offer”).
            </p>
    
            <h2 className="title-small light">
                1. Applicability and Offer 
            </h2>
            <ul>
                <li>
                    1.1 This is a once-only Offer available to only new user (“User”).
                </li>
                <li>
                    1.2 Upload a screenshot/picture of an invoice issued by a merchant to you on or after February 01, 2019, of any recent purchase of products from any third party merchant (“Invoice”), and Kartzo Cash of such equivalent amount (per the Invoice, excluding GST) shall be added to the User’s Kartzo account. The maximum amount, which shall be added to the User’s Kartzo account shall not exceed Rs.500/- (Rupees Five Hundred). 
                </li>
                <li>
                    1.3 The Invoice amount considered for Kartzo Cash credit should not include GST. 
                </li>
                <li>
                    1.4 Subject to Clause 3 of these Terms, the Invoice may be for products purchased by the User from any merchant, either online or offline. 
                </li>
                <li>
                    1.5 The Invoice should necessarily be in the name of the User. 
                </li>
                <li>
                    1.6 The Offer is not transferable. The User who has uploaded the information and whose phone number  has been provided will be credited with the Kartzo Cash.  
                </li>
            </ul>
    
            <h2 className="title-small light">
                2. Process
            </h2>
            <ul>
                <li>
                    2.1 The User is required to upload the Invoice and any other information required by Kartzo, on the form provided by Kartzo (https://goo.gl/forms/Bu9f8nqvGqG87S9y1). Details provided in the form should match the Invoice and the details provided to Kartzo while signing up on the Kartzo mobile application.
                </li>
                <li>
                    2.1 Only the first Invoice will be considered for the Offer. More than 1 (One) Invoice will not be eligible.
                </li>
                <li>
                    2.3 Kartzo Cash will only be credited to the User’s Kartzo account only.
                </li>
                <li>
                    2.4 If a User is eligible, Kartzo Cash will be credited to the Kartzo account of the User. 
                </li>
                <li>
                    2.5 The User will have to download the Kartzo mobile application within 24 (Twenty Four) hours from submission of the form. If a User fails to sign up on the Kartzo mobile application prior to completion of the 24 (Twenty Four) hours, the User may not receive Kartzo Cash. 
                </li>
                <li>
                    2.6 The User agrees to receive SMS notifications. If the User is registered as DND user, the User may not receive the SMS notification. 
                </li>
            </ul>
    
            <h2 className="title-small light">
                3. Verification of Invoices 
            </h2>
            <ul>
                <li>
                    3.1 Kartzo will have the right to reject any Invoice. 
                </li>
                <li>
                    3.2 The Invoice may be for any products, such as, food, groceries, electronics, household items, etc. However, Kartzo will not accept Invoices which were issued for purchase of alcohol, or any other such products that Kartzo may deem as ‘demerit goods’. 
                </li>
                <li>
                    3.3 Illegal or fake invoices will not be considered. 
                </li>
                <li>
                    3.4 An Invoice may be rejected by Kartzo on any of the following grounds – 
                    <ul>
                        <li>
                            (a) As per Clauses 3.2 or 3.3 of these Terms; 
                        </li>
                        <li>
                            (b) Invoice is dated prior to February 01, 2019;
                        </li>
                        <li>
                            (c) Invoice has been directly or indirectly received for tasks raised on the Kartzo app; 
                        </li>
                        <li>
                            (d) Invoice is not decipherable; 
                        </li>
                        <li>
                            (e) User has already submitted an Invoice from the same mobile number; 
                        </li>
                        <li>
                            (f) Invoice has been issued for services and not for products; and/or
                        </li>
                        <li>
                            (g) Any other reason that Kartzo may deem as appropriate.
                        </li>
                    </ul>
                </li>
            </ul>
    
            <h2 className="title-small light">
                4. Redemption Process
            </h2>
            <ul>
                <li>
                    4.1 Once Kartzo Cash has been credited to the User’s Kartzo account, the User may redeem it on any valid transaction of at least Rs.50/- (Rupees Fifty), excluding taxes (GST). 
                </li>
                <li>
                    4.2 The User may avail only 25% (Twenty Five percent) of Kartzo Cash for each valid transaction above Rs.50/- (Rupees Fifty) on the Kartzo mobile application.
                </li>
                <li>
                    4.3 A ‘valid transaction’ shall not include the ‘Send Packages’ tasks (pick up and drop), and any other tasks which are not accepted by Kartzo for any reason whatsoever. 
                </li>
            </ul>
    
            <h2 className="title-small light">
                5. Miscellaneous
            </h2>
            <ul>
                <li>
                    5.1 Kartzo reserves the right to (i) not award Kartzo Cash credit to any User, without providing any reason for the same, (ii) deduct any amount from Kartzo Cash at any point for any reason whatsoever, and (iii) amend/revise any part of these Terms at any point, without giving any prior notice to the User. 
                </li>
                <li>
                    5.2 This Offer is subject to availability, and can be changed or withdrawn by Kartzo without notice and will be available for a limited period only.
                </li>
                <li>
                    5.3 These Terms will be in addition to the terms and conditions of Kartzo (https://www.Kartzo.in/terms.html) and will be governed by the privacy policy of Kartzo (https://www.Kartzo.in/privacy). 
                </li>
            </ul>
        </div> --> */}

          <div className="container" id="gpay_offer_terms">
            <h2 className="title align-center mt-60">
              Google Pay Offer T&amp;C
            </h2>
            <ul>
              <li>
                1. The user must successfully make a transaction on the Kartzo
                app, and enter their Google Pay UPI ID as the payment option.
              </li>
              <li>
                2. The user will earn a scratch card reward when they spend at
                least ₹200 in a single transaction on Kartzo using Google Pay.
              </li>
              <li>
                3. The user can earn a maximum of one reward per week for this
                offer. The user can earn a maximum of two rewards in this offer
                period.
              </li>
              <li>
                4. For this offer, the definition of a week is: starting on
                Monday at 9:00 AM and ending on the following Monday at 8:59 AM
                India Standard Time.
              </li>
              <li>
                5. The users are eligible to earn ₹20 to ₹200 with each reward.
              </li>
              <li>
                6. The scratch card will be available within three (3) days
                after a transaction is successfully processed.
              </li>
              <li>
                7. Each Google Pay Customer can only use one set of Google Pay
                credentials that have not been previously registered with Google
                Pay, which includes but is not limited to a Google Account,
                phone number, form of payment, to qualify for each offer.
              </li>
              <li>
                8. If a user earns a reward, the reward money will be deposited
                into their bank account. The user must have a UPI-enabled
                savings account attached to their Google Pay account to receive
                payment from Google. Please be sure to link the UPI enabled
                savings account to your Google Pay account within 45 days of
                claiming the reward, failing which the reward will be deemed to
                be forfeited.
              </li>
              <li>
                9. The user can earn up to a total of Indian Rupees Nine
                Thousand (INR 9,000) per financial year (1 April to 31 March)
                across all Google Pay offers.
              </li>
              <li>
                10. Google is not responsible or liable for the fulfilment or
                provision of any service availed by the user from Kartzo.
              </li>
              <li>
                11. Employees, interns, contractors, and office-holders, as well
                as their immediate families (parents, siblings, children,
                spouses and life partners of each, regardless of where they
                live), of Google LLC, its affiliates and subsidiaries, and any
                representatives or agencies of Google or other persons
                professionally connected with the offer are not eligible to
                participate in this offer.
              </li>
              <li>
                12. This offer is not available to residents of the state of
                Tamil Nadu (as per Tamil Nadu Prize Scheme (Prohibition) Act
                1979) and wherever else prohibited by law. Residents of these
                states should not participate in this offer.
              </li>
              <li>
                13. To participate in a Google Pay offer, the user must agree to
                these offer terms and conditions.
              </li>
              <li>
                14. The user agrees that their participation in the offer
                constitutes their understanding of and agreement to these offer
                terms and conditions. These offer terms and conditions form a
                binding legal agreement between the user and Google with respect
                to the offers, and any defined terms used herein have the
                meaning set forth in the Google Pay Terms of Service.
              </li>
              <li>
                15. Google reserves the right, at its sole discretion, to
                disqualify any User who does not meet the offer requirements or
                in case of reasons including but not limited to any misuse of
                the offer or fraud or suspicious transactions/activities. Google
                also reserves the right to discontinue or change any Google Pay
                offer or the Google Pay offer programme at any time, at its sole
                discretion.
              </li>
              <li>
                16. This offer is subject to the user's compliance with the
                Google Pay Terms of Service.
              </li>
            </ul>
          </div>
          <div className="container" id="paytm_offer_terms">
            <h2 className="title align-center mt-60">Paytm Offer T&amp;C</h2>
            <ul>
              <li>
                <span className="bold">1.</span> Rs.100 cashback on 3
                transactions
              </li>
              <li>
                <span className="bold">2.</span> Rs.25 on 1st transaction, Rs.25
                on 2nd transaction and Rs.50 on 3rd transaction
              </li>
              <li>
                <span className="bold">3.</span> Minimum order value of each
                transaction should be Rs.100
              </li>
              <li>
                <span className="bold">4.</span> Only one transaction per day
                will be counted for this cashback
              </li>
              <li>
                <span className="bold">5.</span> Offer applicable on Android and
                iOS app version 7.0.0 and above
              </li>
              <li>
                <span className="bold">6.</span> Offer valid on payments on
                Kartzo using Paytm
              </li>
              <li>
                <span className="bold">7.</span> If you do not participate or
                activate the offer, your transactions will not get linked in the
                offer.
              </li>
              <li>
                <span className="bold">8.</span> After your first transaction,
                you will receive a push message to activate the offer and redeem
                cashback.
              </li>
              <li>
                <span className="bold">9.</span> You can avail this offer only
                once during the campaign duration
              </li>
              <li>
                <span className="bold">10.</span> If you fail to activate the
                offer under Paytm cashback listing on Paytm app, your count of
                transactions will not be considered
              </li>
              <li>
                <span className="bold">11.</span> Users are eligible for the
                offer if the first transaction is made before 31st March 2019
              </li>
              <li>
                <span className="bold">12.</span> User should complete all 3
                transactions within 20 days from the date of first transaction
                to get full Rs.100 cashback
              </li>
              <li>
                <span className="bold">13.</span> Cashback will be credited to
                your Paytm wallet within 24 hours of completing the offer
              </li>
              <li>
                <span className="bold">14.</span> Offer applicable on Kartzo app
              </li>
              <li>
                <span className="bold">15.</span> Cashback will not be processed
                for non-KYC users
              </li>
              <li>
                <span className="bold">16.</span> If you have not completed your
                KYC, you will receive Goldback (inclusive of 3% GST)
              </li>
              <li>
                <span className="bold">17.</span> Paytm and Kartzo solely
                reserves the right to change offer terms at any time without
                prior notice to the customers
              </li>
              <li>
                <span className="bold">18.</span> Kartzo can cancel orders if
                found to be of fraudulent nature
              </li>
              <li>
                <span className="bold">19.</span> Kartzo &amp; Paytm reserve the
                right to change/modify/add/delete any of the terms and
                conditions of the offer at any time without notice
              </li>
            </ul>
          </div>

          <div className="container" id="amazonpay_offer_terms">
            <h2 className="title align-center mt-60">
              Amazon Pay Offer T&amp;C
            </h2>
            <p>Steps to Redeem:</p>
            <p className="bold">Follow the steps below to redeem the reward:</p>
            <ul>
              <li>
                <span className="bold">1.</span> Once the reward is collected,
                make a payment on Kartzo between 01-Aug-2020 12:00:00 AM to
                31-Aug-2020 11:59:59 PM of min. value ₹99.
              </li>
              <li>
                <span className="bold">2.</span> Reward is applicable when you
                pay on Kartzo
              </li>
              <li>
                <span className="bold">3.</span> This offer can't be clubbed
                with any other offer &amp; is valid 2 time(s) per user
              </li>
              <li>
                <span className="bold">4.</span> The cashback will be credited
                as Amazon Pay balance within 3 working days. You'll receive an
                email and SMS for the cashback. Alteratively, you can also check
                your cashback at: www.amazon.in/vs
              </li>
            </ul>
            <p className="bold">Frequently Asked Questions:</p>

            <ul>
              <li>
                <span className="bold">1.</span> What is the reward?
              </li>
              <li>Make a payment on Kartzo and Win ₹10 to ₹200 back</li>
              <li>
                <span className="bold">2.</span> How can I earn this reward?
              </li>
              <li>
                <ul>
                  <li>
                    <span>a.</span> Collect this reward
                  </li>
                  <li>
                    <span>b.</span> Make a successful Kartzo payment
                  </li>
                  <li>
                    <span>c.</span> You need to make a min payment of ₹99
                  </li>
                  <li>
                    <span>d.</span> Reward is applicable on Kartzo
                  </li>
                </ul>
              </li>
              <li>
                Note: You'll only receive the reward if the transaction is
                successful.
              </li>
              <li>
                <span className="bold">3.</span> What is the reward duration?
              </li>
              <li>
                Reward is valid from 01-Aug-2020 12:00:00 AM to 31-Aug-2020
                11:59:59 PM
              </li>
              <li>
                <span className="bold">4.</span> How many times can I avail this
                reward?
              </li>
              <li>The reward can be availed 2 time(s) per user</li>
              <li>
                <span className="bold">5.</span> Is there any promo code
                required?
              </li>
              <li>No additional promo code to be applied</li>
              <li>
                <span className="bold">6.</span> When will I receive my
                cashback?
              </li>
              <li>
                <ul>
                  <li>
                    <span>a.</span> You'll receive your cashback within 3
                    working days of successfully completing your transaction
                  </li>
                  <li>
                    <span>b.</span> You will not receive the cashback until the
                    transaction is complete (i.e. for transactions being
                    processed)
                  </li>
                  <li>
                    <span>c.</span> You will not receive the cashback if you,
                    the Merchant or Amazon cancels the order fully or partially.
                  </li>
                </ul>
              </li>
              <li>
                However, if you place another valid order after this during the
                offer period, the new order will be eligible for the cashback
              </li>
              <li>
                <ul>
                  <span>d.</span> You can also check the cashback provided to
                  you, in your Amazon Pay balance account
                </ul>
              </li>
              <li>
                <span className="bold">7.</span> What happens if I am eligible
                for more than one reward?
              </li>
              <li>
                If you are eligible for more than one reward, you'll be able to
                redeem the reward that gives the best cashback on your purchase.
                Rest of the rewards can be redeemed in subsequent purchases
              </li>
            </ul>
            <p className="bold">Terms and Conditions:</p>

            <ul>
              <li>
                <span className="bold">1.</span> This offer is a joint
                promotional initiative provided by Kartzo DIGITAL PRIVATE
                LIMITED ("Merchant") and Amazon Pay (India) Private Limited
                ("Amazon"). "This offer is made available to you by Amazon Pay
                (India) Private Limited ("Amazon") on the Website (defined
                below) maintained and operated by Kartzo DIGITAL PRIVATE LIMITED
                ("Merchant")."
              </li>
              <li>
                <span className="bold">2.</span> Offer terms and conditions
                ("Offer Terms") are in addition to Amazon.in Conditions of Use
                &amp; Sale and Privacy Notice to which you agree to by using
                Amazon.in. To the extent the Conditions of Use &amp; Sale or
                these additional terms are inconsistent with these Offer Terms,
                these Offer Terms shall prevail with respect to the Offer only.
              </li>
              <li>
                <span className="bold">3.</span> This Offer is valid from
                01-Aug-2020 12:00:00 AM to 31-Aug-2020 11:59:59 PM ("Offer
                Period"), unless extended or revoked by Amazon, without
                assigning any reason, without prior notice and without liability
                of any kind.
              </li>
              <li>
                <span className="bold">4.</span> During the Offer Period, any
                customer who undertakes a minimum payment of ₹99 on Kartzo and
                chooses to make payment using "Amazon Pay", will be eligible to
                receive a cashback between ₹10 to ₹200, for the amount paid
                towards the transaction. This Offer can only be availed by a
                customer 2 time(s) during the Offer Period.
              </li>
              <li>
                (Each transaction meeting the aforesaid requirements being
                referred to as a "Qualifying Transaction").
              </li>
              <li>
                It is clarified that the amount of the cashback that a customer
                receives will be determined on a random basis. APIPL accepts no
                responsibility for the amount that a customer receives under
                this Offer.
              </li>
              <li>
                <span className="bold">5.</span> Reward is applicable on Kartzo
              </li>
              <li>
                <span className="bold">6.</span> The offer is available only for
                payments made towards Kartzo. It is further clarified that a
                customer will not be eligible to receive a reward under this
                Offer: if the payment is made using a payment method other than
                the Eligible Payment Method. This Offer can only be availed by a
                customer who have an India Verified Mobile number linked to
                their account
              </li>
              <li>
                <span className="bold">7.</span> This Offer can only be availed
                2 times(s) by each customer. Additionally, and for the avoidance
                of doubt, Amazon Pay Balance will only be provided for 2
                Qualifying Transaction(s) (and not for any subsequent
                transactions) made by the customer during the Offer Period.
              </li>
              <li>
                <span className="bold">8.</span> The Offer is applicable only
                for a transaction that is successfully completed. A customer
                will not be eligible to receive the cashback under this Offer,
                if the transaction is cancelled, for any reason whatsoever, by
                the customer, by Amazon, or by the concerned Merchant.
              </li>
              <li>
                <span className="bold">9.</span> The cashback promotional
                benefit will be provided within 3 working days of successful
                completion of the transaction, in the form of Amazon Pay Gift
                Card(s), issued by Qwikcilver Solutions Private Limited,
                redeemable into Amazon Pay balance associated with the
                customer's Amazon.in account. The use and redemption of gift
                card(s) and use of Amazon Pay balance will be governed by the
                applicable terms.
              </li>
              <li>
                <span className="bold">10.</span> Amazon reserves the absolute
                right, without prior notice, without liability, and without
                assigning any reason whatsoever, to add/alter/modify/change or
                vary any or all of these Offer Terms or to replace, wholly or in
                part, this Offer by another offer, whether similar to this Offer
                or not.
              </li>
              <li>
                <span className="bold">11.</span> This Offer is valid for Indian
                residents only.
              </li>
              <li>
                <span className="bold">12.</span> By participating in this
                Offer, every customer expressly agrees that neither Amazon nor
                any of its affiliates will not be liable or responsible for any
                loss or damage whatsoever that a customer may suffer, directly
                or indirectly, in connection with this Offer, including but not
                limited to that associated with the payment transaction made on
                Amazon.in to avail this Offer.
              </li>
              <li>
                <span className="bold">13.</span> The Amazon Pay Balance will be
                sent to the registered email ID of the customer making the
                Qualifying Transaction instantly post such Transaction.
              </li>
              <li>
                Amazon Gift Cards will expire one year from the date of issuance
                by QwikCilver. Amazon Gift Cards cannot be used to purchase
                other gift cards. Amazon Gift Cards cannot be reloaded, resold,
                transferred for value or redeemed for cash, except to the extent
                required by law.
              </li>
              <li>
                <span className="bold">14.</span> By participating in this
                Offer, you expressly agree that Amazon or any of its affiliates
                will not be liable or responsible for any loss or damage
                whatsoever that you may suffer, directly or indirectly, in
                connection with this Offer.
              </li>
              <li>
                <span className="bold">15.</span> Amazon reserves the right to
                disqualify any customer from this Offer if any fraudulent
                activity is identified as being carried out for the purpose of
                availing the Offer or if any of the conditions of the Offer
                Terms are not met.
              </li>
              <li>
                <span className="bold">16.</span> This Offer is governed by the
                laws of India and any disputes arising out of or in connection
                with this Offer will be subject to the exclusive jurisdiction of
                the courts at Bangalore
              </li>
              <li>
                <span className="bold">17.</span> Availing this Offer is
                voluntary. Any person availing this Offer will be deemed to have
                accepted these Offer Terms. By availing this Offer, each
                customer hereby releases from liability and holds harmless
                Amazon and its affiliates in relation to any matters connected
                to this Offer including but not limited to issue(s) associated
                with making the Qualifying Transaction or the inability to make
                a transaction for any reason whatsoever.
              </li>
              <li>
                <span className="bold">18.</span> As per RBI regulations, it is
                mandatory for customers to have their names associated with
                their Amazon accounts to receive cashback
              </li>
              <li>
                <span className="bold">19.</span> Nothing contained in these
                Offer Terms amounts to a commitment by Amazon to conduct
                further, similar or other offers.
              </li>
              <li>
                <span className="bold">20.</span> Amazon reserves the right to
                disqualify any customer from the benefits of the Offer, at its
                sole discretion, if it identifies any fraudulent activity being
                carried out for the purpose of availing the benefits under the
                Offer or for any reason whatsoever
              </li>
              <li>
                <span className="bold">21.</span> Under no circumstances, will
                the benefit being offered under this Offer be settled in cash in
                lieu thereof
              </li>
            </ul>
          </div>

          <div className="container" id="simpl_offer_terms">
            <h2 className="title align-center mt-60">
              Simpl Kartzo new user offer T&amp;C
            </h2>
            <ul>
              <li>
                <span className="bold">1.</span> Flat 50 cashback on the first
                transaction on Kartzo using Simpl.
              </li>
              <li>
                <span className="bold">2.</span> Minimum order value is INR 200.
              </li>
              <li>
                <span className="bold">3.</span> Cashback will be canceled in
                case of full refunds or cancellation of orders.
              </li>
              <li>
                <span className="bold">4.</span> Valid for transactions
                completed between 1st August 2020 to 30th September 2020.
              </li>
              <li>
                <span className="bold">5.</span> The eligible amount will be
                credited to a user's Simpl account post settlement of the bill.
              </li>
            </ul>
          </div>
          <div className="container" id="business_insaurance_terms">
            <h1 className="title align-center mt-60">D4B Insurance Terms</h1>
            <ul>
              <li>
                <span className="bold">1.</span> Kartzo had selected ICICI
                Lombard as its Insurance Partner for the deliveries of those
                goods which are raise through D4B dashboard by Merchants.
              </li>
              <li>
                <span className="bold">2.</span> The Policy would be called as “
                Kartzo Digital Private Limited A/C all B2B merchants of Kartzo”.
              </li>
              <li>
                <span className="bold">3.</span> This Insurance covers the goods
                ordered by customers of merchants and transportation of these
                goods are assigned to Kartzo Delivery Partner.
              </li>
              <li>
                <span className="bold">4.</span> The Policy would cover the
                Pickup, Transportation and delivery of the product ordered by a
                customer at a merchant’s store for which the merchant uses the
                services of Kartzo delivery partner for delivery.
              </li>
              <li>
                <span className="bold">5.</span> This Policy would cover goods
                picked up and delivered in the city from anywhere to anywhere.
              </li>
              <li>
                <span className="bold">6.</span> The rate pre delivery would be
                0.09 % of the single product cost.[SM1]
              </li>
              <li>
                <span className="bold">7.</span> It is also absolutely necessary
                that all the goods from a single merchant have to be included in
                the insurance program, selection of individual and particular
                deliveries would not be allowed.
              </li>
              <li>
                <span className="bold">8.</span> The Insurance would start
                instantly the product is picked by Kartzo Partner and would
                cease after elapse of 3 hours of product delivery.
              </li>
              <li>
                <span className="bold">9.</span> If more than one product is
                packed in a single delivery, then that would be considered a
                single delivery, example 3 Books packed in a packet.
              </li>
              <li>
                <span className="bold">10.</span> If more than 1 delivery is
                being done for a single address at one time than all the
                deliveries would be considered separate and excess on claims
                would be on each and every delivery.
              </li>
              <li>
                <span className="bold">11.</span> Merchant has to check and
                insure that the product to be delivered is properly packed and
                hand over to Kartzo Partner is according to the agreement.
              </li>
              <li>
                <span className="bold">12.</span> It is ordained that before
                carrying out the deliveries, the Merchant has to declare these
                goods ( i.e. standard description )and value of the good on E
                Mail. ICICI Lombard would share the format which with Kartzo and
                the details of declaration would be required to be in this
                format.
              </li>
              <li>
                <span className="bold">13.</span> Merchant can send a Maximum of
                Rs. 40,000 goods in a single delivery, Example 5 books worth
                8000 Rs packed in a single packet and to be delivered to single
                address will be considered a single consignment. Whereas, a
                packet of book in one packet , a kitchen appliance in another
                packet to be delivered to same address would be considered two
                consignments.[SM2]
              </li>
              <li>
                <span className="bold">14.</span> The policy would not cover the
                Return deliveries which had been delivered and the customer
                wants to return as per return policy of that particular
                merchant.
              </li>
              <li>
                <span className="bold">15.</span> For all claims, the
                communication would be between the Merchant and ICICI Lombard
                and Marsh would act as a Broker in this Policy , intervening
                according to the duties and compliance as suggested by IRDA.
              </li>
              <li>
                <span className="bold">16.</span> ICICI Lombard, would share
                this CD account with the frequency of 15 days and also whenever
                is demanded by the Merchant.
              </li>
            </ul>
          </div>

          <div className="container" id="community_guidelines">
            <h1 className="title align-center mt-60">Community Guidelines</h1>
            <p>
              We’re passionate about ensuring cities are accessible to everyone,
              everywhere. During COVID-19, our mission resonated louder and
              clearer. At Kartzo, we are committed to ensuring you have access
              to essentials, without leaving your house. We understand that you
              might have questions about how we’re navigating the COVID-19
              epidemic. At Kartzo, we’re doing our best to ensure that we’re
              following all preventive measures, and your safety and wellbeing
              is prioritized, always.
            </p>
            <p>
              <b>
                <u>For everyone in our community</u>
              </b>
            </p>
            <p>
              The World Health Organisation recommends we all remember the
              ‘Five’
            </p>
            <ul>
              <li>
                <span className="bold">1. HANDS</span> Wash them often
              </li>
              <li>
                <span className="bold">2. ELBOW</span> Cough into it
              </li>
              <li>
                <span className="bold">3. FACE</span> Don't touch it
              </li>
              <li>
                <span className="bold">4. FEET</span> Stay more than 3 feet
                apart
              </li>
              <li>
                <span className="bold">5. FEEL</span> sick or unwell? Stay home
              </li>
            </ul>
            <p>
              Please follow guidelines prescribed by WHO, Central Government,
              and local authorities. We can overcome this, but only if we do it
              together.
            </p>
            <p>
              In light of COVID-19, we would like to take this time to put forth
              community guidelines for our users.
            </p>
            <p>
              <b>For our users</b>
            </p>
            <ul className="dotted-list">
              <li>
                <span className="bold">Kartzo Services during COVID-19:</span>{" "}
                During the containment of the COVID-19 virus, Kartzo Partners
                will only deliver essential items as categorized by the local
                authorities. Essential products like medicines must be made
                through the “medicine” category and with a valid prescription
                only. Under no circumstances, will your partner deliver any
                non-essential items or habit-forming substances like cigarettes
                or tobacco. Please refrain from asking your partner to purchase
                something outside of the app.
              </li>
              <li>
                <span className="bold">
                  Responsible Use of Kartzo Services:
                </span>{" "}
                You must use Kartzo Services responsibly and in compliance with
                the law. Please ensure that you handover to the Kartzo Partners
                only essential items/products that can be transported under the
                prevailing guidelines issued by central, state and local
                authorities. Your Partner can refuse to complete an order, if
                they feel otherwise, or can contact local authorities if they
                wish to. Note, if you misuse the platform, your partner can run
                into trouble as well. You must use the service responsibly.
              </li>
              <li>
                <span className="bold">Introducing No Contact Delivery:</span>{" "}
                In order to limit contact, No Contact Delivery has been
                introduced. Please let your partner know via the in-app chat, or
                over a phone call to leave your order at a mutually decided
                spot. If you or a family member is unwell, please do opt for the
                no-contact delivery. Pro Tip: Leave a bag or a box at the door
                for your partner to drop your items off.
              </li>
              <li>
                <span className="bold">Item Restriction:</span> Hygiene and
                essential items like sanitizers or groceries might be limited in
                number currently. Please be respectful and avoid hoarding of
                items, to ensure resources are adequately distributed amongst
                the community.
              </li>
              <li>
                <span className="bold">Tipping:</span> Your Kartzo partner is
                going the extra mile so that you can stay safe indoors. We have
                introduced Tipping, whereby you can show appreciation to your
                partner for being there for you. 100% of your tip will be
                provided to your Partner
              </li>
              <li>
                <span className="bold">Be Respectful:</span> Your Kartzo
                partners are doing their best to ensure you get your item
                delivered on time. Treat your partners the way you would like to
                be treated. Please be respectful, and know they’re doing their
                best so that you can stay indoors and be safe
              </li>
              <li>
                <span className="bold">An inclusive Community:</span> At Kartzo,
                we celebrate inclusion and diversity amongst our large community
                of users, partners, merchants, and employees. Remember, when you
                use Kartzo, you might interact with people who look or think
                differently from you. Promoting a respectful community is one of
                our key values and we do not support any form of discrimination,
                among our large community of users, partners, merchants and
                employees.
              </li>
            </ul>
            <p>
              <b>For your Partners</b>
            </p>
            <ul className="dotted-list">
              <li>
                <span className="bold">Containing Community Spread:</span> All
                your partners are aware and following recommended preventive
                measures to ensure you and our community can stay safe.
              </li>
              <li>
                <span className="bold">Insurance:</span> All Kartzo Partners are
                now COVID insured. If a partner does contract the virus, their
                account will be automatically placed on hold until they recover.
                They will be compensated for their time to recover through the
                insurance.
              </li>
              <li>
                <span className="bold">COVID Partner relief Fund:</span> We have
                set up a partner relief fund for our Partners and their families
                to overcome this difficult period. This time, we’re urging our
                community to deliver for the partners. Every little bit helps
                and will go a long way in ensuring your partners know we all
                have their back. Please do contribute{" "}
                <a
                  href="https://milaap.org/fundraisers/Kartzo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </li>
              <li>
                <span className="bold">Social Distancing at Stores:</span> A
                tech solution to queue orders enables the Partners to keep a
                safe distance at stores and avoid overcrowding while ensuring
                orders are also fulfilled. Your partner will be standing in line
                and waiting his/her turn patiently. You must be patient as well.
              </li>
              <li>
                <span className="bold">Remote Onboarding:</span> If you wish to
                sign up during this time to serve your city as a Kartzo Partner,
                by ensuring essentials reach those who need it the most, please
                sign up{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdCzIPpG_AW_gBdpafB4V0gu5ETTC_kpwd4TeATEpKOcNBQqw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                . You can be onboarded through our remote onboarding facility.
              </li>
            </ul>
          </div>

          <div className="container" id="Kartzo_for_business_terms">
            <h1 className="title align-center mt-60">
              Kartzo FOR BUSINESS TERMS
            </h1>
            <p>
              THESE TERMS OF USE (<b>"TERMS OF USE"</b>) ARE ELECTRONIC RECORD
              IN THE FORM OF AN ELECTRONIC CONTRACT FORMED UNDER THE INFORMATION
              TECHNOLOGY ACT, 2000 AND RULES MADE THEREUNDER AND THE AMENDED
              PROVISIONS PERTAINING TO ELECTRONIC DOCUMENTS/RECORDS IN VARIOUS
              STATUTES AS AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000. THESE
              TERMS OF USE DO NOT REQUIRE ANY PHYSICAL, ELECTRONIC OR DIGITAL
              SIGNATURES.
              <br />
              <br />
              THESE TERMS OF USE ARE A LEGALLY BINDING DOCUMENT BETWEEN MERCHANT
              AND Kartzo (BOTH TERMS DEFINED BELOW). THESE TERMS OF USE SHALL
              GOVERN THE RELATIONSHIP BETWEEN THE MERCHANTS REGISTERED ON THE
              ‘Kartzo FOR BUSINESS’ PLATFORM (
              <b>“MERCHANT” OR “YOU” OR “YOUR” OR “YOURSELF” OR “USER”</b>) AND
              MANDATE THE TERMS ON WHICH THE MERCHANT AVAILS Kartzo SERVICES AND
              ACCESSES THE PLATFORM (BOTH TERMS DEFINED BELOW).
              <br />
              <br />
              PLEASE READ THE TERMS OF USE CAREFULLY BEFORE USING THE PLATFORM,
              Kartzo SERVICES (BOTH TERMS DEFINED BELOW) AND THE DASHBOARD THAT
              GIVES YOU ACCESS TO INFORMATION RELATED TO THE Kartzo SERVICES (
              <b>“B2B DASHBOARD”</b>). BY ACCESSING THE B2B DASHBOARD OR
              ACCEPTING THE ELECTRONIC MAIL SENT TO YOU BY Kartzo (“DEFINED
              BELOW”) CONTAINING THESE TERMS OF USE, AS APPLICABLE, YOU ACCEPT
              THESE TERMS OF USE AND AGREE TO BE LEGALLY BOUND BY THE SAME. IF
              YOU DO NOT AGREE WITH THESE TERMS, PLEASE DO NOT USE THE PLATFORM
              (DEFINED BELOW) OR AVAIL ANY Kartzo SERVICES (DEFINED BELOW) BEING
              OFFERED THROUGH THE PLATFORM (DEFINED BELOW).
              <br />
              <br />
              Kartzo (DEFINED BELOW) RESERVES THE RIGHT TO CHANGE THESE TERMS OF
              USE FROM TIME TO TIME. IT WILL BE PRESUMED THAT MERCHANT HAS
              CONSENTED TO ANY SUCH CHANGES IF AND WHEN MERCHANT ACCESSES THE
              PLATFORM OR AVAILS Kartzo SERVICES (BOTH TERMS DEFINED BELOW).
              MERCHANT MAY DECLINE SUCH CHANGES BY DISCONTINUING ACCESS TO THE
              PLATFORM OR BY NOT AVAILING Kartzo SERVICES (BOTH TERMS DEFINED
              BELOW).
              <br />
              <br />
              The B2B Dashboard, the website{" "}
              <a href="https://www.Kartzo.com/">www.Kartzo.com</a> and the
              mobile application ‘Kartzo’ are technology platforms owned and
              operated by Kartzo Digital Private Limited (<b>“Kartzo”</b>), that
              enables the Merchant to connect with independent third-party
              logistics service providers (<b>“Delivery Partner”</b>) to pick up
              and drop off packages for the Merchant from one location to the
              other location through the Delivery Partner. All of such
              properties are collectively referred to as, the <b>“Platform”</b>.
              Kartzo merely acts as a technology platform which allows the
              Merchant to connect with the Delivery Partner. You hereby agree
              and acknowledge that the role of Kartzo is limited to operating
              and managing the Platform and providing Kartzo Services (Defined
              Below). You hereby further agree and acknowledge that Kartzo does
              not in any manner provide logistics service nor is the Delivery
              Partner an employee or an agent of Kartzo. The Delivery Partner is
              an independent third party logistics service provider.
              <br />
              <br />
              Use of and access to the Platform, is offered to You upon the
              condition of acceptance of (i) these Terms of Use, (ii) any
              agreement signed by You with Kartzo (iii) the Privacy Policy
              available at https://Kartzo.in/privacy, and (iv) any amendments
              made by Kartzo at its sole discretion and posted on the Platform
              from time to time.
            </p>
            <h2 className="title-xsmall align-center">
              <b>
                <u>PART A- GENERAL TERMS RELATING TO Kartzo SERVICES</u>
              </b>
            </h2>
            <h3 className="title-xsmall">
              <b>
                1. <u>General:</u>
              </b>
            </h3>
            <p>
              Kartzo Digital Private Limited, is a company incorporated under
              the laws of India, with its registered office at Unit No. 201,
              Smart Square No. 3/1, 2nd Floor, Indiranagar, 100 Feet Road,
              Bangalore-560038, Karnataka, India and having CIN:
              U74900KA2014PTC075256.
            </p>
            <h3 className="title-xsmall">
              <b>
                2. <u>Registration:</u>
              </b>
            </h3>
            <ul>
              <li>
                a. You shall be permitted to access the Platform, avail the
                Kartzo Services and connect with Delivery Partner on the
                Platform after completing the onboarding process which shall be
                an Application Program Interface (“API”) integration with Kartzo
                or in case where Merchant is not capable to do the API
                integration, in a manner as may be informed by Kartzo to
                Merchant from time to time at Kartzo’s sole discretion.
              </li>
              <li>
                b. When You register with Kartzo, You will be required to
                provide information about You and/or Your organisation. You
                agree and accept that as on the date of Your registration on the
                Platform, the information provided by You is complete, accurate
                and up-to-date. In the event of any change to such information,
                You shall be required to promptly inform Kartzo of the same, in
                writing, at least 1 (one) week prior to the date on which such
                change shall take effect. You acknowledge and accept that Kartzo
                has not independently verified the information provided by You.
                Kartzo shall in no way be responsible or liable for the
                accuracy, inaccuracy, obsolescence or completeness of any
                information provided by You. If You provide any information that
                is untrue, inaccurate, obsolete or incomplete, or Kartzo has
                reasonable grounds to suspect that such information is untrue,
                inaccurate, obsolete or incomplete, Kartzo reserves the right to
                suspend or terminate Your Account (defined below) and refuse any
                and all current or future use of the Platform (or any portion
                thereof) at any time.
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                3. <u>Kartzo Services:</u>
              </b>
            </h3>
            <ul>
              <li>
                a. Kartzo provides You with the following services (
                <b>“Kartzo Services”</b>):
                <ul>
                  <li>
                    (i) It provides You with a license to access the Platform;
                  </li>
                  <li>
                    (ii) The Platform allows You to connect with Delivery
                    Partner to pick up and drop off packages from one location
                    to the other through the Delivery Partner (
                    <b>“Pick Up and Drop Off Services”</b>); and
                  </li>
                  <li>
                    (iii) Facilitates the collection of payments for the
                    transaction/(s) between You and Delivery Partner.
                  </li>
                </ul>
              </li>
              <li>
                b. Kartzo may, at its absolute sole discretion, add, modify,
                upgrade, extend, withdraw or transfer any of the Kartzo Services
                from time to time. Kartzo does not provide any guarantee to You
                that the Kartzo Services will be made available to You at all
                times.
              </li>
              <li>
                c. You can initiate a transaction on the Platform by which You
                may (through the Delivery Partner) send packages to a particular
                location identified by You. The Pick Up and Drop Off Services
                are provided to You directly by the Delivery Partner and Kartzo
                merely acts as a technology platform to facilitate the
                connection between You and the Delivery Partner. The Delivery
                Partner is neither an employee nor an agent or an affiliate of
                Kartzo. Kartzo does not assume any responsibility or liability
                for any form of act, omission to act, services provided, quality
                or deficiency of services on part of the Delivery Partner. You
                hereby agree and acknowledge that all actions, omissions to act,
                services provided, quality or deficiency in services with
                respect to the Pick Up and Drop Off Services is of the Delivery
                Partner in the Delivery Partner’s independent capacity and sole
                discretion.
              </li>
              <li>
                d. Upon initiation of a request for Pick Up and Drop Off
                Services on the Platform, Delivery Partner/(s) around the pickup
                location shall be intimated in an automated manner and depending
                upon the availability of Delivery Partner/(s), a Delivery
                Partner may choose to accept Your request. The Delivery Partner
                shall pick up the item from a location designated by You on the
                Platform and drop off the Items at a particular location
                designated by You. While performing the Pick Up and Drop off
                Services, the Delivery Partner shall act as Your agent and shall
                act in accordance with Your instructions. You agree and
                acknowledge that the pick-up location and the drop off location
                will be added by You and that such information will be used for
                the Pick Up and Drop Off Services. You must ensure that the
                details for the locations are accurate and identifiable by the
                Delivery Partners.
              </li>
              <li>
                e. You agree that You shall at all times use the Platform and
                Kartzo Services for lawful purposes. Additionally, You shall not
                use the Pick Up and Drop Off Services for items which are
                illegal, immoral, hazardous, unsafe, dangerous, or otherwise
                restricted or constitute items that are prohibited by any
                statute or law or regulation or the provisions of these Terms of
                Use.
              </li>
              <li>
                f. You agree that before requesting a Pick-up and Drop-off
                Service, You are well aware of the contents of the package sent
                or requested by You through the Delivery Partner, and that such
                contents are legal and within limits of transportation/logistics
                under applicable law. Such contents shall not be restricted
                and/or banned and/or dangerous and/or prohibited for carriage (
                <i>
                  such items include, but are not limited to, radio-active,
                  incendiary, corrosive or flammable substances, hazardous
                  chemicals, explosives, firearms or parts thereof and
                  ammunition, firecrackers, cyanides, precipitates, gold and
                  silver ore, bullion, precious metals and stones, jewellery,
                  semi-precious stones including commercial carbons or
                  industrial diamonds, currency (paper or coin) of any
                  nationality, securities (including stocks and bonds, share
                  certificates and blank signed share transfer forms), coupons,
                  stamps, negotiable instruments in bearer form, cashier's
                  cheques, travellers’ cheques, money orders, passports,
                  credit/debit/ATM cards, antiques, works of art, lottery
                  tickets and gambling devices, livestock, insects, animals,
                  human corpses, organs or body parts, blood, urine and other
                  liquid diagnostic specimens, hazardous or bio-medical waste,
                  wet ice, pornographic materials, contraband, bottled alcoholic
                  beverages or any intoxicant or narcotics and psychotropic
                  substances or any other prohibited material or material for
                  the transportation of which specific authorisation/license is
                  required under applicable laws
                </i>
                ) (all of such items, the <b>“Restricted Items”</b>).
              </li>
              <li>
                g. You also agree that, upon becoming aware of the commission of
                an offence by You or Your intention to commit an offence upon
                initiating a Pick-up and Drop-off Service or during a Pick-up
                and Drop-off service of any item(s) restricted under applicable
                law, the Delivery Partner may at the Delivery Partner’s sole
                discretion choose to take such action as the Delivery Partner
                deems fit including intimating law enforcement authorities about
                such unlawful action.
              </li>
              <li>
                h. Kartzo does not check or verify the packages that are being
                picked up and dropped off on behalf of You or the Items that are
                being delivered to You by the Delivery Partner, and therefore
                Kartzo shall have no liability with respect to the Items or Your
                use of the Kartzo Services and the Pick Off and Drop Off
                Services. However, if it is brought to the knowledge of Kartzo
                through any law enforcement authority or any other third-party
                that You have packaged any Restricted Items or availed the Pick
                up and Drop Off Services using the Platform to deliver any
                Restricted Items, Kartzo may at its sole discretion take
                appropriate actions including suspension or termination of Your
                Account and Kartzo Services. Kartzo may also, on a request
                received from the law enforcement authority provide requisite
                details as may be requested, which may include but not be
                limited to details of Your organisation, Your personal details,
                transaction history, payment details, geo locations, logistics
                information, etc to such authorities.
              </li>
              <li>
                i. If a transaction initiated by You on the Platform cannot be
                completed, You shall be notified on the Platform.
              </li>
              <li>
                j. Kartzo shall use Your location based information that is
                captured by Kartzo through a global positioning system when You
                are using Your personal computer or mobile device to request a
                Kartzo Service on its Platform. Such location based information
                shall be used by Kartzo to facilitate and improve the Kartzo
                Services being offered to You. You acknowledge and hereby
                consent to the monitoring and tracking of Your geo-location
                information. In addition, the Delivery Partner may have access
                to such geo-location.
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                4. <u>Merchant Information</u>
              </b>
            </h3>
            <ul>
              <li>
                a. You are solely responsible for and in control of the
                information You provide to us. Compilation of Merchant Accounts
                and Merchant Account bearing contact number and e-mail addresses
                are owned by Kartzo.
              </li>
              <li>
                b. In a case where the Platform is unable to establish a unique
                identity of the Merchant against the details provided by the
                Merchant, the Account shall be indefinitely suspended. Kartzo
                reserves the full discretion to suspend a Merchant's Account in
                the above event and does not have the liability to share any
                Account information whatsoever.
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                5. <u>Payment and Taxes</u>
              </b>
            </h3>
            <ul>
              <li>
                a. <u>Payments:</u>
                <ul>
                  <li>
                    (i) While initiating a request for a Pick Up and Drop Off
                    Service, You may be required to pay a delivery fee to the
                    Delivery Partner for availing the Pick Up and Drop Off
                    Service (<b>“Delivery Fee”</b>), as may be displayed to You
                    on the Platform at the time of raising such request. Kartzo
                    will facilitate the collection and disbursement of Delivery
                    Fee for the Delivery Partner in compliance with applicable
                    laws. Kartzo shall issue a statement of transactions on
                    behalf of the Delivery Partner from time to time.
                  </li>
                  <li>
                    (ii) All settlement to the Merchant shall be made in
                    compliance with applicable law. In case the Merchant opts
                    for a post-paid payment option, Merchant shall ensure that
                    the payment towards such outstanding amounts are made within
                    the prescribed time frame and in a manner as communicated by
                    Kartzo from time to time.
                  </li>
                  <li>
                    (iii) In case, Merchant enables a cash on delivery option
                    for its customers and provides instructions/authorisation to
                    the Delivery Partners to collect the cash on behalf of the
                    Merchant at the time of the drop off, the Merchant shall
                    ensure that its customers are duly notified to hand over the
                    appropriate amount to the Delivery Partner without demur or
                    delay. Subject to settlement of Delivery Fee and any other
                    payment obligation adjustment for Merchant, payment of
                    foregoing amount for cash on delivery shall be made to the
                    Merchant.
                  </li>
                </ul>
              </li>
              <li>
                b. <u>Taxes:</u>
                <ul>
                  <li>
                    (i) You are responsible to comply with the applicable tax
                    regulations for the transactions completed using Kartzo
                    Services including, but not limited to, compliance with
                    goods and service tax, withholding taxes, if any. You agree
                    and acknowledge that any settlement amount to be paid by
                    Merchant for Pick up and Drop off Services shall not be
                    subject to deduction of goods and service tax or withholding
                    taxes. Such settlement is merely a pass through amount for
                    the Delivery Partner. Any obligation for deduction of goods
                    &amp; service tax or withholding taxes shall be between You
                    and Delivery Partner. Kartzo shall make available the
                    details of Pick up and Drop off Services to You to enable
                    You to comply with Your tax obligations.
                  </li>
                  <li>
                    (ii) You further agree and acknowledge that Kartzo shall not
                    be held responsible/liable for any compliance or
                    non-compliance of applicable tax laws by You or the Delivery
                    Partner.
                  </li>
                </ul>
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                6. <u>Insurance</u>
              </b>
            </h3>
            <p>
              You agree and acknowledge that You are solely responsible for the
              items that You get delivered using Pick Up and Drop off services
              through the Platform. Kartzo shall in no manner be responsible for
              any loss, theft or damage. However, Kartzo may from time to time
              facilitate Merchant availing insurance services from third party
              vendors and Merchant may at its sole discretion avail such
              insurance directly from a third party insurance provider. The
              details of such insurance are available at{" "}
              <a href="#business_insaurance_terms">
                https://www.Kartzo.com/terms#business_insaurance_terms
              </a>
              . Kartzo disclaims any and all liability for any loss, theft or
              damage caused to the Merchant by availing the Pick Up and Drop Off
              Services irrespective whether Merchant chooses to avail an
              insurance or not.
            </p>
            <h3 className="title-xsmall">
              <b>
                7. <u>Rating</u>
              </b>
            </h3>
            <ul>
              <li>
                a. You agree that: (i) after completion of a transaction on the
                Platform, the Platform will prompt the Merchant with an option
                to provide a rating and comments about the Delivery Partner
                (with respect to the services performed by the Delivery
                Partner).
              </li>
              <li>
                b. Kartzo and its affiliates reserve the right to use, share and
                display such ratings and comments in any manner in connection
                with the business of Kartzo and its affiliates without
                attribution to or approval of Merchant and You hereby consent to
                the same. Kartzo and its affiliates reserve the right to edit or
                remove comments in the event that such comments include
                obscenities or other objectionable content, include an
                individual’s name or other personal information, or violate any
                privacy laws, other applicable laws or Kartzo’s or its
                affiliates’ content policies.
              </li>
            </ul>
            <h2 className="title-xsmall align-center">
              <b>
                <u>PART B: SPECIFIC TERMS FOR Kartzo SERVICES</u>
              </b>
            </h2>
            <h3 className="title-xsmall">
              <b>
                8. <u>Cancellation</u>
              </b>
            </h3>
            <ul>
              <li>
                a. If You wish to cancel a transaction on the Platform, You
                shall select the cancel option on the Platform. It is to be
                noted that You may not be allowed to cancel a transaction
                initiated on the Platform for which work the Delivery Partner
                has reached the pick-up location.
              </li>
              <li>
                b. The transaction initiated by You on the Platform may be
                cancelled, if:
                <ul>
                  <li>
                    (i) Information, instructions and authorisations provided by
                    You (including the details of pick up and drop off location)
                    is not complete or sufficient for Delivery Partner to
                    execute the transaction initiated by You.
                  </li>
                  <li>
                    (ii) If a Delivery Partner is not available to perform the
                    services, as may be requested.
                  </li>
                  <li>
                    (iii) If the transaction cannot be completed for reasons not
                    in control of Kartzo including any technological glitch.
                  </li>
                </ul>
              </li>
            </ul>
            <h2 className="title-xsmall align-center">
              <b>
                <u>PART C: GENERAL TERMS OF USE</u>
              </b>
            </h2>
            <h3 className="title-xsmall">
              <b>
                9. <u>Non- Exclusive</u>
              </b>
            </h3>
            <p>
              Kartzo’s Services shall be provided to You on a non-exclusive
              basis.
            </p>
            <h3 className="title-xsmall">
              <b>
                10. <u>Eligibility to Use</u>
              </b>
            </h3>
            <ul>
              <li>
                a. Kartzo reserves the right to refuse access to the Platform,
                at any time to new Merchant or to terminate or suspend access
                granted to existing Merchant at any time without according any
                reasons for doing so.
              </li>
              <li>
                b. Unless otherwise permitted by Kartzo, You shall not have more
                than 1 (one) active Account (as defined below) on the Platform.
                Additionally, You are prohibited from selling, trading, or
                otherwise transferring Your Account to another party or
                impersonating any other person for the purpose of creating an
                account with the Platform.
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                11. <u>User Account, Password, and Security</u>
              </b>
            </h3>
            <p>
              In order to use the Platform and avail the Kartzo Services, You
              will have to register on the Platform in a manner as contained in
              the Clause 2 herein (<b>“Account”</b>). You will be responsible
              for maintaining the confidentiality of the Account information,
              and are fully responsible for all activities that occur under Your
              Account. You agree to immediately notify Kartzo of any
              unauthorized use of Your Account information or any other breach
              of security. Kartzo cannot and will not be liable for any loss or
              damage arising from Your failure to comply with this provision.
              You may be held liable for losses incurred by Kartzo or any other
              visitor to the Platform due to authorized or unauthorized use of
              Your Account as a result of Your failure in keeping Your Account
              information secure and confidential. Use of another Merchant’s
              Account information for using the Platform is expressly
              prohibited.
            </p>
            <h3 className="title-xsmall">
              <b>
                12. <u>Confidential Information</u>
              </b>
            </h3>
            <p>
              <b>“Confidential Information”</b>&nbsp;means any confidential,
              proprietary or other non-public information disclosed by one party
              (the&nbsp;“Discloser”) to the other (the&nbsp;“Recipient”),
              whether disclosed verbally, in writing, or by inspection of
              tangible objects. Confidential Information will not include that
              information that (a) was previously known to the Recipient without
              an obligation of confidentiality; (b) was acquired by the
              Recipient without any obligation of confidentiality from a third
              party with the right to make such disclosure; or (c) is or becomes
              publicly available through no fault of the Recipient. Each
              Recipient agrees that it will not disclose to any third parties,
              or use in any way other than as necessary to perform this Terms,
              the Discloser’s Confidential Information. Each Recipient will
              ensure that Confidential Information will only be made available
              to those of its employees and agents who have a need to know such
              Confidential Information and who are be bound by written
              obligations of confidentiality at least as protective of the
              Discloser as this Terms before such individual has access to the
              Discloser’s Confidential Information. Each Recipient will not, and
              will not authorize others to, remove, overprint or deface any
              notice of copyright, trademark, logo, legend, or other notices of
              ownership from any originals or copies of the Discloser’s
              Confidential Information. The foregoing prohibition on disclosure
              of Confidential Information will not apply to the extent the
              Discloser has authorized such disclosure, nor to the extent a
              Recipient is required to disclose certain Confidential Information
              of the Discloser as a legal obligation based on the applicable
              laws and regulations or order of a court, provided that the
              Recipient gives the Discloser prior written notice of such
              obligation to disclose and reasonably assist in filing petition of
              objection etc. prior to making such disclosure. Upon expiration or
              termination of this Terms and as requested by the Discloser, each
              Recipient will deliver to the Discloser (or destroy at the
              Discloser’s election) any and all materials or documents
              containing the Discloser’s Confidential Information, together with
              all copies thereof in whatever form.
            </p>
            <h3 className="title-xsmall">
              <b>
                13. <u>Representations and Warranties</u>
              </b>
            </h3>
            <ul>
              <li>
                a. Each party hereby represents and warrants that: (a) it has
                full power and authority to enter into these Terms of Use and
                perform its obligations hereunder; (b) it is duly organized,
                validly existing and in good standing under the laws of the
                jurisdiction of its origin; (c) it has not entered into, and
                during the Term (as defined below) will not enter into, any
                terms that would prevent it from complying with or performing
                under these Terms of Use (in your case, including without
                limitation, any exclusive terms with any third parties for the
                pick and drop off services via a technology platform); and (d)
                the content, media and other materials used or provided as part
                of these Terms of Use shall not infringe or otherwise violate
                the intellectual property rights, rights of publicity or other
                proprietary rights of any third party.
              </li>
              <li>
                b. You agree to use the Platform only: (i) for purposes that are
                permitted by these Terms of Use; and (ii) in accordance with any
                applicable law, regulation or generally accepted practices or
                guidelines; (iii) on obtaining and maintaining throughout the
                Term any and all valid license, approvals, registrations, no
                objection certificates and in compliance with any law that may
                be specifically applicable to the business being carried out by
                Merchant and/or for use of the Platform or Kartzo Services by
                Merchant. You agree not to engage in activities that may
                adversely affect the use of the Platform by Kartzo or Delivery
                Partner(s) or other merchants.
              </li>
              <li>
                c. You represent and warrant that You have not received any
                notice from any third party or any governmental authority and no
                litigation is pending against You in any court of law, which
                prevents You from accessing the Platform and/or availing the
                Kartzo Services.
              </li>
              <li>
                d. You represent and warrant that You are legally authorised to
                view and access the Platform and avail the Kartzo Services.
              </li>
              <li>
                e. You agree not to access (or attempt to access) the Platform
                by any means other than through the interface that is provided
                by Kartzo. You shall not use any deep-link, robot, spider or
                other automatic device, program, algorithm or methodology, or
                any similar or equivalent manual process, to access, acquire,
                copy or monitor any portion of the Platform, or in any way
                reproduce or circumvent the navigational structure or
                presentation of the Platform, materials or any Kartzo Property,
                to obtain or attempt to obtain any materials, documents or
                information through any means not specifically made available
                through the Platform.
              </li>
              <li>
                f. You acknowledge and agree that by accessing or using the
                Platform, You may be exposed to content from others that You may
                consider offensive, indecent or otherwise objectionable. Kartzo
                disclaims all liabilities arising in relation to such offensive
                content on the Platform.
              </li>
              <li>
                g. Further, You undertake not to:
                <ul>
                  <li>
                    (i) defame, abuse, harass, threaten or otherwise violate the
                    legal rights of others;
                  </li>
                  <li>
                    (ii) publish, post, upload, distribute or disseminate any
                    inappropriate, profane, defamatory, infringing, disparaging,
                    ethnically objectionable, obscene, indecent or unlawful
                    topic, name, material or information;
                  </li>
                  <li>
                    (iii) do any such thing that may harms minors in any way;
                  </li>
                  <li>
                    (iv) copy, republish, post, display, translate, transmit,
                    reproduce or distribute any Kartzo Property through any
                    medium without obtaining the necessary authorization from
                    Kartzo;
                  </li>
                  <li>
                    (v) conduct or forward surveys, contests, pyramid schemes or
                    chain letters;
                  </li>
                  <li>
                    (vi) upload or distribute files that contain software or
                    other material protected by applicable intellectual property
                    laws unless You own or control the rights thereto or have
                    received all necessary consents;
                  </li>
                  <li>
                    (vii) upload or distribute files or documents or videos
                    (whether live or pre-recorded) that contain viruses,
                    corrupted files, or any other similar software or programs
                    that may damage the operation of the Platform or another's
                    computer;
                  </li>
                  <li>
                    (viii) engage in any activity that interferes with or
                    disrupts access to the Platform (or the servers and networks
                    which are connected to the Platform);
                  </li>
                  <li>
                    (ix) attempt to gain unauthorized access to any portion or
                    feature of the Platform, any other systems or networks
                    connected to the Platform, to any Kartzo server, or through
                    the Platform, by hacking, password mining or any other
                    illegitimate means;
                  </li>
                  <li>
                    (x) probe, scan or test the vulnerability of the Platform or
                    any network connected to the Platform, nor breach the
                    security or authentication measures on the Platform or any
                    network connected to the Platform. You may not reverse
                    look-up, trace or seek to trace any information on any other
                    User, of or visitor to, the Platform, to its source, or
                    exploit the Platform or information made available or
                    offered by or through the Platform, in any way whether or
                    not the purpose is to reveal any information, including but
                    not limited to personal identification information, other
                    than Your own information, as provided on the Platform;
                  </li>
                  <li>
                    (xi) disrupt or interfere with the security of, or otherwise
                    cause harm to, the Platform, systems resources, accounts,
                    passwords, servers or networks connected to or accessible
                    through the Platform or any affiliated or linked sites;
                  </li>
                  <li>
                    (xii) collect or store data about other user, merchant,
                    Delivery Partner in connection with the prohibited conduct
                    and activities set forth herein;
                  </li>
                  <li>
                    (xiii) use any device or software to interfere or attempt to
                    interfere with the proper working of the Platform or any
                    transaction being conducted on the Platform, or with any
                    other person’s use of the Platform;
                  </li>
                  <li>
                    (xiv) use the Platform or any material or Kartzo Property
                    for any purpose that is unlawful or prohibited by these
                    Terms of Use, or to solicit the performance of any illegal
                    activity or other activity which infringes the rights of the
                    Company or other third parties;
                  </li>
                  <li>
                    (xv) falsify or delete any author attributions, legal or
                    other proper notices or proprietary designations or labels
                    of the origin or source of software or other material
                    contained in a file that is uploaded;
                  </li>
                  <li>
                    (xvi) impersonate any other user, Delivery Partner or
                    person;
                  </li>
                  <li>
                    (xvii) violate any applicable laws or regulations for the
                    time being in force within or outside India or anyone’s
                    right to privacy or personality;
                  </li>
                  <li>
                    (xviii) violate these Terms of Use contained herein or
                    elsewhere;
                  </li>
                  <li>
                    (xix) threatens the unity, integrity, defence, security or
                    sovereignty of India, friendly relation with foreign states,
                    or public order or causes incitement to the commission of
                    any cognisable offence or prevents investigation of any
                    offence or is insulting for any other nation; and
                  </li>
                  <li>
                    (xx) reverse engineer, modify, copy, distribute, transmit,
                    display, perform, reproduce, publish, license, create
                    derivative works from, transfer, or sell any information or
                    software obtained from the Platform.
                  </li>
                </ul>
              </li>
              <li>
                h. You agree and acknowledge that the use of the Kartzo Services
                offered by Kartzo is at Your sole risk and that Kartzo disclaims
                all representations and warranties of any kind, whether express
                or implied as to condition, suitability, quality,
                merchantability and fitness for any purposes are excluded to the
                fullest extent permitted by law.
                <br />
                <br />
                All materials/content on our Platform (except any third party
                content available on the Platform), including, without
                limitation, names, logos, trademarks, images, text, columns,
                graphics, videos, photographs, illustrations, artwork, software
                and other elements (collectively, <b>“Material”</b>) are
                protected by copyrights, trademarks and/or other intellectual
                property rights owned and controlled by Kartzo. You acknowledge
                and agree that the Material is made available for limited,
                non-commercial, personal use only. Except as specifically
                provided herein or elsewhere in our Platform, no Material may be
                copied, reproduced, republished, sold, downloaded, posted,
                transmitted, or distributed in any way, or otherwise used for
                any purpose other than the purposes stated under these Terms of
                Use, by any person or entity, without Kartzo’s prior express
                written permission. You may not add, delete, distort, or
                otherwise modify the Material. Any unauthorized attempt to
                modify any Material, to defeat or circumvent any security
                features, or to utilize our Platform or any part of the Material
                for any purpose other than its intended purposes is strictly
                prohibited. Subject to the above <b>restrictions</b> under this
                Clause, Kartzo hereby grants You a non-exclusive, freely
                revocable (upon notice from Kartzo), non-transferable access to
                view the Material on the Platform.
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                14. <u>Intellectual Property Rights</u>
              </b>
            </h3>
            <ul>
              <li>
                a. The Platform and process, and their selection and
                arrangement, including but not limited to, all text, videos,
                graphics, user interfaces, visual interfaces, sounds and music
                (if any), artwork, algorithm and computer code (and any
                combination thereof), except any third party software available
                on the Platform, is owned by Kartzo (<b>“Kartzo Property”</b>)
                and the design, structure, selection, coordination, expression,
                look and feel and arrangement of such Kartzo Property is
                protected by copyright, patent and trademark laws, and various
                other intellectual property rights. You are not permitted to use
                Kartzo Property without the prior written consent of Kartzo.
              </li>
              <li>
                b. The trademarks, logos and service marks displayed on the
                Platform (<b>“Marks”</b>) are the property of Kartzo, except any
                trademark, logos and service marks of third parties available on
                the Platform. You are not permitted to use the Marks without the
                prior consent of Kartzo or such third party as may be
                applicable.
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                15. <u>Disclaimer of Warranties &amp; Liabilities</u>
              </b>
            </h3>
            <p>
              You expressly understand and agree that, to the maximum extent
              permitted by applicable law:
            </p>
            <ul>
              <li>
                a. The Platform, Kartzo Property and Kartzo Services are
                provided by Kartzo on an “as is” basis without warranty of any
                kind, express, implied, statutory or otherwise, including the
                implied warranties of title, non-infringement, merchantability
                or fitness for a particular purpose. Without limiting the
                foregoing, Kartzo makes no warranty that (i) the Platform,
                Kartzo Services will meet Your requirements or Your use of the
                Platform will be uninterrupted, timely, secure or error-free;
                (ii) the quality of the Platform will meet Your expectations; or
                (iii) any errors or defects in the Platform will be corrected.
                No advice or information, whether oral or written, obtained by
                You from Kartzo shall create any warranty not expressly stated
                in these Terms of Use.
              </li>
              <li>
                b. Kartzo will have no liability related to any Merchant content
                arising under intellectual property rights, libel, privacy,
                publicity, obscenity or other laws. Kartzo also disclaims all
                liability with respect to the misuse, loss, modification or
                unavailability of any Merchant content.
              </li>
              <li>
                c. Kartzo will not be liable for any loss that You may incur as
                a consequence of unauthorized use of Your Account or Account
                information in connection with the Platform either with or
                without Your knowledge.
              </li>
              <li>
                d. Kartzo shall not be responsible for the delay or inability to
                use the Platform, Kartzo Services or related functionalities,
                the provision of or failure to provide functionalities, or for
                any information, software, functionalities and related graphics
                obtained through the Platform, or otherwise arising out of the
                use of the Platform, whether based on contract, tort,
                negligence, strict liability or otherwise. Further, Kartzo shall
                not be held responsible for non-availability of the Platform
                during periodic maintenance operations or any unplanned
                suspension of access to the Platform that may occur due to
                technical reasons or for any reason beyond Kartzo's control. You
                understand and agree that any material or data downloaded or
                otherwise obtained through the Platform is done entirely at Your
                own discretion and risk, and that You will be solely responsible
                for any damage to Your computer systems or loss of data that
                results from the download of such material or data.
              </li>
              <li>
                e. Kartzo shall not be liable for any damages, loss, cost,
                expense of any kind arising from Your use of the Platform or
                Kartzo Services, including, but not limited to direct, indirect,
                incidental, punitive, and consequential damages.
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                16. <u>Indemnification and Limitation of Liability</u>
              </b>
            </h3>
            <ul>
              <li>
                a. You agree to indemnify, defend and hold harmless Kartzo and
                its affiliates including but not limited to its officers,
                directors, consultants, agents and employees (
                <b>“Indemnitees”</b>) from and against any and all losses,
                liabilities, claims, damages, demands, costs and expenses
                (including legal fees and disbursements in connection therewith
                and interest chargeable thereon) asserted against or incurred by
                the Indemnitees that arise out of, result from, or may be
                payable by virtue of, any breach or non-performance of any
                obligation, covenant, representation or warranty by You pursuant
                to these Terms of Use. Further, You agree to hold the
                Indemnitees harmless against any claims made by any third party
                due to, or arising out of, or in connection with, Your use of
                the Platform, Kartzo Services, any misrepresentation with
                respect to the data or information provided by You in relation
                to the Account, Your violation of these Terms of Use, or Your
                violation of any rights of another, including any intellectual
                property rights.
              </li>
              <li>
                b. In no event shall the Indemnitees, be liable to You or any
                third party for any special, incidental, indirect, consequential
                or punitive damages whatsoever, arising out of or in connection
                with Your use of or access to the Platform or Kartzo Property or
                Kartzo Services on the Platform.
              </li>
              <li>
                c. Your indemnification obligation under the Terms of Use will
                survive the termination of Your Account or use of the Platform
                or Kartzo Services.
              </li>
              <li>
                d. Subject to applicable laws, in no event will Kartzo or its
                employees aggregate liability, arising from or related to the
                Kartzo Services or the use of the Platform shall not exceed INR
                50,000/- (Indian Rupees Fifty Thousand Only) for any and all
                causes of actions brought by You or on behalf of You.
              </li>
              <li>
                e. The Platform and the Kartzo Services are only available to
                merchants located in India. Merchant shall not access or use the
                Platform from any other jurisdiction except for India. If a
                Merchant accesses or uses the Platform from any other
                jurisdiction except for India, the Merchant shall be liable to
                comply with all applicable laws and Kartzo shall not be liable
                for the same, whatsoever.
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                17. <u>Violation of the Terms of Use</u>
              </b>
            </h3>
            <p>
              You agree that any violation by You of these Terms of Use will
              constitute an unlawful and unfair business practice, and will
              cause irreparable harm to Kartzo, for which monetary damages would
              be inadequate, and You consent to the Kartzo obtaining any
              injunctive or equitable relief that they deem necessary or
              appropriate in such circumstances. These remedies are in addition
              to any other remedies that the Kartzo may have at law or in
              equity. If Kartzo takes any legal action against You as a result
              of Your violation of these Terms of Use, Kartzo will be entitled
              to recover from You, and You agree to pay all reasonable
              attorneys’ fees and costs of such action, in addition to any other
              relief that may be granted.
            </p>
            <h3 className="title-xsmall">
              <b>
                18. <u>Additional Terms</u>
              </b>
            </h3>
            <p>
              We may also require You to follow additional rules, guidelines or
              other conditions in order to participate in certain promotions or
              activities available through the Platform. These additional terms
              shall form a part of these Terms of Use, and You agree to comply
              with them when You participate in those promotions, or otherwise
              engage in activities governed by such additional terms.
            </p>
            <h3 className="title-xsmall">
              <b>
                19. <u>Link to Third Parties</u>
              </b>
            </h3>
            <p>
              The Platform may contain links to other sites owned by third
              parties (i.e. advertisers, affiliate partners, strategic partners,
              or others). Kartzo shall not be responsible for examining or
              evaluating such third party websites, and Kartzo does not warrant
              the products or offerings of, any of these businesses or
              individuals, or the accuracy of the content of such third party
              websites. Kartzo does not assume any responsibility or liability
              for the actions, product, and content of any such third party
              websites. Before You use/access any such third-party websites, You
              should review the applicable terms of use and policies for such
              third party websites. If You decide to access any such linked
              third party website, You do so at Your own risk.
            </p>
            <h3 className="title-xsmall">
              <b>
                20. <u>Term and Termination</u>
              </b>
            </h3>
            <ul>
              <li>
                a. These Terms of Use will continue to apply until terminated by
                either You or Kartzo as set forth below. If You object to these
                Terms of Use or are dissatisfied with the Platform, Kartzo
                Services, Your only recourse, subject to the clearance of all
                payment obligations either to Kartzo or the Delivery Partner, is
                to terminate Your Account on the Platform by giving a 15 days’
                advance written notice to Us. Kartzo will make Your account
                dormant upon receipt of request in writing and payment of
                outstanding dues, if any. Even after your account with Kartzo is
                disabled, dormant or made inactive, the terms agreed by You at
                the time of registration will remain in effect. This termination
                shall be effective only once You have cleared all Your dues that
                You are liable to pay as per these Terms of Use.
              </li>
              <li>
                b. The Company may terminate Your future access to the Platform
                or suspend or terminate Your Account and Kartzo Services if it
                believes, in its sole and absolute discretion that You have
                infringed, breached, violated, abused, or unethically
                manipulated or exploited any term of these Terms of Use or
                anyway otherwise acted unethically.
              </li>
              <li>
                c. You hereby agree and acknowledge, upon termination, Kartzo
                shall have the right to retain all information pertaining to the
                transactions initiated by You on the Platform.
              </li>
              <li>
                d. You hereby further agree and acknowledge that nothing
                contained in this Clause 20 shall be construed as a waiver of
                Kartzo’s and/or Delivery Partner’s right to payment of the
                outstanding dues. You hereby further agree and acknowledge that
                on or before termination, You shall ensure that all the monies
                due to be paid to Kartzo and/or Delivery Partner are paid in a
                timely manner.
                <br />
                <br />
                You hereby further agree and acknowledge that in case of
                non-payment of dues within the prescribed timelines: (i) Kartzo
                shall not in any manner be liable to Delivery Partner for
                payment of such due; and (ii) Kartzo may: (a) adjust the amount
                due from the amount payable by Kartzo to You; and (b) at its
                sole discretion take appropriate legal action against You to
                recover the same and/or on receiving a request, facilitate
                Delivery Partner for such recovery.
              </li>
            </ul>
            <h3 className="title-xsmall">
              <b>
                21. <u>Governing Law</u>
              </b>
            </h3>
            <p>
              These Terms of Use shall be governed by and constructed in
              accordance with the laws of India without reference to conflict of
              laws principles and disputes arising in relation hereto shall be
              subject to the exclusive jurisdiction of courts, tribunals, forum,
              applicable authorities at Bangalore.
            </p>
            <h3 className="title-xsmall">
              <b>
                22. <u>Report Abuse</u>
              </b>
            </h3>
            <p>
              In the event You come across any abuse or violation of these Terms
              of Use or if You become aware of any objectionable content on the
              Platform, please report the same to the following e-mail id:
              support@duzo.in In case You have any queries with respect to the
              Terms of Use or the Kartzo Services, please write to Us at
              support@Kartzo.in.
            </p>
            <h3 className="title-xsmall">
              <b>
                23. <u>Communications</u>
              </b>
            </h3>
            <p>
              You hereby expressly agree to receive communications by way of
              SMSs and/or e-mails from Kartzo, or other third parties. You can
              unsubscribe/ opt-out from receiving communications through SMS and
              e-mail anytime by contacting us for the same. However, You may
              still receive communications from Your end with respect to Your
              use of the Kartzo Service.
            </p>
            <h3 className="title-xsmall">
              <b>
                24. <u>General</u>
              </b>
            </h3>
            <ul>
              <li>
                <b>a. Amendments:</b> Kartzo reserves the unconditional right to
                modify or amend these Terms of Use without any requirement to
                notify You of the same. You can determine when these Terms of
                Use were last modified by referring to the <b>“Last Updated”</b>{" "}
                legend above. It shall be Your responsibility to check this
                Terms of Use periodically for changes. Your acceptance of the
                amended Terms of Use shall signify Your consent to such changes
                and agreement to be legally bound by the same.
              </li>
              <li>
                <b>b. Notice:</b> All notices from Kartzo will be served by
                email to Your registered email address or by general
                notification on the Platform.
              </li>
              <li>
                <b>c. Assignment:</b> You cannot assign or otherwise transfer
                the Terms of Use, or any rights granted hereunder to any third
                party. Kartzo’s rights under the Terms of Use are freely
                transferable by Kartzo to any third party without the
                requirement of informing You or seeking Your consent.
              </li>
              <li>
                <b>d. Force Majeure:</b> Any delay in or failure to perform any
                obligations by either party under these Terms of Use shall not
                constitute default hereunder if and to the extent caused by
                force majeure, which is defined to be occurrences beyond the
                reasonable control of such party committing default, including
                and limited to acts of the government authorities, acts of God,
                fire, flood, explosion, riots, war, labour strikes, sabotage,
                rebellion, insurrection, epidemic, pandemics or similar outbreak
                (“Force Majeure”). Provided, however, You shall give prompt
                written notice within a period of 7 (seven) days from the date
                of the force majeure occurrence to Kartzo. You shall use all
                reasonable efforts to avoid or remove such cause of
                non-performance and shall continue performance hereunder
                whenever such causes of force majeure are removed. In the event
                the Force Majeure event continues for a period of 7 (seven) days
                from the date on which Kartzo receives the notice from You as
                above, Kartzo shall have the right to terminate these Terms of
                Use.
              </li>
              <li>
                <b>e. No Agency:</b> Merchant shall not be deemed to be Kartzo’s
                agent, servant, or employee in any manner for any purpose
                whatsoever.
              </li>
              <li>
                <b>f. Severability:</b> If, for any reason, a court of competent
                jurisdiction finds any provision of the Terms of Use, or any
                portion thereof, to be unenforceable, that provision shall be
                enforced to the maximum extent permissible so as to give effect
                to the intent of the parties as reflected by that provision, and
                the remainder of the Terms of Use shall continue in full force
                and effect.
              </li>
              <li>
                <b>g. Waiver:</b> Any failure by Kartzo to enforce or exercise
                any provision of the Terms of Use, or any related right, shall
                not constitute a waiver by Kartzo of that provision or right.
              </li>
              <li>
                <b>h. Equitable Remedies:</b> Merchant acknowledge and agrees
                that monetary damages may be an inadequate remedy for breach or
                threatened breach of the provisions of these Terms of Use, and
                Merchant agrees that in the event of a breach of any provisions
                of these Terms of Use by the Merchant, Kartzo’s rights and
                obligations hereunder, in addition to any and all other rights
                and remedies that may be available to Kartzo in respect of such
                breach, shall be enforceable by specific performance, injunctive
                remedy or any other remedy available in any court of competent
                jurisdiction.
              </li>
              <li>
                <b>i. Integration:</b> These Terms of Use together with Kartzo’s
                Privacy Policy and any other legal notices, communications
                published by Kartzo on its Platform, and any other agreements
                executed between You and Kartzo shall constitute the entire
                agreement between you and Kartzo concerning its Platform, Kartzo
                Services and governs Your use of the Platform and Kartzo
                Service, superseding any prior agreements between You and Kartzo
                with respect to the Platform and Kartzo Service.
              </li>
              <li>
                <b>j. IP Infringement:</b> If You believe the Platform violates
                Your intellectual property, You must promptly notify Kartzo in
                writing at legalnotices@Kartzo.in These notifications should
                only be submitted by the owner of the intellectual property or
                an agent duly authorized to act on his/her behalf. However, any
                false claim by You may result in the termination of Your access
                to the Platform. You are required to provide the following
                details in Your notice:
                <ul>
                  <li>
                    (i) the intellectual property that You believe is being
                    infringed;
                  </li>
                  <li>
                    (ii) the item that You think is infringing and include
                    sufficient information about where the material is located
                    on the Platform;
                  </li>
                  <li>
                    (iii) a statement that You believe in good faith that the
                    item You have identified as infringing is not authorized by
                    the intellectual property owner, its agent, or the law to be
                    used in connection with the Platform;
                  </li>
                  <li>
                    (iv) Your contact details, such as Your address, telephone
                    number, and/or email;
                  </li>
                  <li>
                    (v) a statement that the information You provided in Your
                    notice is accurate, and that You are the intellectual
                    property owner or an agent authorized to act on behalf of
                    the intellectual property owner whose intellectual property
                    is being infringed; and
                  </li>
                  <li>(vi) Your physical or electronic signature.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Terms;
