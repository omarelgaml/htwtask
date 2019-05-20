import React, { Component } from 'react';
import '../App.css';
import classNames from 'classnames'
import 'bootstrap/dist/css/bootstrap.css';
import ButtonAppBar from './ButtonAppBar'
class Glossary extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      initialContent : [
        {   
          "categories": [
            "Planung",
            "Test"
          ],
          "description-english": "<p>A method for structuring information – such as menus in a <a href=\"#/Navigation structure\">navigation structure</a> – that involves writing key concepts onto different cards and asking <a href=\"#/User\">users</a> to sort these cards into groups.<br/>Notes:<br/>1.\tThere are two methods of card sorting – open and closed:.<br/>a.\tDuring open card sorting, <a href=\"#/User\">users</a> are asked to sort the cards into groups that they feel represent distinct domains of information.<br/>b.\tWith closed card sorting, the group names are pre-defined, usually by a prior round of open card sorting, and <a href=\"#/User\">users</a> are asked to populate those groups with the cards.<br/>2.\tAfter an open card sort, <a href=\"#/User\">users</a> are asked to name each group. If a majority of users suggest the same name, use that name as the group title.<br/>3.\tThe groups provide important clues as to how human-centred menus could be structured and named. The group titles may be used as menu titles.<br/>4.\tIf <a href=\"#/User\">users</a> ask about the meaning of a concept, explain it to them and ask, “what do you call this concept?”<br/>5.\tEncourage <a href=\"#/User\">users</a> to add additional concepts that are important to them during the card sort. Have blank cards ready for this purpose.<br/>6.\tIf several <a href=\"#/User\">users</a> consider a concept superfluous or irrelevant, consider dropping it from the menu.<br/>7.\tVarious tools are available to help you prepare, execute and analyse card sorting sessions.</p>",
          "description-german": "<p>Eine Methode zum Strukturieren von Information – wie beispielsweise Menüs in einer <a href=\"#/Navigationsstruktur\">Navigationsstruktur</a> –, bei der Kernbegriffe auf verschiedene Karten geschrieben werden und <a href=\"#/Benutzer\">Benutzer</a> aufgefordert werden, diese Karten in Gruppen zu sortieren.<br/>Anmerkungen:<br/>1.\tEs gibt zwei Methoden des Card-Sortings - offen und geschlossen:<br/>a.\tBeim offenen Card-Sorting werden die <a href=\"#/Benutzer\">Benutzer</a> gebeten, die Karten in Gruppen zu sortieren, welche ihrer Meinung nach unterschiedliche Informationsbereiche repräsentieren.<br/>b.\tBeim geschlossenen Card-Sorting werden die Gruppennamen vordefiniert - normalerweise durch eine vorherige Runde offenen Card-Sortings - und die <a href=\"#/Benutzer\">Benutzer</a> werden aufgefordert, die Karten in diese Gruppen einzuordnen.<br/>2.\tNach einem offenen Card-Sorting werden die Benutzer aufgefordert, jede Gruppe zu benennen. Wenn die Mehrheit der <a href=\"#/Benutzer\">Benutzer</a> denselben Namen vorschlägt, ist dieser Name als Gruppentitel zu verwenden.<br/>3.\tDie Gruppen geben wichtige Hinweise darüber, wie man menschzentrierte Menüs strukturieren und benennen könnte. Die Gruppentitel können als Menütitel verwendet werden.<br/>4.\tWenn <a href=\"#/Benutzer\">Benutzer</a> nach der Bedeutung eines Begriffs fragen, erklären Sie es ihnen und fragen Sie: „Wie benennen Sie diesen Begriff?“<br/>5.\tErmutigen Sie die <a href=\"#/Benutzer\">Benutzer</a>, zusätzliche Begriffe hinzuzufügen, die ihnen während des Card-Sortings wichtig geworden sind. Halten Sie zu diesem Zweck leere Karten bereit.<br/>6.\tWenn mehrere <a href=\"#/Benutzer\">Benutzer</a> einen Begriff als überflüssig oder irrelevant erachten, sollten Sie ihn aus dem Menü entfernen.<br/>7.\tEs stehen verschiedene Tools zur Verfügung, mit denen Sie Card-Sorting-Sitzungen vorbereiten, durchführen und analysieren können.</p>",
          "term-english": "Card sorting",
          "term-german": "Card-Sorting"
        },
        {   
          "categories": [
            "Anforderungen",
            "Evaluierung"
          ],
          "description-english": "<p>A graphical or tabular description of all encounters <a href=\"#/User\">users</a> have with the <a href=\"#/Interactive system\">interactive system</a> covering all touchpoints that influence the <a href=\"#/User experience\">user experience</a>, making the overall <a href=\"#/User experience\">user experience</a> tangible for others.<br/>Notes:<br/>1.\tBesides depicting <a href=\"#/As-is scenario\">as-is scenarios</a> or use scenarios, user journey maps can be used as a general communications medium to exemplify scenarios for <a href=\"#/Stakeholder\">stakeholders</a> that extend beyond the pure interaction, for example from the discovery of the product to the purchase situation to the usage of the product.<br/>2.\tUser journey maps do not replace <a href=\"#/As-is scenario\">as-is scenarios</a> or <a href=\"#/Use scenario\">use scenarios</a>.<br/>3.\tUser journey maps are graphs or tables that show the full <a href=\"#/User experience\">user experience</a> for users in general. User journey maps can also show the user experience for a <a href=\"#/Persona\">persona</a>.<br/>4.\tUser journey maps are created during analysis to describe current encounters. They are also created or updated during design to describe intended encounters.<br/>Examples:<br/>1.\tExamples of touchpoints:<br/>a.\t The first contact with the <a href=\"#/Interactive system\">interactive system</a>: “How I heard about that new service.” Also: Ads, quotes and sales staff that answer <a href=\"#/User\">users’</a> pre-sales questions;<br/>b.\tThe direct task-oriented interaction, including support staff, bills, instruction manuals and people who deliver products;<br/>c.\tTelling others about my <a href=\"#/User experience\">user experience</a>, for example, writing a report to colleagues about my experience with the new <a href=\"#/Interactive system\">interactive system</a>.</p>",
          "description-german": "<p>Eine grafische oder tabellarische Beschreibung aller Begegnungen, die <a href=\"#/Benutzer\">Benutzer</a> mit dem <a href=\"#/Interaktives System\">interaktiven System</a> haben und welche alle die <a href=\"#/Benutzererlebnis\">User Experience</a> beeinflussenden Touchpoints (Kontaktpunkte) abdeckt, wodurch die gesamte <a href=\"#/Benutzererlebnis\">User Experience</a> für andere greifbar wird.<br/>Anmerkungen:<br/>1.\tNeben der Darstellung von <a href=\"#/Ist-Szenario\">Ist-Szenarien</a> oder <a href=\"#/Nutzungsszenario\">Nutzungsszenarien</a>können User Journey Maps als allgemeines Kommunikationsmedium genutzt werden, um Szenarien für <a href=\"#/Interessenvertreter\">Interessenvertreter</a> begreifbar zu machen, indem sie über die reine Interaktion hinausgehen, beispielsweise von der Entdeckung des Produkts über die Kaufsituation bis hin zur Benutzung des Produkts.<br/>2.\tUser Journey Maps ersetzen keine <a href=\"#/Ist-Szenario\">Ist-Szenarien</a> oder <a href=\"#/Nutzungsszenario\">Nutzungsszenarien</a>.<br/>3.\tUser Journey Maps sind Diagramme oder Tabellen, welche die gesamte <a href=\"#/Benutzererlebnis\">User Experience</a> für <a href=\"#/Benutzer\">Benutzer</a> im Allgemeinen zeigen. User Journey Maps können auch die <a href=\"#/Benutzererlebnis\">User Experience</a> für eine <a href=\"#/Persona\">Persona</a> verdeutlichen.<br/>4.\tUser Journey Maps werden während der Analysephase erstellt, um aktuelle Begegnungen zu beschreiben. Sie werden auch während der Designphase erstellt oder aktualisiert, um beabsichtigte Begegnungen zu beschreiben.<br/>Beispiele:<br/>1.\tBeispiele für Touchpoints:<br/>a.\tDer erste Kontakt mit dem <a href=\"#/Interaktives System\">interaktiven System</a>: „Wie ich von diesem neuen Service erfahren habe.“ Auch: Anzeigen, Angebote und Kontakt mit Vertriebsmitarbeitern, die die Fragen der <a href=\"#/Benutzer\">Benutzer</a> vor dem Kauf beantworten;<br/>b.\tDie direkte aufgabenorientierte Interaktion, einschließlich der Interaktion mit Support-Mitarbeitern, Rechnungen, Bedienungsanleitungen und Personen, die Produkte liefern;<br/>c.\tAndere über die eigene <a href=\"#/Benutzererlebnis\">User Experience</a> informieren, z. B. Schreiben eines Berichtes an Kollegen über meine Erfahrungen mit dem neuen <a href=\"#/Interaktives System\">interaktiven System</a>.</p>",
          "term-english": "User journey map",
          "term-german": "User Journey Map"
        },
        {
          
          "categories": [
            "Planung",
            "Prinzipien"
          ],
          "description-english": "<p>The <a href=\"#/Goal\">goals</a> that are to be achieved for the <a href=\"#/User\">user</a> of an <a href=\"#/Interactive system\">interactive system</a> when developing the <a href=\"#/Interactive system\">interactive system</a>.<br/>Notes:<br/>1.\tHuman-centred quality objectives relate to one or more of the following components of human-centred quality: <a href=\"#/Usability\">usability</a>, <a href=\"#/Accessibility\">accessibility</a>, <a href=\"#/User experience\">user experience</a> and avoidance of harm from use.<br/><br/>Examples of human-centred quality objectives:<br/>1.\tTravelers to the US must be able to pass through immigration twice as quickly as before (<a href=\"#/Usability\">usability</a>, <a href=\"#/Efficiency\">efficiency</a>).<br/>2.\tBlind <a href=\"#/User\">users</a> must be able to recognise and understand the content of the website (<a href=\"#/Accessibility\">accessibility</a>).<br/>3.\t<a href=\"#/User\">Users</a> must have a feeling of complete privacy when using the electronic voting booth (<a href=\"#/User experience\">user experience</a>).<br/>4.\tWhen using a system for creating prescriptions, the <a href=\"#/User\">user</a> must not be able to prescribe drugs that are incompatible with each other (avoidance of harm from use).</p>",
          "description-german": "<p>Die <a href=\"#/Ziel\">Ziele</a>, die für den <a href=\"#/Benutzer\">Benutzer</a> eines <a href=\"#/Interaktives System\">interaktiven Systems</a> bei der Entwicklung eines <a href=\"#/Interaktives System\">interaktiven Systems</a> erreicht werden sollen.<br/>Anmerkungen:<br/>1.\tMenschzentrierte Qualitätsziele beziehen sich auf eine oder mehrere der folgenden Komponenten menschzentrierter Qualität: <a href=\"#/Usability\">Usability</a>, <a href=\"#/Barrierefreiheit\">Barrierefreiheit</a>, <a href=\"#/Benutzererlebnis\">User Experience</a> und Vermeidung von Schäden durch die Benutzung.<br/><br/>Beispiele für menschzentrierte Qualitätsziele:</br>1.\tReisende in die USA müssen die Einreisekontrolle doppelt so schnell durchlaufen können wie bisher (<a href=\"#/Usability\">Usability</a>, <a href=\"#/Effizienz\">Effizienz</a>).<br/>2.\tBlinde <a href=\"#/Benutzer\">Benutzer</a> müssen in der Lage sein, den Inhalt der Website zu erkennen und zu verstehen (<a href=\"#/Barrierefreiheit\">Barrierefreiheit</a>).<br/>3.\t<a href=\"#/Benutzer\">Benutzer</a> müssen das Gefühl völliger Privatsphäre bei der Benutzung der elektronischen Wahlkabine haben (<a href=\"#/Benutzererlebnis\">User Experience</a>).<br/>4.\tWenn ein System zur Erstellung von Verschreibungen benutzt wird, darf der <a href=\"#/Benutzer\">Benutzer</a> nicht in der Lage sein, Arzneimittel zu verschreiben, die nicht miteinander kompatibel sind (Vermeidung von Schäden durch die Benutzung).</p>",
          "term-english": "Human-centred quality objectives",
          "term-german": "Menschzentrierte Qualitatsziele"
        },
        {
          
          "categories": [
            "Planung"
          ],
          "description-english": "<p>A description of the <a href=\"#/Human-centred design\">human-centred design</a> activities and deliverables for an <a href=\"#/Interactive system\">interactive system</a>.<br/>Notes:<br/>1.\tThe description can be an independent document or a part of the overall project plan.<br/>2.\tThe user experience project plan contains:<br/>&nbsp; \t a.\t The <a href=\"#/Human-centred quality objectives\">human-centred quality objectives</a> specific to the project;<br/>&nbsp; \t b.\tThe planned human-centred deliverables and the activities needed to produce those deliverables as part of the project;<br/>&nbsp; \t c.\t The time plan;<br/>&nbsp; \t d.\tThe cost estimate for the <a href=\"#/Human-centred design\">human-centred design</a> activities.</p>",
          "description-german": "<p>Eine Beschreibung der Aktivitäten und der UX-Ergebnisse der <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierten Gestaltung</a> für ein <a href=\"#/Interaktives System\">interaktives System</a>.<br />Anmerkungen:<br />1.\tDie Beschreibung kann ein unabhängiges Dokument oder ein Teil des Gesamtprojektplans sein.<br/>2.\tDer User Experience-Projektplan enthält:<br/>&nbsp; \t a.\tDie auf das Projekt bezogenen <a href=\"#/Menschzentrierte Qualitätsziele\">menschzentrierten Qualitätsziele</a>;<br/>&nbsp; \t b.\tDie geplanten menschzentrierten UX-Ergebnisse und die erforderlichen Aktivitäten, um diese UX-Ergebnisse im Rahmen des Projekts zu erstellen;<br/>&nbsp; \t c.\t Den Zeitplan;<br/>&nbsp; \t d.\tDen Kostenvoranschlag für die Aktivitäten der <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierten Gestaltung</a>.</p>",
          "term-english": "User experience project plan",
          "term-german": "User Experience Projektplan"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A professional who has one or more of the following responsibilities in a project:<br/>1.\tPlanning and managing the <a href=\"#/Human-centred design\">human-centred design<a/> process;<br/>2.\tIdentifying and describing the <a href=\"#/Context of use\">context of use</a>;<br/>3.\tDeriving the <a href=\"#/User requirement\">user requirements</a>;<br/>4.\tCreating the <a href=\"#/Information architect\">information architecture</a> and the <a href=\"#/Navigation structure\">navigation structure</a>;</br>5.\tDefining and conceiving the interaction between humans and the <a href=\"#/Interactive system\">interactive system</a> based on the <a href=\"#/Context of use\">context of use</a> and the <a href=\"#/User requirement\">user requirements</a>;<br/>6.\tDesigning the graphic part of the <a href=\"#/User interface\">user interface</a>;<br/>7.\tCarrying out <a href=\"#/Usability evaluation\">usability evaluations</a> of <a href=\"#/User interface\">user interfaces</a> in various stages of realisation.</p>",
          "description-german": "<p>Ein Fachmann, der einen oder mehrere der folgenden Verantwortungsbereiche in einem Projekt hat:<br/>1.\tPlanung und Management des Prozesses <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierter Gestaltung;</a><br/>2.\tIdentifizieren und Beschreiben des <a href=\"#/Nutzungskontext\">Nutzungskontextes</a>;<br/>3.\tAbleiten der <a href=\"#/Nutzungsanforderung\">Nutzungsanforderungen</a>;<br/>4.\tErstellen der <a href=\"#/Informationsarchitektur\">Informationsarchitektur</a> und der <a href=\"#/Navigationsstruktur\">Navigationsstruktur</a>;<br/>5.\t Definition und Konzeption der Interaktion zwischen Menschen und dem <a href=\"#/Interaktives System\">interaktiven System</a> basierend auf dem <a href=\"#/Nutzungskontext\">Nutzungskontext</a> und den <a href=\"#/Nutzungsanforderung\">Nutzungsanforderungen</a>;<br/>6.\tEntwerfen des grafischen Teils der <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a>;<br/>7.\tDurchführung von <a href=\"#/Usability-Evaluierung\">Usability-Evaluierungen</a> von <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstellen</a> in verschiedenen Umsetzungsphasen.</p>",
          "term-english": "User experience professional",
          "term-german": "User Experience Professional"
        },
        {
          "categories": [
            "Prinzipien"
          ],
          "description-english": "An aspect of an object that makes it obvious how the object could be used.\n",
          "description-german": "Aspekte eines Objektes, die verdeutlichen, wie das Objekt benutzt werden kann.\n",
          "term-english": "Affordance",
          "term-german": "Affordance"
        },
        {
          "categories": [
            "Planung",
            "Rollen"
          ],
          "description-english": "<p>The level of understanding and implementation of a systematic <a href=\"#/Human-centred design\">human-centred design</a> process within an organisation.<br />Notes: <br />1.\tUsability maturity can be expressed in a model with 4 levels:<br />&nbsp; \t a.\t Incomplete: The <a href=\"#/Human-centred design\">human-centred design</a> process is not implemented, or fails to achieve its process purpose.<br />&nbsp; \t Note: At this level there is little evidence of any systematic achievement of the process purpose. Product managers may say that they care about <a href=\"#/Usability\">usability</a>, but when it comes to spending budgets or making otherwise inconvenient decisions to achieve <a href=\"#/Usability\">usability</a>, nothing happens. <a href=\"#/Usability\">Usability</a> is fine if it comes for free, but no one is committed to delivering it.<br/>&nbsp; \t b.\t Performed: The <a href=\"#/Human-centred design\">human-centred design</a> process achieves its process purpose.<br/>&nbsp; \t Note: <a href=\"#/Usability\">Usability</a> is achieved by enthusiastic individuals using ad-hoc processes.<br/>&nbsp; \t c.\tManaged: The <a href=\"#/Human-centred design\">human-centred design</a> process is implemented in a managed fashion, and its work products are appropriately established, controlled and maintained.<br/>&nbsp; \t Note: The process is planned, monitored and adjusted.<br/>&nbsp; \t d.\tInnovating: The <a href=\"#/Human-centred design\">human-centred design</a> process is continuously improved to respond to change aligned with organisational <a href=\"#/Goal\">goals</a>.<br/>&nbsp; \tNote: Process innovation objectives are defined that support the relevant business <a href=\"#/Goal\">goals</a>.<br />2.\tTo boost usability maturity in an organisation that is at level incomplete or performed, carry out activities that clearly demonstrate the benefits of usability, for example:<br/>&nbsp; \t a.\tRun <a href=\"#/Usability test\">usability tests</a>. Invite <a href=\"#/Stakeholder\">stakeholders</a> to participate in the planning of the <a href=\"#/Usability test\">usability test</a>. Ask <a href=\"#/Stakeholders\">stakeholders</a> to observe <a href=\"#/Usability test session\">usability test sessions</a> and participate in writing the <a href=\"#/Usability test report\">usability test report</a>.<br/>&nbsp; \t b.\tAsk management and <a href=\"#/Stakeholder\">stakeholders</a> to leave the office and put themselves in the context of their users.<br/>&nbsp; \t c.\t Ask management and staff to use their own products and services, like a customer.They may never have used their company’s products.<br/>&nbsp; \t d.\tConduct <a href=\"#/Usability test\">usability tests</a> of <a href=\"#/Prototype\">prototypes</a> with project management as <a href=\"#/Observer\">observers</a> or <a href=\"#/Test participant\">test participants</a>.<br />3.\tThe usability maturity model is based on the process measurement framework for process capability in ISO 33020.</p>",
          "description-german": "<p>Das Verständnis und die Umsetzung eines systematischen Prozesses <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierter Gestaltung</a> in einer Organisation.<br />Anmerkungen:<br />1.\tsability-Reife kann in einem Modell mit 4 Stufen ausgedrückt werden:<br />&nbsp; \t a.\t Unvollständig: Der Prozess zur <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierten Gestaltung</a> ist nicht umgesetzt oder erreicht seinen Prozesszweck nicht.<br />&nbsp; \tAnmerkung: In diesem Reifegrad gibt es wenig Anzeichen dafür, dass der Prozess überhaupt in systematischer Weise zu Erfolgen führt.Produktmanager sagen, dass ihnen Usability wichtig sei, aber wenn es darum geht, Ressourcen bereitzustellen oder unbequeme Entscheidungen zugunsten der <a href=\"#/Usability\">Usability</a> zu treffen, geschieht nichts. <a href=\"#/Usability\">Usability</a> ist ok, solange sie kostenfrei zu haben ist, aber niemand hat sich darauf verpflichtet, sie zu liefern.<br />&nbsp; \t b.\t Ausgeführt: Der Prozess zur <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierten Gestaltung</a> erreicht seinen Prozesszweck.<br />&nbsp; \tAnmerkung: <a href=\"#/Usability\">Usability</a> wird von enthusiastischen Einzelpersonen mit Ad-hoc- Prozessen erreicht.<br />&nbsp; \t c.\t Gemanagt: Der Prozess zur <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierten Gestaltung</a> ist in einer geführten Weise implementiert und seine Arbeitsprodukte sind angemessen etabliert, kontrolliert und gepflegt.<br />&nbsp; \tAnmerkung: Der Prozess wird geplant, überwacht und angepasst.<br/>&nbsp; \t d.\t  Optimierend: Der Prozess zur <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierten Gestaltung</a> wird kontinuierlich verbessert, um auf Veränderungen zu reagieren, die sich aus organisatorischen <a href=\"#/Ziel\">Zielen</a> ergeben.<br />&nbsp; \tAnmerkung: Es sind Ziele für Prozessinnovationen definiert worden, die die relevanten Geschäftsziele unterstützen.<br />2.\t Um die Usability-Reife in einer Organisation zu erhöhen, die sich im Reifegrad „unvollständig“ oder „ausgeführt“ befindet, führen Sie Aktivitäten aus, welche die Vorteile der <a href=\"#/Usability\">Usability</a> klar verdeutlichen. Zum Beispiel:<br/>&nbsp; \t a.\t Führen Sie <a href=\"#/Usability-Test\">Usability-Tests</a> durch. Laden Sie <a href=\"#/Interessenvertreter\">Interessenvertreter</a> ein, sich an der Planung des <a href=\"#/Usability-Test\">Usability-Tests</a> zu beteiligen. Bitten Sie die <a href=\"#/Interessenvertreter\">Interessenvertreter</a>, <a href=\"#/Usability-Testsitzung\">Usability-Testsitzungen</a> zu beobachten und am Schreiben des <a href=\"#/Usability-Testbericht\">Usability- Testberichts</a> teilzunehmen.<br/>&nbsp; \t b.\t Bitten Sie das Management und die <a href=\"#/Interessenvertreter\">Interessenvertreter</a>, das Büro zu verlassen und sich in den Kontext der Benutzer zu begeben.<br/>&nbsp; \t c.\t Bitten Sie Management und Mitarbeiter, ihre eigenen Produkte und Dienstleistungen wie ein Kunde zu benutzen. Sie haben vielleicht nie die Produkte ihrer eigenen Firma benutzt.<br/>&nbsp; \t d.\t Führen Sie <a href=\"#/Usability-Test\">Usability-Tests</a> von <a href=\"#/Prototyp\">Prototypen</a> mit dem Projektmanagement als <a href=\"#/Beobachter\">Beobachter</a> oder als <a href=\"#/Usability-Testteilnehmer\">Usability-Testteilnehmer</a> durch.<br />3.\t Das Usability-Reifegradmodell basiert auf dem Rahmenwerk für Prozessmessungen zur Beurteilung der Prozessfähigkeit der ISO 33020.</p>",
          "term-english": "Usability maturity",
          "term-german": "Usability-Reife"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "<p>An approach to <a href=\"#/Human-centred design\">human-centred design</a> that integrates principles and methods for <a href=\"#/Usability\"> usability</a> and <a href=\"#/User experience\">user experience</a> into <a href=\"#/Agile development\">agile development</a>, thereby achieving economic advantages.<br />Notes: <br />1.\t<a href=\"#/Agile development\">Agile development</a> processes are the basis for lean UX, as the <a href=\"#/Iterative\">iterative</a> approach in teams and the realisation of small, well defined packages enables regular, small and fast <a href=\"#/Usability test\">usability tests</a>. The results from <a href=\"#/Usability test\">usability tests</a> are then directly used in the next iteration for the development.<br />2.\tLean UX assumes that at first everything is a hypothesis and consequently needs to be validated. The team learns through experiments with <a href=\"#/User\">users</a> in the <a href=\"#/Context of use\">context of use</a>. Failure is part of the learning process – not every hypothesis is validated, not every experiment provides the desired results.<br />3.\tInstead of carrying out extensive user research upfront, lean UX derives the hypotheses to be validated from known <a href=\"#/Context of use\">context of use</a> information, e.g. from <a href=\"#/Stakeholder\">stakeholder</a> <a href=\"#/Interview\">interviews</a>. These hypotheses are then validated or questioned in subsequent <a href=\"#/Contextual interview\">contextual interviews</a> or <a href=\"#/Usability test session\">usability test sessions</a>.</p>",
          "description-german": "<p>Ein Ansatz der <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierte Gestaltung</a>, der Prinzipien und Methoden für <a href=\"#/Usability\">Usability</a> und <a href=\"#/Benutzererlebnis\">User Experience</a> in die <a href=\"#/Agile Entwicklung\">agile Entwicklung</a> integriert und damit wirtschaftliche Vorteile erzielt.<br />Anmerkungen:<br />1.\tProzesse der <a href=\"#/Agilen Entwicklung\">agilen Entwicklung</a> sind die Basis für Lean UX, da der <a href=\"#/Iterativ\">iterative</a> Ansatz in Teams und die Realisierung kleiner, gut definierter Arbeitspakete regelmäßige, kleine und schnelle <a href=\"#/Usability-Test\">Usability-Tests</a> ermöglicht. Die Ergebnisse aus <a href=\"#/Usability-Test\">Usability-Tests</a> werden dann direkt in der nächsten Iteration der Entwicklung verwendet.<br />2.\tLean UX geht davon aus, dass alles zunächst eine Hypothese ist und folglich überprüft werden muss. Das Team lernt durch Experimente mit <a href=\"#/Benutzer\">Benutzern</a> im <a href=\"#/Nutzungskontext\">Nutzungskontext</a>. Scheitern ist Teil des Lernprozesses - nicht jede Hypothese wird bestätigt, nicht jedes Experiment liefert die gewünschten Ergebnisse.<br />3.\tAnstatt umfangreiche Benutzeruntersuchungen im Voraus durchzuführen, leitet Lean UX die zu überprüfenden Hypothesen aus Informationen des vorliegenden <a href=\"#/Nutzungskontext\">Nutzungskontextes</a> ab, z.B. aus <a href=\"#/Interview\">Interviews</a> mit <a href=\"#/Interessenvertreter\">Interessenvertretern</a>. Diese Hypothesen werden dann in nachfolgenden <a href=\"#/kontextuellen Interviews\">kontextuellen Interviews</a> oder <a href=\"#/Usability-Testsitzung\">Usability- Testsitzungen</a> überprüft oder hinterfragt.</p>",
          "term-english": "Lean UX",
          "term-german": "Lean UX"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "<p>A set of principles, methods and approaches for improving productivity by reducing documentation and unnecessary formalism, and focusing on <a href=\"#/Iterative\"> iterative</a> development in short cycles, collaboration and communication, incremental improvement and adaptation to changes.<br />Note: <br />1.\tIn an agile environment, design teams usually work in short development cycles, often called sprints or iterations, of one week to one month. In each cycle, the goal is to design, code and evaluate a feature or a group of features. Evaluation is carried out with<a href=\"#/User\" > users</a> and other <a href=\"#/Stakeholder\" > stakeholders</a>.<br />2.\t Usability methods that work well with agile development:<br/>&nbsp; \t a.\t Frequent <a href=\"#/Usability test\" >usability tests</a>.<a href=\"#/Usability test participant\" > Usability test participants</a> are recruited well in advance and scheduled each week, so whatever is ready can be <a href=\"#/Usability test\" >usability tested</a>. Appropriate <a href=\"#/Usability test task\" > usability test tasks</a> are prepared shortly before the <a href=\"#/Usability test\" >usability test</a> based on what is available.<br/>&nbsp; \t b.\t <a href=\"#/Low-fidelity prototype\" >Low-fidelity prototyping</a> with early mock-ups to prepare next <a href=\"#/Iterative\"> iterations</a>.</p>",
          "description-german": "<p>Eine Reihe von Prinzipien, Methoden und Ansätzen zur Produktivitätssteigerung durch Reduzierung von Dokumentation und unnötigem Formalismus mit Fokus auf <a href=\"#/Iterativ\"> iterativer </a> Entwicklung in kurzen Zyklen, Zusammenarbeit und Kommunikation, inkrementeller Verbesserung und Anpassung an Veränderungen.<br />Anmerkung:<br />1.\tIn der agilen Entwicklung arbeiten Designteams üblicherweise mit kurzen Entwicklungszyklen, sogenannten Sprints oder Iterationen, von einer Woche bis zu einem Monat. Das Ziel jedes Zyklus ist es, eine Funktion oder eine Gruppe von Funktionen zu gestalten, zu implementieren und zu testen. Die<a href=\"#/Usability-Evaluierung\">  Usability-Evaluierung</a> wird mit <a href=\"#/Benutzer\"> Benutzern</a> und anderen <a href=\"#/Interessenvertreter\"> Interessenvertretern</a> durchgeführt.<br />2.\tUsability-Methoden, die sich gut für die agile Entwicklung eignen, sind:<br/>&nbsp; \t a.\t Regelmäßige <a href=\"#/Usability-Test\" >  Usability-Tests</a>. Teilnehmer am <a href=\"#/Usability-Test\" > Usability-Test </a> werden im Vorausrekrutiert und jede Woche eingeplant, sodass alles, was fertig ist, einem <a href=\"#/Usability-Test\" >  Usability- Test </a> unterzogen werden kann. Entsprechende Usability-Testaufgaben werden kurz vor dem <a href=\"#/Usability-Test\" >  Usability-Test </a> auf Basis dessen, was bereitsteht, vorbereitet.<br/>&nbsp; \t b.\t <a href=\"#/Low-fidelity-Prototyp\" >Low-Fidelity-Prototyping </a>mit frühen Entwürfen zur Vorbereitung der nächsten Iterationen.</p>",
          "term-english": "Agile development",
          "term-german": "Agile Entwicklung"
        },
        {
          "categories": [
            "Planung",
            "Gestaltung",
            "Anforderungen"
          ],
          "description-english": "<p>A condition or capability that must be met or possessed by an <a href=\"#/Interactive system\">interactive system</a> to satisfy an agreement, standard, specification or other formally imposed documents<br />Notes: <br />1.\tA requirement should have a determinable condition that makes it possible to validate it.<br />2.\tThis curriculum defines the following types of requirements:<br /><a href=\"#/Market requirement\">Market requirement;</a>;<br />b.\t<a href=\"#/Organisational requirement\">Organisational requirement;</a>;<br />c.\t<a href=\"#/User requirement\">User requirement.</a>;<br />3.\tThis curriculum further distinguishes between the following types of <a href=\"#/User requirement\">user requirements</a>:<br/>a.\t<a href=\"#/Qualitative user requirement\">Qualitative user requirement</a>;<br/>b.\t<a href=\"#/Quantitative user requirement\">Quantitative user requirement</a>.</p>",
          "description-german": "<p>Eine Bedingung oder Fähigkeit, die ein <a href=\"#/Interaktives System\">interaktives System</a> erfüllen oder besitzen muss, um eine Vereinbarung, eine Norm, eine Spezifikation oder andere formal auferlegte Dokumente zu erfüllen.<br />Anmerkungen:<br />1.\tEine Anforderung sollte so konkret formuliert werden, dass sie validiert werden kann.<br />2.\tDieses Curriculum definiert die folgenden Arten von Anforderungen:<br />a.\t<a href=\"#/glossary?term=Interessenvertreteranforderung\">Marktanforderung;</a>,<br />b.\t<a href=\"#/Organisatorische Anforderung\">Organisatorische Anforderung;</a>,<br />c.\t<a href=\"#/Nutzungsanforderung\">Nutzungsanforderung.</a><br />3.\tDieses Curriculum unterscheidet weiter zwischen den folgenden Arten von <a href=\"#/Nutzungsanforderung\">Nutzungsanforderungen</a>:<br />a.\t<a href=\"#/Qualitative Nutzungsanforderung\">Qualitative Nutzungsanforderung;</a><br/>b.\t<a href=\"#/Quantitative Nutzungsanforderung\">Quantitative Nutzungsanforderung</a>.</p>",
          "term-english": "Requirement",
          "term-german": "Anforderung"
        },
        {
          "categories": [
            "Anforderungen",
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "<p>A set of activities undertaken in order to achieve a specific <a href=\"#/Goal\">goal</a>.<br />Notes:<br />1.\tMost tasks can be subdivided into subtasks \u2013that is, activities.<br/>2.\tA subtask does not in itself achieve a <a href=\"#/Goal\">goal</a> from the <a href=\"#/User\">user’s</a> point of view but is a necessary decision or action to reach the <a href=\"#/User\">user’s</a> <a href=\"#/Goal\">goals</a>. <br />3.\tMost subtasks lead to choices or inputs of the <a href=\"#/User\">User</a> when using the <a href=\"#/Interactive system\">Interactive system</a>.<br />4.\tSome subtasks can be subdivided into smaller subtasks.<br/>5.\tSubtasks are unsuitable as <a href=\"#/Usability test task\">usability test tasks</a>, because they are very specific.<br />Examples of tasks: <br />1.\tRenting a car is a task. <br />2.\tCancel a car rental reservation is a task. <br />3.\tRegistering on a car rental website is a subtask.<br/>4.\t“Log in to a car rental website” is a subtask.<br/>5.\tThe subtask, “Log in to a car rental website”, can be broken down into smaller subtasks, such as:<br/>a.\tEnter the username;<br/>b.\t Enter the password;<br/>c.\tTick the ‘Remember me’ checkbox.</p>",
          "description-german": "<p>Eine Menge von Aktivitäten, die unternommen werden, um ein bestimmtes <a href=\"#/Ziel\">Ziel</a> zu erreichen.<br />Anmerkungen:<br />1.\tDie meisten Aufgaben können in Teilaufgaben - also Aktivitäten - unterteilt werden.<br />2.\tMit einer einzelnen Teilaufgabe für sich erreicht man aus Sicht des <a href=\"#/Benutzer\">Benutzers</a> nicht das <a href=\"#/Ziel\">Ziel</a>, jedoch ist sie immer eine notwendige Entscheidung oder Maßnahme, um die <a href=\"#/Benutzer\">Ziele</a> des <a href=\"#/Benutzer\">Benutzers</a> zu erreichen.<br />3.\tDie meisten Teilaufgaben führen zu Auswahl- und Eingabemöglichkeiten für den <a href=\"#/Benutzer\">Benutzer</a> bei der Benutzung des <a href=\"#/Interaktives System\">interaktiven Systems</a>.<br/>4.\tEinige Teilaufgaben können in kleinere Teilaufgaben unterteilt werden.<br/>5.\tTeilaufgaben sind als <a href=\"#/Usability-Testaufgabe\">Usability-Testaufgaben</a> ungeeignet, weil sie sehr spezifisch sind.<br />Beispiele f\u00fcr Aufgaben: <br />1.\t„Ein Auto mieten“ ist eine Aufgabe.<br />2.\t\„Eine Mietwagenreservierung stornieren“ ist eine Aufgabe. <br />3.\t„Registrieren auf einer Autovermietungswebsite“ ist eine Teilaufgabe.<br />4.\t„Anmelden auf einer Autovermietungswebsite“ ist eine Teilaufgabe.<br />5.\tDie Teilaufgabe „Anmelden auf einer Autovermietungswebsite“ kann in kleinere Teilaufgaben heruntergebrochen werden, wie z.B.:<br/>a.\tEingeben des Benutzernamens;<br/>b.\tEingeben des Kennworts.<br/>c.\tAktivieren Sie das Kontrollkästchen Angemeldet bleiben</p>",
          "term-english": "Task",
          "term-german": "Aufgabe"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "<p>The property of an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> to support the <a href=\"#/glossary?term=User\">User</a> in the completion of the <a href=\"#/glossary?term=Task\">Task</a>, i.e. to base the functionality and the <a href=\"#/glossary?term=Dialogue\">Dialogue</a> on the task characteristics (rather than the technology chosen to perform the task).<br />Notes: <br />1.\tRecommendations for observing the dialogue principle:<br />a.\tThe dialogue should present the <a href=\"#/glossary?term=User\">User</a> with information related to the successful completion of the task.<br />b.\tThe <a href=\"#/glossary?term=Dialogue\">Dialogue</a> should avoid presenting the user with information not needed for the successful completion of relevant tasks.<br />c.\tThe format of input and output should be appropriate to the task. If typical input values are required for a task, these values should be available to the user automatically as defaults.<br />d.\tThe steps required by the dialogue should be appropriate to the completion of the task, i.e. necessary steps should be included and unnecessary steps should be avoided.<br />2.\tSuitability for the task is a dialogue principle.</p>",
          "description-german": "<p>Die Eigenschaft eines interaktives Systems den <a href=\"#/glossary?term=Benutzer\">Benutzer</a> zu unterst\u00fctzen, seine <a href=\"#/glossary?term=Aufgabe\">Aufgabe</a> zu erledigen, d. h., die Funktionalit\u00e4t und <a href=\"#/glossary?term=Dialog\">Dialog</a> an die charakteristischen Eigenschaften der Aufgabe anzupassen, anstatt an die zur Aufgabenerledigung eingesetzten Technologie.<br />Anmerkung:<br />1.\tEmpfehlungen zu Befolgung des Dialogprinzips:<br />a.\tDer Dialog sollte dem Benutzer solche Informationen anzeigen, die im Zusammenhang mit der erfolgreichen Erledigung der Aufgabe stehen.<br />b.\tDer Dialog sollte dem Benutzer keine Informationen anzeigen, die nicht f\u00fcr die erfolgreiche Erledigung relevanter Aufgaben ben\u00f6tigt werden.<br />c.\tDie Form der Eingabe und Ausgabe sollte der Aufgabe angepasst sein. Wenn f\u00fcr eine Aufgabe ganz bestimmte Eingabewerte typisch sind, sollten diese Werte dem Benutzer automatisch als voreingestellte Werte verf\u00fcgbar sein.<br />d.\tDie vom interaktiven System verlangten Dialogschritte sollten zum Arbeitsablauf passen, d. h. notwendige Dialogschritte sollten enthalten sein und unn\u00f6tige Dialogschritte sollten vermieden werden.<br />2.\tAufgaben\u00adangemessenheit ist ein Dialogprinzip.</p>",
          "term-english": "Suitability for the task",
          "term-german": "Aufgabenangemessenheit"
        },
        {
          "categories": [
            "Implementierung"
          ],
          "description-english": "<p>A description of the subtasks within a <a href=\"#/Task\">task</a> that have to be carried out in order to reach the <a href=\"#/User\">user’s</a> <a href=\"#/Goal\">goals</a>.<br />Note:<br />1.\tThe purpose of a task model is to provide a precise description of a <a href=\"#/Task\">task</a>.<br/>2.\tTask models should be written so <a href=\"#/User\">users</a> can understand and validate them.<br/>3.\tA task model describes a task’s contextual preconditions, the steps needed to carry out the task, and its intended outcomes, whereas <a href=\"#/As-is scenario\">as-is scenarios</a> and <a href=\"#/Use scenario\">use scenarios</a> describe how one or more tasks are carried out by a person.<br/>4.\tTask models are created during analysis to describe current <a href=\"#/Task\">tasks</a>. They are also created or updated during design to describe intended <a href=\"#/Task\">tasks</a>.<br/><br/>Example of task model:<br/>Setting:<br/>1.\t<a href=\"#/Interactive system\">Interactive system</a>: Ticket machine for public transport;<br/>2.\t<a href=\"#/User\">User</a>: Person using public transport;<br/>3.\t<a href=\"#/Task\">Task</a>: Purchase a ticket to allow travel from the user’s current location to a specific destination using public transport;<br/>4.\tPrecondition: The <a href=\"#/User\">user</a> has decided they need to be at a specific location at a specific time and will use public transport to get there;<br/>5.\t<a href=\"#/Goal\">Goal</a> (intended outcome): The user has purchased a suitable ticket.<br/>Subtasks:<br/>1.\tIdentify the available modes of transport to the destination, for example bus or underground.<br/>2.\tEstablish the departure time for each mode of transport, factoring in any transfers.<br/>3.\tEstablish the costs for each mode of transport.<br/>4.\tSelect the preferred mode of transport (based on departure time; duration; cost; any preferences for specific modes of transport).<br/>5.\tPay for the ticket.<br>6.\tTake the ticket.</p>",
          "description-german": "<p>Eine Beschreibung der Teilaufgaben innerhalb einer <a href=\"#/Aufgabe\">Aufgabe</a>, die ausgeführt werden müssen, um die <a href=\"#/Ziel\">Ziele</a> des <a href=\"#/Benutzer\">Benutzers</a> zu erreichen.<br/>Anmerkungen:<br/>1.\tDer Zweck eines Aufgabenmodells ist es, eine genaue Beschreibung einer <a href=\"#/Aufgabe\">Aufgabe</a> zu liefern.<br/>2.\tAufgabenmodelle sollten so geschrieben sein, dass <a href=\"#/Benutzer\">Benutzer</a> sie verstehen und validieren können.<br/>3.\tEin Aufgabenmodell beschreibt kontextuelle Vorbedingungen und die angestrebten Arbeitsergebnisse einer <a href=\"#/Aufgabe\">Aufgabe</a> sowie die Schritte, die zu ihrer Durchführung benötigt werden, während <a href=\"#/Ist-Szenario\">Ist-Szenarien</a> und <a href=\"#/Nutzungsszenario\">Nutzungsszenarien</a> beschreiben, wie eine oder mehrere Aufgaben von einer Person ausgeführt werden.<br/>4.\tAufgabenmodelle werden während der Analyse erstellt, um aktuelle <a href=\"#/Aufgabe\">Aufgaben</a> zu beschreiben. Sie werden auch während der Gestaltung erstellt oder aktualisiert, um zukünftige <a href=\"#/Aufgabe\">Aufgaben</a> zu beschreiben.<br/><br/>Beispiel für ein Aufgabenmodell:<br/>Rahmen:<br/>1.\t<a href=\"#/Interaktives System\">Interaktives System</a>: Fahrkartenautomat für den öffentlichen Verkehr;<br/>2.\t<a href=\"#/Benutzer\">Benutzer</a>: Person, die öffentliche Verkehrsmittel benutzt;<br/>3.\t<a href=\"#/Aufgabe\">Aufgabe</a>: Ein Ticket kaufen, mit dem man mit öffentlichen Verkehrsmitteln vom aktuellen Standort zu einem bestimmten Zielort kommen kann;<br/>4.\tVoraussetzung: Der <a href=\"#/Benutzer\">Benutzer</a> hat entschieden, dass er sich zu einem bestimmten Zeitpunkt an einem bestimmten Ort aufhalten muss und die öffentlichen Verkehrsmittel nutzen wird, um dorthin zu gelangen;<br/>5.\t<a href=\"#/Ziel\">Ziel</a> (angestrebtes Arbeitsergebnis): Der <a href=\"#/Benutzer\">Benutzer</a> hat ein passendes Ticket gekauft<br/>Teilaufgaben:<br/>1.\tIdentifizieren der verfügbaren Transportarten zum Ziel, zum Beispiel Bus oder U-Bahn.<br/>2.\tFestlegen der Abfahrtszeit für jede Transportart und Berücksichtigen etwaiger Umstiege.<br/>3.\tErmitteln der Kosten für jede Transportart.<br/>4.\tWählen der bevorzugten Transportart (basierend auf Abfahrtszeit; Dauer; Kosten; Präferenzen für bestimmte Transportarten).<br/>5.\tBezahlen des Tickets.<br/>6.\tTicket entgegennehmen.</p>",
          "term-english": "Task model",
          "term-german": "Aufgabenmodell"
        },
        {
          "categories": [
            "Prinzipien"
          ],
          "description-english": "<p>The extent to which an <a href=\"#/Interactive system\">interactive system</a> enables <a href=\"#/User\">users</a> to interact with it <a href=\"#/Effectiveness\">effectively</a>, <a href=\"#/Efficiency\">efficiently</a> and with <a href=\"#/Satisfaction\">satisfaction</a>, regardless of their level of vision, hearing, dexterity, cognition, physical mobility, etc.<br />Notes: <br />1.\tStandards and guidelines for accessibility are available; standards may be legally enforced in some markets. Relevant guidelines include W3C’s Web Content Accessibility Guidelines (WCAG) 2.0 and ISO 9241-171, Guidance on software accessibility.<br/>2.\tAssistive technologies, such as screen readers, may be used by people with visual impairments to help them interact with an <a href=\"#/Interactive system\">interactive system</a>. Additional descriptions, for example alt tags, can be added to the code of non-textual elements, such as pictures and diagrams, to convey their meaning.</p>",
          "description-german": "<p>Das Ausmaß, in dem ein <a href=\"#/Interaktives System\">interaktives System</a> den <a href=\"#/Benutzer\">Benutzern</a> ermöglicht, <a href=\"#/Effektivität\">effektiv</a>, <a href=\"#/Effizienz\">effizient</a> und <a href=\"#/Zufriedenstellung\">zufriedenstellend</a> zu interagieren, unbeachtet der Ausprägung ihres Sehens, ihres Hörens, ihrer Geschicklichkeit, ihres Denkens, ihrer physischen Beweglichkeit usw.<br />Anmerkungen:<br />1.\tNormen und Richtlinien für Barrierefreiheit sind verfügbar; Normen können in einigen Märkten gesetzlich durchgesetzt werden. Zu den relevanten Richtlinien gehören die Web Content Accessibility Guidelines (WCAG) 2.0 des W3C und die ISO 9241-171, Leitlinien für die Zugänglichkeit von Software.<br/>2.\tUnterstützungstechnologien wie Screenreader können von Menschen mit Sehbehinderungen benutzt werden, um ihnen bei der Interaktion mit einem <a href=\"#/Interaktives System\">interaktiven System</a> zu helfen. Zusätzliche Beschreibungen, beispielsweise Alt-Tags, können zum Code von nicht-textuellen Elementen, wie zum Beispiel Bildern und Diagrammen, hinzugefügt werden, um deren Bedeutung mitzuteilen.</p>",
          "term-english": "Accessibility",
          "term-german": "Barrierefreiheit"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> finding</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Usability-Befund\">Usability-Befund</a></p>",
          "term-english": "Finding",
          "term-german": "Befund"
        },
        {
          "categories": [
            "Rollen",
            "Anforderungen"
          ],
          "description-english": "<p>A person who interacts with an <a href=\"#/Interactive system\">interactive system</a>, or who uses the output of the system.<br/>Notes:<br />1.\tA user is one of the following: <br />a.\t<a href=\"#/Primary user\">Primary user</a>: a user who uses the <a href=\"#/Interactive system\">interactive system</a> for its intended purpose.<br />b.\t<a href=\"#/Secondary user\">Secondary user</a>: a user who carries out support <a href=\"#/Task\">tasks</a> with the <a href=\"#/Interactive system\">interactive system</a>, for example to maintain it or to train <a href=\"#/Primary user\">primary users</a>.<br />c.\t<a href=\"#/Indirect user\">Indirect user</a>: a user who uses the output of the <a href=\"#/Interactive system\">interactive system</a>, but who does not interact directly with it.<br/>2.\t<a href=\"#/Stakeholder\">Stakeholders</a> may or may not be users. <a href=\"#/Stakeholder\">Stakeholders</a> are not considered to be users if they are affected by an <a href=\"#/Interactive system\">interactive system</a> but don’t interact with it or use its output.<br/><br/>Examples of <a href=\"#/Stakeholder\">stakeholders</a> who are not users:<br/>1.\tThe non-technical managers of a team of technical users.<br/>2.\tPeople affected by the noise produced by an <a href=\"#/Interactive system\">interactive system</a>.<br/>3.\tMarketers affected by the impact of the use of the <a href=\"#/Interactive system\">interactive system</a> on the brand.<br/>Examples:<br/>1.\tA customer (user) uses a car reservation website to make a reservation – The customer is a <a href=\"#/Primary user\">primary user</a> of the system.<br/>2.\tA customer (user) calls the reservation centre where a customer service representative uses the same system to make the reservation for them – The customer is an <a href=\"#/Indirect user\">indirect user</a> of the system.</p>",
          "description-german": "<p>Eine Person, die mit einem <a href=\"#/Interaktives System\">interaktiven System</a> interagiert oder die Ergebnisse, die vom System erzeugt werden, benutzt.<br />Anmerkungen:<br />1.\tEin Benutzer ist einer der folgenden:<br />a.\t<a href=\"#/Primärer Benutzer\">Primärer Benutzer</a>: Ein <a href=\"#/Benutzer\">Benutzer</a>, der das <a href=\"#/Interaktives System\">interaktive System</a> für den beabsichtigten Zweck benutzt.<br />b.\t<a href=\"#/Sekundärer Benutzer\">Sekundärer Benutzer</a>: Ein <a href=\"#/Benutzer\">Benutzer</a>, der unterstützende Aufgaben mit dem <a href=\"#/Interaktives System\">interaktiven System</a> ausführt, beispielsweise um es zu warten oder um <a href=\"#/Primärer Benutzer\">primäre Benutzer</a> zu schulen.<br />c.\t<a href=\"#/Indirekter Benutzer\">Indirekter Benutzer</a>: Ein <a href=\"#/Benutzer\">Benutzer</a>, der die Ergebnisse des <a href=\"#/Interaktives System\">interaktiven Systems</a> nutzt, aber nicht direkt mit ihm interagiert.<br/>2.\t<a href=\"#/Interessenvertreter\">Interessenvertreter</a> können <a href=\"#/Benutzer\">Benutzer</a> sein oder nicht. <a href=\"#/Interessenvertreter\">Interessenvertreter</a> gelten nicht als <a href=\"#/Benutzer\">Benutzer</a>, wenn sie zwar von einem <a href=\"#/Interaktives System\">interaktiven System</a> betroffen sind, aber nicht mit ihm interagieren oder dessen Daten nutzen.<br/><br/>Beispiele für <a href=\"#/Interessenvertreter\">Interessenvertreter</a>, die keine <a href=\"#/Benutzer\">Benutzer</a> sind:<br/>1.\tProfessionelle Manager von Kundenbetreuungsteams<br/>2.\tMenschen, die von dem vom <a href=\"#/Interaktives System\">interaktiven System</a> erzeugten Lärm betroffen sind.<br/>3.\tMarketingspezialisten, die von den Auswirkungen der Nutzung des <a href=\"#/Interaktives System\">interaktiven Systems</a> auf die Marke betroffen sind.<br/>Beispiele:<br/>1.\tEin Kunde (<a href=\"#/Benutzer\">Benutzer</a>) nutzt eine Autoreservierungswebsite, um eine Reservierung vorzunehmen - der Kunde ist ein <a href=\"#/Primärer Benutzer\">primärer Benutzer</a> des Systems.<br/>2.\tEin Kunde (<a href=\"#/Benutzer\">Benutzer</a>) ruft die Buchungszentrale an, wo ein Kundendienstmitarbeiter dasselbe System verwendet, um die Reservierung für den Kunden vorzunehmen - der Kunde ist ein <a href=\"#/Indirekter Benutzer\">indirekter Benutzer</a> des Systems.</p>",
          "term-english": "User",
          "term-german": "Benutzer"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>An <a href=\"#/glossary?term=Evaluation\">Evaluation</a> where users are asked to report subjective data into a <a href=\"#/glossary?term=Questionnaire\">Questionnaire</a> based on their experience in using an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>.<br />Notes: <br />1.\t<a href=\"#/glossary?term=User\">User</a> surveys can be used to evaluate users' <a href=\"#/glossary?term=Satisfaction\">Satisfaction</a> with an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> and to gather <a href=\"#/glossary?term=Context+of+use\">Context of use</a> information.<br />2.\tWhen done correctly, surveys can produce a higher degree of certainty in <a href=\"#/glossary?term=Evaluation\">Evaluation</a> results than any qualitative research method.</p>",
          "description-german": "<p>Eine <a href=\"#/glossary?term=Evaluierung\">Evaluierung</a> bei der <a href=\"#/glossary?term=Benutzer\">Benutzer</a> subjektive Daten in einem <a href=\"#/glossary?term=Fragebogen\">Fragebogen</a> angeben sollen, basierend auf ihren Erfahrungen bei der Benutzung eines interaktiven Systems. <br />Anmerkung:<br />1\tBenutzerbefragungen k\u00f6nnen verwendet werden, um die <a href=\"#/glossary?term=Zufriedenstellung\">Zufriedenstellung</a> mit einem interaktiven System zu evaluieren und um Informationen \u00fcber den <a href=\"#/glossary?term=Nutzungskontext\">Nutzungskontext</a> zu sammeln.<br />2. \tBei korrekter Ausf\u00fchrung k\u00f6nnen Benutzerbefragungen einen h\u00f6heren Grad an Sicherheit bei Evaluierungsergebnissen erzielen als jede andere qualitative Untersuchungsmethode.</p>",
          "term-english": "User survey",
          "term-german": "Benutzerbefragung"
        },
        {
          "categories": [
            "Planung",
            "Gestaltung",
            "System"
          ],
          "description-english": "<p>Written or other information for users about an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>, how it works, and how to use it.<br />Note:<br />1.\t<a href=\"#/glossary?term=User\">User</a> documentation is a form of <a href=\"#/glossary?term=User+assistance\">User assistance</a>.</p>",
          "description-german": "<p>F\u00fcr <a href=\"#/glossary?term=Benutzer\">Benutzer</a> geschriebene oder andere Anleitungen zu dem interaktiven System, wie es funktioniert, und wie man es bedient.<br />Anmerkung:<br />1.\tBenutzer\u00addokumentation ist eine Form der <a href=\"#/glossary?term=Benutzerunterst%C3%BCtzung\">Benutzerunterst\u00fctzung</a>.</p>",
          "term-english": "User documentation",
          "term-german": "Benutzerdokumentation"
        },
        {
          "categories": [
            "Planung",
            "Evaluierung"
          ],
          "description-english": "<p>A user’s perceptions and responses that result from the use and/or anticipated use of an <a href=\"#/Interactive system\">interactive system</a>.<br />Notes: <br />1.\t<a href=\"#/User\">Users’</a> perceptions and responses include the <a href=\"#/User\">users’</a> emotions, beliefs, preferences, comfort, behaviours, and accomplishments that occur before, during and after use.<br />2.\tUser experience is a consequence of brand image, presentation, functionality, system performance, interactive behaviour, and assistive capabilities of the <a href=\"#/Interactive system\">interactive system</a>. It also results from the <a href=\"#/User\">user’s</a> internal and physical state resulting from prior experiences, attitudes, skills, abilities and personality; and from the <a href=\"#/Context of use\">context of use</a>.<br />3.\t<a href=\"#/Usability\">Usability</a> criteria can be used to evaluate aspects of user experience.<br/>4.\t<a href=\"#/Usability\">Usability</a> is mainly about the interaction with the <a href=\"#/Interactive system\">interactive system</a>. User experience also takes into account what happens before and after the interaction through to final use and recollections of use. See the examples below.<br/>5.\tUser experience is mainly about <a href=\"#/Satisfaction\">satisfaction</a> and fulfilment of expectations.<br/>6.\tUser experience is often referred to as UX.<br/>7.\tThe following figure shows the relationship between user experience and <a href=\"#/Usability\">usability</a>. <a href=\"#/Usability\">Usability</a> is <a href=\"#/Effectiveness\">effectiveness</a>, <a href=\"#/Efficiency\">efficiency</a> and <a href=\"#/Satisfaction\">satisfaction</a> during actual use, while user experience is the <a href=\"#/Satisfaction\">satisfaction</a> or dissatisfaction during anticipated use, actual use and after use.<br/><br/>Examples that illustrate the difference between usability and user experience:<br/>When ordering flowers for delivery from a flower store’s website:<br/>1.\t<a href=\"#/Usability problem\">Usability problems</a> encountered during checkout affect both the user experience and <a href=\"#/Usability\">usability</a>.<br/>2.\tThe quality of the physical flowers delivered affects only the user experience. It does not affect <a href=\"#/Usability\">usability</a> of the flower store’s website.<br/>3.\tThe experience of visiting the physical store affects the user experience of subsequent visits to the website. It does not affect the <a href=\"#/Usability\">usability</a> of the flower store’s website.</p>",
          "description-german": "<p>Die Wahrnehmungen und Reaktionen eines <a href=\"#/Benutzer\">Benutzers</a>, die sich aus der Benutzung und/oder der erwarteten Benutzung eines <a href=\"#/Interaktives System\">interaktiven Systems</a> ergeben.<br />Anmerkungen: <br />1.\tDie Wahrnehmungen und Reaktionen der <a href=\"#/Benutzer\">Benutzer</a> umfassen die Emotionen, Überzeugungen, Vorlieben, Komfort, Verhaltensweisen und Leistungen der <a href=\"#/Benutzer\">Benutzer</a>, die vor, während und nach der Benutzung auftreten<br />2.\tUser Experience ist eine Folge von Markenimage, Präsentation, Funktionalität, Systemleistung, interaktivem Verhalten und unterstützenden Fähigkeiten des <a href=\"#/Interaktives System\">interaktiven Systems</a>, des psychischen und physischen Zustands des <a href=\"#/Benutzer\">Benutzers</a> aufgrund seiner Erfahrungen, Einstellungen, Fähigkeiten und seiner Persönlichkeit sowie des <a href=\"#/Nutzungskontext\">Nutzungskontextes</a>.<br/>3.\t<a href=\"#/Usability\">Usability</a>-Kriterien können verwendet werden, um Aspekte der User Experience zu evaluieren.<br/>4.\t<a href=\"#/Usability\">Usability</a> bezieht sich hauptsächlich auf die Interaktion mit dem <a href=\"#/Interaktives System\">interaktiven System</a>. Die User Experience berücksichtigt auch, was vor und nach der Interaktion bis zur endgültigen Benutzung und den Erinnerungen an die Benutzung geschieht. Siehe die folgenden Beispiele unten.<br/>5.\tBei User Experience handelt es sich hauptsächlich um <a href=\"#/Zufriedenstellung\">Zufriedenstellung</a> und die Erfüllung von Erwartungen.<br/>6.\tUser Experience wird oft als UX bezeichnet.<br/>7.\tDie folgende Abbildung zeigt die Beziehung zwischen User Experience und <a href=\"#/Usability\">Usability</a>. <a href=\"#/Usability\">Usability</a> ist <a href=\"#/Effektivität\">Effektivität</a>, <a href=\"#/Effizienz\">Effizienz</a> und <a href=\"#/Zufriedenstellung\">Zufriedenstellung</a> während der tatsächlichen Benutzung, während User Experience die <a href=\"#/Zufriedenstellung\">Zufriedenstellung</a> oder Nicht-<a href=\"#/Zufriedenstellung\">Zufriedenstellung</a> während der erwarteten Benutzung, während der tatsächlichen Benutzung und nach der Benutzung ist.<br/><br/>Beispiele, die den Unterschied zwischen <a href=\"#/Usability\">Usability</a> und User Experience veranschaulichen:<br/>Wenn Blumen auf der Website eines Blumengeschäftes zur Auslieferung bestellt werden:<br>1.\t<a href=\"#/Usability-Problem\">Usability-Probleme</a> während des Bestellvorganges beeinflussen sowohl User Experience als auch <a href=\"#/Usability\">Usability</a>.<br/>2.\tDie Qualität der physisch gelieferten Blumen beeinflusst ausschließlich die User Experience. Sie hat keinen Einfluss auf die <a href=\"#/Usability\">Usability</a> der Website des Blumenladens.<br/>3.\tDie gemachte Erfahrung beim Besuch des physikalischen Geschäfts beeinflusst die User Experience zukünftiger Besuche der Website. Sie hat keinen Einfluss auf die <a href=\"#/Usability\">Usability</a> der Website des Blumengeschäftes.</p>",
          "term-english": "User experience",
          "term-german": "Benutzererlebnis"
        },
        {
          "categories": [
            "Rollen",
            "Planung",
            "Gestaltung",
            "Evaluierung"
          ],
          "description-english": "<p>A collection of users with the same or similar personal characteristics and <a href=\"#/Context of use\">Context of use</a> related to the <a href=\"#/Interactive system\">Interactive system</a>.</p>",
          "description-german": "<p>Eine Gruppe von Benutzern mit denselben oder ähnlichen Personenmerkmalen und <a href=\"#/Nutzungskontext\">Nutzungskontext</a> bezogen auf das <a href=\"#/Interaktives System\">interaktive System</a>.</p>",
          "term-english": "User group",
          "term-german": "Benutzergruppe"
        },
        {
          "categories": [
            "Rollen",
            "Evaluierung"
          ],
          "description-english": "<p>A generalised description of a <a href=\"#/User group\">user group</a>.<br/>Example of a user group profile for the website of a van rental company:<br/>1.\tCustomers – Private people who want to move house Private people rent a cargo van, for example because they want to move house. Most rentals are booked in advance and last 2-3 days. Most customers are one-time only customers.<br/>Customers have no particular experience with cargo vans – they are used to smaller cars. They are unfamiliar with business terms and conventions in cargo van rental. Customers are reasonably familiar with the internet and are reluctant to provide their email address unless there is an explicit guarantee that they won’t receive spam emails as a result.</p>",
          "description-german": "<p>Eine verallgemeinerte Beschreibung einer <a href=\"#/Benutzergruppe\">Benutzergruppe</a>.<br/>Beispiel für ein Benutzergruppenprofil für die Website eines Lieferwagenvermieters:<br/>1.\tKunden – Privatpersonen, die umziehen möchten Privatpersonen mieten einen Lieferwagen, zum Beispiel weil sie umziehen wollen. Die meisten Lieferwagen sind im Voraus für 2-3 Tage gebucht. Kunden buchen bei diesem Lieferwagenvermieter oft nur einmal.<br/>Kunden haben keine besonderen Erfahrungen mit Lieferwagen - sie sind kleinere Autos gewöhnt. Sie sind nicht vertraut mit den Geschäftsbedingungen und üblichen Gepflogenheiten für die Vermietung von Lieferwagen. Die Kunden sind mit dem Internet einigermaßen vertraut, zögern aber, ihre E-Mail- Adresse anzugeben, es sei denn, es gibt eine ausdrückliche Garantie, dass keine Spam- E-Mails folgen.</p>",
          "term-english": "User group profile",
          "term-german": "Benutzergruppenprofil"
        },
        {
          "categories": [
            "Planung",
            "Gestaltung",
            "System"
          ],
          "description-english": "<p>Information to help a <a href=\"#/User\">user</a> to interact with an <a href=\"#/Interactive system\">interactive system</a>.<br/>Notes:<br/>1.\tUser assistance can include describing the <a href=\"#/User interface\">user interface</a>, but it also focuses on how to help the user to best apply the capabilities of the <a href=\"#/Interactive system\">interactive system</a> to their needs.<br/>2.\tUser assistance incorporates all forms of help available to a <a href=\"#/User\">user</a>, for example<br/>a.\tUser documentation: Written or other information for <a href=\"#/User\">users</a> about an <a href=\"#/Interactive system\">interactive system</a>, how it works, and how to use it;<br/>b.\tOnline help: Assistance delivered through computer software that can be topic- oriented, procedural or reference information;<br/>c.\tSystem-initiated guidance: Unsolicited, explicit information about an event or a condition from an <a href=\"#/Interactive system\">interactive system</a> to a <a href=\"#/User\">user</a>.<br/><br/>Examples of system-initiated guidance are:<br/>a.\tMessages (informative, warning, error), for example “Your battery is almost empty. Please connect your notebook to a charger”;<br/>b.\tStatus information, for example “You have 7 new messages”;<br/>c\tInstructions, for example “Separate e-mail addresses by a space, comma, semicolon or line break.”</p>",
          "description-german": "<p>Informationen, um einem <a href=\"#/Benutzer\">Benutzer</a> bei der Interaktion mit einem <a href=\"#/Interaktives System\">interaktiven System</a> zu helfen.<br/>Anmerkungen:<br/>1.\tBenutzerunterstützung kann die Beschreibung der <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a> selbst beinhalten, aber auch Informationen, wie der <a href=\"#/Benutzer\">Benutzer</a> am besten die Möglichkeiten des <a href=\"#/Interaktives System\">interaktiven Systems</a> für die Erfüllung seiner Anforderungen einsetzen kann.<br/>2.\tBenutzerunterstützung schließt alle Formen von Hilfestellung, die für den <a href=\"#/Benutzer\">Benutzer</a> zur Verfügung stehen, ein, z.B.:<br/>a.\t Benutzerdokumentation: Schriftliche oder andere Informationen für <a href=\"#/Benutzer\">Benutzer</a> über ein <a href=\"#/Interaktives System\">interaktives System</a>, wie es funktioniert und wie es benutzt wird;<br/>b.\tOnlinehilfe: Unterstützung geliefert durch Computersoftware, die thematisch, prozedural oder verweisend sein kann;<br/>c.\tSysteminitiierte Benutzerführung: Unaufgeforderte explizite Information zu einem Ereignis oder einer Bedingung von einem <a href=\"#/Interaktives System\">interaktiven System</a> zu einem <a href=\"#/Benutzer\">Benutzer</a>.<br/><br/>Beispiele für systeminitiierte Benutzerführung sind:<br/>a.\tMeldungen (informativ, Warnung, Fehler), zum Beispiel „Ihr Akku ist fast leer. Bitte verbinden Sie Ihr Notebook mit einem Ladegerät“;<br/>b.\tStatusinformationen, zum Beispiel „Sie haben 7 neue Nachrichten“;<br/>c.\tAnweisungen, zum Beispiel „Trennen Sie E-Mail-Adressen durch ein Leerzeichen, Komma, Semikolon oder Zeilenumbruch.“</p>",
          "term-english": "User assistance",
          "term-german": "Benutzerunterst\u00fctzung"
        },
        {
          "categories": [
            "Gestaltung",
            "Implementierung",
            "Planung"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Human-centred+design\">Human-centred design</a>.</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Menschzentrierte+Gestaltung\">Menschzentrierte Gestaltung</a>.</p>",
          "term-english": "User-centred design",
          "term-german": "Benutzerzentrierte Gestaltung"
        },
        {
          "categories": [
            "Planung",
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p><a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a> that involves representative users performing specific tasks with the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> to enable identification of <a href=\"#/glossary?term=Usability\">Usability</a> problems, or measurements of <a href=\"#/glossary?term=Efficiency\">Efficiency</a>, <a href=\"#/glossary?term=Effectiveness\">Effectiveness</a>, <a href=\"#/glossary?term=User\">User</a> <a href=\"#/glossary?term=Satisfaction\">Satisfaction</a>, or other measures of <a href=\"#/glossary?term=User+experience\">User experience</a>.<br />Note:<br />1.\tSee <a href=\"#/glossary?term=Usability\">Usability</a> test.</p>",
          "description-german": "<p><a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a>, die repr\u00e4sentative <a href=\"#/glossary?term=Benutzer\">Benutzer</a> involviert, die bestimmte Aufgaben mit dem interaktiven System ausf\u00fchren, um die Identifikation von <a href=\"#/glossary?term=Usability\">Usability</a>-Problemen oder die Messung von <a href=\"#/glossary?term=Effizienz\">Effizienz</a>, <a href=\"#/glossary?term=Effektivit%C3%A4t\">Effektivit\u00e4t</a> und <a href=\"#/glossary?term=Zufriedenstellung\">Zufriedenstellung</a> zu erm\u00f6glichen.<br />Anmerkung:<br />1.\tSiehe <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a>.</p>",
          "term-english": "Usability evaluation \u2013  User based",
          "term-german": "Benutzerzentrierte Usability-Evaluierung"
        },
        {
          "categories": [
            "System",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "<p>All components of an <a href=\"#/Interactive system\">Interactive system</a> (software or hardware) that provide information and controls for the <a href=\"#/User\">User</a> to accomplish specific <a href=\"#/Task\">tasks</a> with the <a href=\"#/Interactive system\">Interactive system</a>.</p>",
          "description-german": "<p>Alle Bestandteile eines <a href=\"#/Interaktives System\">interaktiven Systems</a> (Software oder Hardware), die dem <a href=\"#/Benutzer\">Benutzer</a> Informationen und Steuerelemente zur Verfügung stellen, die es dem <a href=\"#/Benutzer\">Benutzer</a> erlauben, bestimmte <a href=\"#/Aufgabe\">Aufgaben</a> mit dem <a href=\"#/Interaktives System\">interaktiven System</a> zu erledigen.</p>",
          "term-english": "User interface",
          "term-german": "Benutzungsschnittstelle"
        },
        {
          "categories": [
            "Rollen",
            "System"
          ],
          "description-english": "<p>A person who watches users who discuss or carry out tasks that are related to the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>.<br />Notes:<br />1.\tObserver is a <a href=\"#/glossary?term=Role\">Role</a> in a <a href=\"#/glossary?term=Usability\">Usability</a> activity, such as an <a href=\"#/glossary?term=Observation\">Observation</a>, <a href=\"#/glossary?term=Usability\">Usability</a> test session or <a href=\"#/glossary?term=Focus+group\">Focus group</a>.<br />2.\tObservers do not interfere with the <a href=\"#/glossary?term=Usability\">Usability</a> activity. Observers may be actively involved in the analysis of the results.</p>",
          "description-german": "<p>Eine Person, die <a href=\"#/glossary?term=Benutzer\">Benutzer</a> beobachtet, die eine <a href=\"#/glossary?term=Aufgabe\">Aufgabe</a> diskutieren oder eine Aufgabe mittels eines interaktiven Systems ausf\u00fchren.<br />Anmerkungen:<br />1.\tBeobachter ist eine <a href=\"#/glossary?term=Rolle\">Rolle</a> w\u00e4hrend einer <a href=\"#/glossary?term=Usability\">Usability</a>-Aktivit\u00e4t, wie z.B. <a href=\"#/glossary?term=Beobachtung\">Beobachtung</a>, einer <a href=\"#/glossary?term=Usability-Testsitzung\">Usability-Testsitzung</a> oder einer <a href=\"#/glossary?term=Fokusgruppe\">Fokusgruppe</a>.<br />2.\tBeobachter d\u00fcrfen nicht aktiv in die <a href=\"#/glossary?term=Usability\">Usability</a>-Aktivit\u00e4t eingreifen. Sie k\u00f6nnen aber aktiv in die Analyse der Ergebnisse involviert sein.</p>",
          "term-english": "Observer",
          "term-german": "Beobachter"
        },
        {
          "categories": [
            "Prinzipien",
            "Anforderungen"
          ],
          "description-english": "<p>A method for gathering contextual information relating to <a href=\"#/User need\">user needs</a> in which an <a href=\"#/Observer\">observer</a> watches <a href=\"#/User\">users</a> who carry out <a href=\"#/Task\">tasks</a> that are related to the <a href=\"#/Interactive system\">interactive system</a>.<br />Notes:<br />1.\tThe <a href=\"#/Observer\">observer</a> behaves unobtrusively except that they may ask an occasional clarifying question.<br />2.\tIf no <a href=\"#/Interactive system\">interactive system</a> is available, existing procedures can be observed.<br />3.\tObservation should take place in a context that is as natural as possible, for example at the <a href=\"#/User\">user’s</a> workplace, their home or in a shop.</p>",
          "description-german": "<p>Eine Methode zum Sammeln von Kontextinformationen zu den Erfordernissen des Nutzungskontextes, bei der ein <a href=\"#/Beobachter\">Beobachter</a> <a href=\"#/Benutzer\">Benutzer</a> beobachtet, die mit dem <a href=\"#/Interaktives System\">interaktiven System</a> in Beziehung stehende <a href=\"#/Aufgabe\">Aufgaben</a> ausführen.<br />Anmerkungen:<br />1.\tDer <a href=\"#/Beobachter\">Beobachter</a> verhält sich unauffällig, außer es besteht gelegentlich die Notwendigkeit zu einer klärenden Frage.<br />2.\tDie Abläufe zur Erledigung der Aufgaben können auch beobachtet werden, wenn kein interaktives System verfügbar ist.<br />3.\tDie Beobachtung sollte in einem möglichst natürlichen Kontext stattfinden, z. B. am Arbeitsplatz des <a href=\"#/Benutzer\">Benutzers</a>, zu Hause oder in einem Geschäft.</p>",
          "term-english": "Observation",
          "term-german": "Beobachtung"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "<p>The first activity in an <a href=\"#/glossary?term=Interview\">Interview</a> or a <a href=\"#/glossary?term=Usability\">Usability</a> test session where the participant is informed about the purpose of the Interview or <a href=\"#/glossary?term=Usability+test\">Usability test</a> and what their <a href=\"#/glossary?term=Role\">Role</a> and contribution are.</p>",
          "description-german": "<p>Die erste Aktivit\u00e4t in einem <a href=\"#/glossary?term=Interview\">Interview</a> oder <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a>, in dem dem Teilnehmer erkl\u00e4rt wird, warum das <a href=\"#/glossary?term=Interview\">Interview</a> oder der <a href=\"#/glossary?term=Usability\">Usability</a>-Test durchgef\u00fchrt wird und was seine <a href=\"#/glossary?term=Rolle\">Rolle</a> und sein Beitrag ist</p>",
          "term-english": "Briefing",
          "term-german": "Briefing"
        },
        {
          "categories": [
            "Gestaltung",
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p>A general reusable solution to a commonly occurring <a href=\"#/glossary?term=Problem\">Problem</a> within a given context in software design that describes a design problem, a solution, and where this solution has been found to work.<br />Course note:<br />1.\tSeveral websites offer free access to a large selection of design patterns, for example www.welie.com</p>",
          "description-german": "<p>Eine wiederverwendbare L\u00f6sung f\u00fcr ein Gestaltungsproblem innerhalb eines Kontexts. Ein\u00a0Design Pattern beschreibt ein Gestaltungsproblem, eine L\u00f6sung und wo sich diese L\u00f6sung als funktionierend herausgestellt hat.<br />Anmerkung:<br />1.\tAuf Deutsch wird \u201edesign pattern\u201c manchmal als \u201eEntwurfsmuster\u201c bezeichnet.<br />Anmerkung zum Training:<br />1.\tVerschiedene Webseiten bieten freien Zugang zu einer gro\u00dfen Auswahl an Design Patterns z.B. www.welie.com </p>",
          "term-english": "Design pattern",
          "term-german": "Design Pattern"
        },
        {
          "categories": [
            "Gestaltung",
            "System",
            "Prinzipien",
            "Implementierung"
          ],
          "description-english": "<p>Interaction between a <a href=\"#/User\">User</a> and an <a href=\"#/Interactive system\">Interactive system</a> that consists of <a href=\"#/User\">user</a> actions (input) and responses from the <a href=\"#/Interactive system\">interactive system</a> (output) in order to achieve a <a href=\"#/Goal\">goal</a>.</p>",
          "description-german": "<p>Die Interaktion zwischen einem <a href=\"#/Benutzer\">Benutzer</a> und einem <a href=\"#/Interaktives System\">interaktiven System</a> in Form einer Folge von Handlungen des <a href=\"#/Benutzer\">Benutzers</a> (Eingaben) und Antworten des <a href=\"#/Interaktives System\">interaktiven Systems</a> (Ausgaben), um ein <a href=\"#/Ziel\">Ziel</a> zu erreichen.</p>",
          "term-english": "Dialogue",
          "term-german": "Dialog"
        },
        {
          "categories": [
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "<p>General goals for the design of useful and usable dialogues.<br />Notes:<br />1.\tDialogue principles are not bound to any specific technology or method.<br />2.\tISO 9241-110 lists the following seven dialogue principles:<br />a.\t<a href=\"#/Suitability for the task\">Suitability for the Task</a>;<br />b.\t<a href=\"#/Self-descriptiveness\">Self-descriptiveness</a>;<br />c.\t<a href=\"#/Conformity with user expectations\">Conformity with User expectations</a>;<br />d.\t<a href=\"#/Suitability for learning\">Suitability for learning</a>;<br />e.\t<a href=\"#/Controllability\">Controllability</a>;<br />f.\t<a href=\"#/Error tolerance\">Error tolerance</a>;<br />g.\t<a href=\"#/Suitability for individualization\">Suitability for individualization</a>.</p>",
          "description-german": "<p>Allgemeine Ziele für die Gestaltung von nützlichen und gebrauchstauglichen Dialogen.<br />Anmerkungen:<br />1.\tDialogprinzipien sind nicht an eine bestimmte Technologie oder Methode gebunden.<br />2.\tISO 9241-110 listet die folgenden sieben Dialogprinzipien auf:<br />a.\t<a href=\"#/Aufgabenangemessenheit\">Aufgabenangemessenheit</a>,<br />b.\t<a href=\"#/Selbstbeschreibungsfähigkeit\">Selbstbeschreibungsfähigkeit</a>,<br />c.\t<a href=\"#/Erwartungskonformität\">Erwartungskonformität;</a>,<br />d.\t<a href=\"#/Lernförderlichkeit\">Lernförderlichkeit;</a>,<br />e.\t<a href=\"#/Steuerbarkeit\">Steuerbarkeit</a>,<br />f.\t<a href=\"#/Fehlertoleranz\">Fehlertoleranz</a>,<br />g.\t<a href=\"#/Individualisierbarkeit\">Individualisierbarkeit</a>.</p>",
          "term-english": "Dialogue principles",
          "term-german": "Dialogprinzipien"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>Person who interacts with an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>.<br />Note: <br />1.\tA direct <a href=\"#/glossary?term=User\">User</a> is either a <a href=\"#/glossary?term=Primary+user\">Primary user</a>\u00a0or\u00a0a <a href=\"#/glossary?term=Secondary+user\">Secondary user</a>.<br />Examples of direct users: <br />1.\tA supporter in a call centre using a computer system is a direct user of the computer system, while customers who call the call centre are direct users of the support service, but indirect users of the computer system.</p>",
          "description-german": "<p>Eine Person, die mit einem interaktiven System interagiert.<br />Anmerkung<br />1.\tEin direkter <a href=\"#/glossary?term=Benutzer\">Benutzer</a> ist ein prim\u00e4rer ode rein <a href=\"#/glossary?term=Sekund%C3%A4rer+Benutzer\">Sekund\u00e4rer Benutzer</a>.<br />Beispiele f\u00fcr direkte <a href=\"#/glossary?term=Benutzer\">Benutzer</a><br />1.\tEin Kundenbetreuer in einem Call-Center der ein Computersystem nutzt ist ein direkter Benutzer des Computersystems. Ein Kunde der das Call-Center anruft ist zwar ein direkter Nutzer des Services des Kundenbetreuers aber nur ein <a href=\"#/glossary?term=Indirekter+Benutzer\">Indirekter Benutzer</a> des Computersystems. </p>",
          "term-english": "Direct user",
          "term-german": "Direkter Benutzer"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "<p>A measure given to a <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Problem\">Problem</a> from a <a href=\"#/glossary?term=Usability\">Usability</a> test to indicate the impact and criticality on the <a href=\"#/glossary?term=User\">User</a> experience and the consequences.<br />Notes:<br />1.\tThe <a href=\"#/glossary?term=Usability\">Usability</a> tester rates usability problems from the <a href=\"#/glossary?term=Usability+test\">Usability test</a> participants' point of view. Sometimes, the ratings are done in cooperation between the <a href=\"#/glossary?term=Usability+tester\">Usability tester</a> and a domain expert<br />2.\tTypical severity ratings are: Minor, severe, critical, and life-threatening.</p>",
          "description-german": "<p>Ein Ma\u00df f\u00fcr ein <a href=\"#/glossary?term=Usability-Problem\">Usability-Problem</a> aus einem <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a>, das die Auswirkung des <a href=\"#/glossary?term=Usability\">Usability</a>-Problems auf das <a href=\"#/glossary?term=Benutzererlebnis\">Benutzererlebnis</a> bewertet.<br />Anmerkungen: <br />1.\tDer <a href=\"#/glossary?term=Usability-Tester\">Usability-Tester</a> bewertet <a href=\"#/glossary?term=Usability\">Usability</a>-Probleme aus Sicht der <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a>. Manchmal erfolgen die Bewertungen in Kooperation des <a href=\"#/glossary?term=Usability\">Usability</a>-Testers mit einem Experten des Fachgebiets. <br />2.\tTypische Dringlichkeits\u00adstufen sind: niedrig, ernst, kritisch, lebensbedrohend.</p>",
          "term-english": "Severity rating",
          "term-german": "Dringlichkeitsstufe"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "<p>The accuracy and completeness with which users achieve specified <a href=\"#/Goal\">goals</a><br />Notes: <br />1.\tAccuracy is the extent to which an actual outcome matches an intended outcome.<br />2.\tCompleteness is the extent to which the use of the system, product, or service produces all intended outcomes.<br />3.\tCompleteness can be measured as the success rate: (Number of users who achieve a specified goal) / (Number of users who attempt to reach the specified goal).<br />4.\tEffectiveness is the attribute of <a href=\"#/Usability\">usability</a> that focuses on being able to accomplish <a href=\"#/Task\">tasks</a>.<br/><br />Example:\t<br />1.\tA car rental website does not offer <a href=\"#/User\">users</a> any opportunity to cancel a reservation. An analysis of the <a href=\"#/Context of use\">context of use</a> shows that <a href=\"#/User\">users</a> need this function. There is a problem with the effectiveness of the website.<br />2.\tA car rental website enables <a href=\"#/Users\">users</a> to cancel a reservation. A <a href=\"#/Usability test\">usability test</a> shows that only 5 out of 100 <a href=\"#/User\">users</a> are able to figure out how to cancel their reservation. Those who are able to figure out how to do it, do so quickly. There is a problem with the effectiveness but not with the <a href=\"#/Efficiency\">efficiency</a> of the website.</p>",
          "description-german": "<p>Die Genauigkeit und Vollständigkeit, mit der <a href=\"#/Benutzer\">Benutzer</a> festgelegte <a href=\"#/Ziel\">Ziele</a> erreichen.<br />Anmerkungen: <br />1.\tGenauigkeit ist das Ausmaß, in dem ein tatsächliches Ergebnis einem beabsichtigten Ergebnis entspricht.<br />2.\tVollständigkeit ist das Ausmaß, in dem die Benutzung des Systems, Produkts oder der Dienstleistung alle beabsichtigten Ergebnisse hervorbringt.<br />3.\tVollständigkeit kann als Erfolgsquote gemessen werden: (Anzahl der <a href=\"#/Benutzer\">Benutzer</a>, die ein bestimmtes <a href=\"#/Ziel\">Ziel</a> erreichen) / (Anzahl der <a href=\"#/Benutzer\">Benutzer</a>, die versuchen, das angegebene <a href=\"#/Ziel\">Ziel</a> zu erreichen).<br/>4.\tEffektivität ist ein Attribut von <a href=\"#/Usability\">Usability</a>, das auf die prinzipielle Fähigkeit zur Aufgabenerledigung verweist.<br/><br/>Beispiele:\t<br/>1.\tEine Autovermietungswebsite bietet <a href=\"#/Benutzer\">Benutzern</a> keine Möglichkeit, eine Reservierung zu stornieren. Eine Analyse des <a href=\"#/Nutzungskontext\">Nutzungskontextes</a> zeigt, dass <a href=\"#/Benutzer\">Benutzer</a> diese Funktion benötigen. Es gibt ein Problem mit der Effektivität der Website.<br/>2.\tEine Autovermietungswebsite ermöglicht es <a href=\"#/Benutzer\">Benutzern</a>, eine Reservierung zu stornieren. Ein <a href=\"#/Usability-Test\">Usability-Test</a> zeigt, dass nur 5 von 100 <a href=\"#/Benutzer\">Benutzern</a> herausfinden können, wie sie ihre Reservierung stornieren können. Diejenigen, die in der Lage sind, herauszufinden, wie es geht, tun dies schnell. Es gibt ein Problem mit der Effektivität, aber nicht mit der <a href=\"#/Effizienz\">Effizienz</a> der Website.</p>",
          "term-english": "Effectiveness",
          "term-german": "Effektivität"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "<p>The <a href=\"#/Resource\">resources</a> used in relation to the results achieved.<br />Notes:<br />1.\t<a href=\"#/Resource\">Resources</a> include time, human effort, financial and material <a href=\"#/Resources\">resources</a>.<br />2.\tEfficiency is the attribute of <a href=\"#/Usability\">usability</a> that focuses on being able to accomplish a task using acceptable amounts of <a href=\"#/Resources\">resources</a>.<br/><br/>Example:\t<br/>1.\tA car rental website enables <a href=\"#/User\">users</a> to cancel a reservation. A <a href=\"#/Usability test\">usability test</a> shows that the cancellation procedure is needlessly complicated even though all usability <a href=\"#/Test participant\">test participants</a> finally manage to cancel their reservations. The <a href=\"#/Effectiveness\">effectiveness</a> of the website is OK, since all <a href=\"#/User\">users</a> manage to achieve their <a href=\"#/Goal\">goal</a>. There is a problem with the efficiency of the website.<br/>2.\tSluggish response caused for example by an overloaded <a href=\"#/Interactive system\">interactive system</a> is a <a href=\"#/Usability problem\">usability problem</a>.</p>",
          "description-german": "<p>Die verwendeten <a href=\"#/Ressourcen\">Ressourcen</a> in Bezug auf die erzielten Ergebnisse.<br />Anmerkungen:<br />1.\t<a href=\"#/Ressourcen\">Ressourcen</a> umfassen Zeit, menschliche Anstrengung, finanzielle und materielle <a href=\"#/Ressourcen\">Ressourcen</a>.<br />2.\tEffizienz ist ein Attribut von <a href=\"#/Usability\">Usability</a>, das auf die Erledigung einer <a href=\"#/Aufgabe\">Aufgabe</a> mit einem akzeptablen Einsatz von <a href=\"#/Ressourcen\">Ressourcen</a> verweist.<br/><br/>Beispiele:<br/>1.\tEine Autovermietungswebsite ermöglicht <a href=\"#/Benutzer\">Benutzern</a>, eine Reservierung zu stornieren. Ein <a href=\"#/Usability-Test\">Usability-Test</a> zeigt, dass das Stornierungsverfahren unnötig kompliziert ist, obwohl alle <a href=\"#/Usability-Testteilnehmer\">Usability-Testteilnehmer</a> es schließlich schaffen, ihre Reservierungen zu stornieren. Die <a href=\"#/Effektivität\">Effektivität</a> der Website ist in Ordnung, da alle <a href=\"#/Benutzer\">Benutzer</a> ihr <a href=\"#/Ziel\">Ziel</a> erreichen. Es gibt ein Problem mit der Effizienz der Website.<br/>2.\tEine schlechte Antwortzeit, die beispielsweise durch ein überlastetes <a href=\"#/Interaktives System\">interaktives System</a> verursacht wird, stellt ein <a href=\"#/Usability-Problem\">Usability-Problem</a> dar.</p>",
          "term-english": "Efficiency",
          "term-german": "Effizienz"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "<p>A prerequisite identified as necessary for a <a href=\"#/User\">User</a>, or a <a href=\"#/User group\">User group</a>, to achieve a <a href=\"#/Goal\">Goal</a>, implied or stated within a specific <a href=\"#/Context of use\">Context of use</a>.<br />The purpose of user needs is to serve as a helpful intermediate step in the transformation of the <a href=\"#/Context of use\">context of use</a> information into comprehensive <a href=\"#/User requirement\">user requirements</a>.<br/>Notes:<br />1.\tA user need is independent of any proposed solution for that need. In other words: A user need must not reference for example \"the system\" or \"the website\".<br />2.\tUser needs are identified based on various approaches including <a href=\"#/Interview\">interviews</a> with <a href=\"#/User\">users</a>, <a href=\"#/Interview\">observations</a>, <a href=\"#/Interview\">user surveys</a>, <a href=\"#/Usability evaluation\">Usability evaluations</a>, expert analysis, etc.<br />3.\tUser needs often represent gaps (or discrepancies) between what should be and what is.<br />4.\tUser needs are transformed into <a href=\"#/User requirement\">user requirements</a>. <a href=\"#/User requirement\">User requirements</a> are then prioritised for implementation, taking the <a href=\"#/Context of use\">context of use</a>, user priorities, trade-offs with other <a href=\"#/Requirement\">requirements</a> and constraints into consideration.<br />Examples of user needs:<br />1.\tDuring a presentation with a fixed time limit (<a href=\"#/Context of use\">context of use</a>), a presenter (<a href=\"#/User\">user</a>) needs to know how much time is left (prerequisite) in order to complete the presentation in time (<a href=\"#/Goal\">goal</a>).<br />2.\tAs part of monitoring the cash flow (<a href=\"#/Context of use\">context of use</a>), an account manager (<a href=\"#/User\">user</a>) needs to know the number of invoices received and their amounts (prerequisite), in order to complete the daily accounting log (<a href=\"#/Goal\">goal</a>).<br/>See also the examples in <a href=\"#/User requirement\">User requirement</a>.</p>",
          "description-german": "<p>Eine Voraussetzung, die für einen <a href=\"#/Benutzer\">Benutzer</a> oder eine <a href=\"#/Benutzergruppe\">Benutzergruppe</a> als notwendig erachtet wird, um ein implizites oder im Rahmen eines bestimmten <a href=\"#/Nutzungskontext\">Nutzungskontextes</a> vorgegebenes <a href=\"#/Benutzergruppe\">Ziel</a> zu erreichen.<br/>Erfordernisse haben den Zweck als ein hilfreicher Zwischenschritt bei der Überführung von Informationen aus dem <a href=\"#/Nutzungskontext\">Nutzungskontext</a> in umfassende <a href=\"#/Nutzungsanforderung\">Nutzungsanforderungen</a> zu dienen.<br />Anmerkungen:<br />1.\tEin Erfordernis ist unabhängig von einer vorgeschlagenen Lösung für dieses Erfordernis. Mit anderen Worten, ein Erfordernis darf sich nicht auf „das System“ oder „die Website“ beziehen.<br />2.\tErfordernisse werden auf der Basis verschiedener Methoden identifiziert, einschließlich  <a href=\"#/Interview\">Interviews</a>,  <a href=\"#/Beobachtung\">Beobachtungen</a>,  <a href=\"#/Benutzerbefragung\">Benutzerbefragungen</a>,  <a href=\"#/Usability-Evaluierung\">Usability-Evaluierungen</a>, Expertenanalysen usw.<br />3.\tErfordernisse stellen oft Lücken (oder Diskrepanzen) zwischen dem was ist, und dem was sein soll, dar.<br />4.\tErfordernisse werden in <a href=\"#/Beobachtung\">Nutzungsanforderungen</a> überführt, die dann unter Berücksichtigung des <a href=\"#/Nutzungskontext\">Nutzungskontextes</a>, der Benutzerprioritäten, Kompromissen mit weiteren <a href=\"#/Anforderung\">Anforderungen</a> und gegebenen Rahmenbedingungen für die Umsetzung priorisiert werden.<br/>Beispiele für Erfordernisse: <br />1.\tWährend einer Präsentation mit einem festen Zeitlimit (<a href=\"#/Nutzungskontext\">Nutzungskontext</a>) muss ein Präsentator (<a href=\"#/Benutzer\">Benutzer</a>) wissen, wie viel Zeit noch verbleibt (Voraussetzung), um die Präsentation rechtzeitig zu beenden (<a href=\"#/Ziel\">Ziel</a>).<br />1.\tIm Rahmen der Überwachung des Cashflows (<a href=\"#/Nutzungskontext\">Nutzungskontext</a>) muss ein Account Manager (<a href=\"#/Benutzer\">Benutzer</a>) die Anzahl der erhaltenen Rechnungen und deren Beträge (Voraussetzung) kennen, um das tägliche Abrechnungsprotokoll zu vervollständigen (<a href=\"#/Ziel\">Ziel</a>).<br/>Siehe auch die Beispiele in <a href=\"#/Nutzungsanforderung\">Nutzungsanforderung</a>.</p>",
          "term-english": "User need",
          "term-german": "Erfordernis"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "<p>Correspondence to predictable contextual needs of the <a href=\"#/glossary?term=User\">User</a> and to commonly accepted conventions.<br />Notes:<br />1.\t<a href=\"#/glossary?term=Consistency\">Consistency</a> is an aspect of Conformity with user expectations.<br />2.\tConformity with user expectations is a <a href=\"#/glossary?term=Dialogue\">Dialogue</a> principle.</p>",
          "description-german": "<p>\u00dcbereinstimmung mit den aus dem <a href=\"#/glossary?term=Nutzungskontext\">Nutzungskontext</a> heraus vorhersehbaren Benutzerbelangen sowie allgemein anerkannten Konventionen.<br />Anmerkungen:<br />1.\t<a href=\"#/glossary?term=Konsistenz\">Konsistenz</a> ist ein Aspekt der Erwartungskonformit\u00e4t.<br />2.\tErwartungskonformit\u00e4t ist ein Dialogprinzip.<br /></p>",
          "term-english": "Conformity with user expectations",
          "term-german": "Erwartungskonformität"
        },
        {
          "categories": [
            "Test",
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> evaluation.</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a></p>",
          "term-english": "Evaluation",
          "term-german": "Evaluierung"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p>A document reporting the results of a <a href=\"#/glossary?term=Usability\">Usability</a> test, an <a href=\"#/glossary?term=Inspection\">Inspection</a> or a <a href=\"#/glossary?term=User\">User</a> survey.<br />Note:<br />1.\tThe <a href=\"#/glossary?term=Evaluation\">Evaluation</a> report for a <a href=\"#/glossary?term=Usability\">Usability</a> test is usually referred to as a usability <a href=\"#/glossary?term=Test+report\">Test report</a>.</p>",
          "description-german": "<p>Ein Dokument, in dem die Ergebnisse eines <a href=\"#/glossary?term=Usability\">Usability</a>-Tests, einer <a href=\"#/glossary?term=Inspektion\">Inspektion</a> oder einer <a href=\"#/glossary?term=Benutzerbefragung\">Benutzerbefragung</a> dokumentiert werden.<br />Anmerkung:<br />1.\tDas Dokument f\u00fcr einen <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> wird \u00fcblicherweise als <a href=\"#/glossary?term=Usability-Testbericht\">Usability-Testbericht</a> bezeichnet.</p>",
          "term-english": "Evaluation report",
          "term-german": "Evaluierungsbericht"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Moderator\">Moderator</a></p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Moderator\">Moderator</a></p>",
          "term-english": "Facilitator",
          "term-german": "Facilitator"
        },
        {
          "categories": [
            "Anforderungen",
            "Evaluierung"
          ],
          "description-english": "<p>The property of a <a href=\"#/glossary?term=Dialogue\">Dialogue</a> to achieve the intended result with either no, or minimal, corrective action by the <a href=\"#/glossary?term=User\">User</a> despite evident errors in input. <br />Note:<br />1.\tError tolerance is a <a href=\"#/glossary?term=Dialogue\">Dialogue</a> principle.<br />Examples of error tolerance:<br />1.\tWhen an error occurs, the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> should provide a precise and comprehensible explanation. The explanation must also be constructive \u2013 that is, it must suggest a solution to the <a href=\"#/glossary?term=Problem\">Problem</a>.<br />2.\tIf severe consequences could result from a user action, the interactive system should provide explanation and request confirmation before carrying out the action.</p>",
          "description-german": "<p>Die Eigenschaft eines Dialogs, das beabsichtigte Arbeitsergebnis trotz erkennbar fehlerhafter Eingaben entweder mit keinem oder mit minimalem Korrekturaufwand seitens des Benutzers zu erreichen.<br />Anmerkung:<br />1.\tFehlertoleranz ist ein Dialogprinzip.<br />Beispiele f\u00fcr Fehlertoleranz:<br />1.\tWenn ein Fehler auftritt, sollte das interaktive System eine genaue und verst\u00e4ndliche Erkl\u00e4rung anbieten und konstruktiv eine L\u00f6sung vorschlagen, also was als n\u00e4chstes zu tun ist.<br />2.\tWenn aus einer Benutzeraktion schwerwiegende Folgen entstehen k\u00f6nnen, dann sollte das interaktive System eine Erkl\u00e4rung anbieten und eine Best\u00e4tigung vor der Durchf\u00fchrung der Aktion durch den <a href=\"#/glossary?term=Benutzer\">Benutzer</a> einholen.</p>",
          "term-english": "Error tolerance",
          "term-german": "Fehlertoleranz"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Rollen"
          ],
          "description-english": "<p>A focused discussion where a <a href=\"#/Moderator\">Moderator</a> leads a group of participants through a set of questions on a particular topic.<br />Notes: <br />1.\tDo not use focus groups for <a href=\"#/Usability evaluation\">Usability Evaluation</a>. Focus groups are about opinion. In comparison, <a href=\"#/Usability test\">Usability tests</a> are about observing actual <a href=\"#/User\">User</a> behaviour.</p>",
          "description-german": "<p>Eine gezielte Diskussion, bei der ein  <a href=\"#/Moderator\">Moderator</a> eine Gruppe von Teilnehmern durch eine Menge von Fragen zu einem bestimmten Thema f\u00fchrt. <br />Anmerkungen: <br />1.\tDie Durchf\u00fchrung von Fokusgruppen ist kein Ersatz f\u00fcr eine  <a href=\"#/Usability-Evaluierung\">Usability-Evaluierung</a>. Fokusgruppen befassen sich mit Meinungen, <a href=\"#/Usability-Test\">Usability-Tests</a> mit der Beobachtung des tats\u00e4chlichen Benutzerverhaltens.</p>",
          "term-english": "Focus group",
          "term-german": "Fokusgruppe"
        },
        {
          "categories": [
            "Evaluierung",
            "Test",
            "Prinzipien"
          ],
          "description-english": "<p>A type of <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a> designed and used to improve an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>, especially when it is still being designed.<br />Note: <br />1.\tCompare to <a href=\"#/glossary?term=Summative+usability+evaluation\">Summative usability evaluation</a>.</p>",
          "description-german": "<p>Eine Art der <a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a> die hilft, das Design f\u00fcr ein <a href=\"#/glossary?term=Interaktives+System\">Interaktives System</a> zu verbessern, besonders w\u00e4hrend es noch gestaltet wird.<br />Anmerkung:<br />1.\tVergleiche mit <a href=\"#/glossary?term=Summative+Usability-Evaluierung\">Summative Usability-Evaluierung</a>.</p>",
          "term-english": "Formative usability evaluation",
          "term-german": "Formative Usability-Evaluierung"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>A set of questions that is used collect data from users, often in a <a href=\"#/glossary?term=User\">User</a> survey.<br />Notes: <br />1.\tTwo important uses of questionnaires in <a href=\"#/glossary?term=Usability\">Usability</a> are:<br />a.\tTo understand the <a href=\"#/glossary?term=Context+of+use\">Context of use</a>. Questions are about the users' experience with the current <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> and their expectations for the new interactive system. Questions are answered in text form.<br />b.\tTo evaluate the <a href=\"#/glossary?term=User+experience\">User experience</a> before, during and after the use of an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>.<br />2.\tQuestionnaires must be usable. They must adhere to <a href=\"#/glossary?term=Dialogue\">Dialogue</a> principles, for example<br />a.\tEach question must contribute significantly to the purpose of the questionnaire;<br />b.\tQuestions must be easy to understand; <br />c.\tThe questionnaire must keep users informed of their progress;<br />d.\tThe questionnaire must be <a href=\"#/glossary?term=Usability\">Usability</a> tested.<br />3.\tThis definition applies to both digital and paper questionnaires.<br />Examples of questions to understand <a href=\"#/glossary?term=Context+of+use\">Context of use</a>:<br />1.\t\"When did you last use the car rental website? What was your business?\"<br />2.\t\"What do you expect from a car rental website?\"<br />Examples of questions to evaluate <a href=\"#/glossary?term=Satisfaction\">Satisfaction</a>:<br />1.\t\"On a scale from 1 to 5, where 1 means \"strongly disagree\", 3 means \"neutral\", and 5\u00a0means \"strongly agree\", please rate the following statements:<br />a.\tThe new car rental website looks cool.<br />b.\tThe new car rental website is easy to use.<br />c.\tThe new car rental website lets me rent cars quickly.</p>",
          "description-german": "<p>Ein Satz von Fragen, der von Benutzern in einer <a href=\"#/glossary?term=Benutzerbefragung\">Benutzerbefragung</a> beantwortet wird, um  Daten zu sammeln.<br />Anmerkungen: <br />1.\tZwei wichtige Verwendungszwecke von Frageb\u00f6gen im Bereich <a href=\"#/glossary?term=Usability\">Usability</a> sind:<br />a.\tUm den <a href=\"#/glossary?term=Nutzungskontext\">Nutzungskontext</a> zu verstehen. Die gestellten Fragen beziehen sich auf die Erfahurngen die ein <a href=\"#/glossary?term=Benutzer\">Benutzer</a> mit dem momentanen, interaktiven System gemacht hat und die Erwartungen, die er an ein neues <a href=\"#/glossary?term=Interaktives+System\">Interaktives System</a> stellt. <br />b.\tUm das <a href=\"#/glossary?term=Benutzererlebnis\">Benutzererlebnis</a> vor, w\u00e4hrend und nach der Benutzung eines interaktiven Systems zu evaluieren.<br />2.\tFrageb\u00f6gen m\u00fcssen benutzbar sein. Sie m\u00fcssen den <a href=\"#/glossary?term=Dialogprinzipien\">Dialogprinzipien</a> folgen, z.B.<br />a.\tJede Frage muss einen wesentlichen Beitrag zur Beantwortung der globalen Fragestellung liefern.<br />b.\tFragen m\u00fcssen leicht zu verstehen sein.<br />c.\tDer Fragebogen muss die <a href=\"#/glossary?term=Benutzer\">Benutzer</a> hinsichtlich ihres Fortschritts in der Beantwortung der Fragen auf dem Laufenden halten.<br />d.\tDer Fragebogen muss anhand eines <a href=\"#/glossary?term=Usability\">Usability</a>-Tests optimiert worden sein.<br />3.\tDiese Definition bezieht sich sowohl auf Digitale- als auch auf Papierfrageb\u00f6gen.<br />Beispielfragen um den <a href=\"#/glossary?term=Nutzungskontext\">Nutzungskontext</a> zu verstehen:<br />1. \t\u201cWann haben Sie das letzte Mal die Website f\u00fcr Autovermietung benutzt? Was wollten Sie auf der Seite tun?\u201c<br />2.\t\u201cWas erwarten Sie von einer Website f\u00fcr Autovermietung?\u201d<br />Beispiele f\u00fcr Fragen zur <a href=\"#/glossary?term=Evaluierung\">Evaluierung</a> der <a href=\"#/glossary?term=Zufriedenstellung\">Zufriedenstellung</a>:<br />1.\t\u201cAuf einer Skala von 1 bis 5, bei der 1 f\u00fcr \u201cstimme gar nicht zu\u201c, 3 \u201eneutral\u201c und 5 f\u00fcr \u201estimme voll  zu\u201c steht, bewerten Sie bitte die folgenden Aussagen:<br />a.\tDie neue Website f\u00fcr Autovermietung sieht cool aus.<br />b.\tDie neue Website f\u00fcr Autovermietung ist einfach zu benutzen.<br />c.\tDie neue Website f\u00fcr Autovermietung erm\u00f6glicht schnelles Mieten von Autos.</p>",
          "term-english": "Questionnaire",
          "term-german": "Fragebogen"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>An <a href=\"#/Interview\">Interview</a> question that requires an answer from a predetermined set of alternatives, for example yes and no.<br />Notes:<br />1.\tAvoid several closed questions in sequence. They stop users talking because they sound like a police interrogation. <br />2.\tCompare to <a href=\"#/Open question\">Open question</a>. <br />Example of a closed question: <br />1.\t\"Have you ever rented a car?\"<br /> Corresponding <a href=\"#/Open question\">open question</a> might be: \"Please tell me about the last time you rented a car.\"</p>",
          "description-german": "<p>Eine <a href=\"#/Interview\">Interviewfrage</a> die eine Antwort aus einem vordefinierten Satz von Alternativen fordert, oft einfach \u201eja\u201c oder \u201enein\u201c.<br />Anmerkungen: <br />1.\tVermeide mehrere geschlossene Fragen hintereinander. Sie unterbrechen den Redefluss der <a href=\"#/Benutzer\">Benutzer</a> weil sie sich wie ein Polizeiverh\u00f6r anh\u00f6ren. <br />2.\tVergleiche mit <a href=\"#/Offene Frage\">Offener Frage</a>.<br />Beispiel f\u00fcr geschlossene Frage:<br />1.\t\u201eHaben Sie jemals ein Auto gemietet?\u201c Entsprechende <a href=\"#/Offene Frage\">offene Frage</a>: \u201eBitte erz\u00e4hlen Sie mir von dem letzten Mal wo Sie ein Auto gemietet haben.\u201c</p>",
          "term-english": "Closed question",
          "term-german": "Geschlossene Frage"
        },
        {
          "categories": [
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=User\">User</a> interface <a href=\"#/glossary?term=Guideline\">Guideline</a>.</p>",
          "description-german": "<p>Konkrete, spezifische Instruktion oder Empfehlung, die wenig Interpretationsspielraum l\u00e4sst, so dass verschiedene Designer sie \u00e4hnlich umsetzen.<br />Anmerkungen:<br />1. \tSammlungen von Gestaltungsregeln werden als Styleguides bezeichnet.<br />2. \tDesign Patterns m\u00fcssen relevante Gestaltungsregeln erf\u00fcllen.<br />3. \tVergleiche Gestaltungsregel mit<br />a.\tDialogprinzip \u2013 ein generelles <a href=\"#/glossary?term=Ziel\">Ziel</a> f\u00fcr das Dialogdesign. Evtl. schwierig anzuwenden auf Grund der Allgemeing\u00fcltigkeit.<br />b.\t<a href=\"#/glossary?term=Heuristik\">Heuristik</a> \u2013 Eine Daumenregel die bei der Erreichung von <a href=\"#/glossary?term=Dialogprinzipien\">Dialogprinzipien</a> hilft. Diese ist spezifischer und einfacher anzuwenden als ein Dialogprinzip.<br />Beispiele f\u00fcr Gestaltungsregeln:<br />1.\tF\u00fcr alle Steuerelemente, wie z.B. Buttons, w\u00e4hle den zuverl\u00e4ssigsten, sichersten Wert als Voreinstellung um den Datenverlust bzw. den risikablen Systemzugriff zu verhindern. Wenn Sicherheit und Schutz der Daten keine relevanten Faktoren sind, w\u00e4hle den h\u00e4ufigsten oder bequemsten Wert.<br />2. \tDas Firmenlogo muss in der oberen, linken Ecke jeder Seite erscheinen. Die Position muss exakt die gleiche sein wie die auf der Homepage. Klicken auf das Logo muss die Anzeige der Homepage zur Folge haben.<br />3. \tDie H\u00f6he eines Buttons muss 23 Pixel betragen</p>",
          "term-english": "Guideline",
          "term-german": "Gestaltungsregel"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "<p>A generally recognized rule of thumb that helps to achieve <a href=\"#/glossary?term=Usability\">Usability</a>.<br />Notes:<br />1.\tHeuristics mainly serve to ensure usability (rather than usefulness).<br />2.\tCompare heuristic to<br />a.\t<a href=\"#/glossary?term=Dialogue\">Dialogue</a> principle \u2013 a general <a href=\"#/glossary?term=Goal\">Goal</a> for the design of dialogues. May be difficult to apply because of its generality<br />b.\t<a href=\"#/glossary?term=User\">User</a> interface <a href=\"#/glossary?term=Guideline\">Guideline</a> \u2013 Low-level specific rule for interface design.<br />Examples of generally recognized heuristics (by Jakob Nielsen and Rolf Molich):<br />1.\tFollow real world conventions. <br />For example, speak the users' language.<br />2.\tFollow platform conventions.<br />3.\tMinimize the user's memory load by making objects, actions, and options visible.<br />4.\tProvide appropriate feedback within reasonable time.<br />5.\tHelp users recognize, diagnose, and recover from errors.</p>",
          "description-german": "<p>Eine allgemein anerkannte Daumenregel die hilft <a href=\"#/glossary?term=Usability\">Usability</a> zu erreichen.<br />Anmerkungen:<br />Heuristiken dienen haupts\u00e4chlich dazu, Usability zu gew\u00e4hrleisten (und nicht N\u00fctzlichkeit). <br />Vergleiche Heuristik mit<br />a.  Dialogprinzip \u2013 ein allgemeines <a href=\"#/glossary?term=Ziel\">Ziel</a> f\u00fcr das Design von Dialogen. Ist m\u00f6glicherweise schwieriger anzuwenden auf Grund seiner Allgemeing\u00fcltigkeit. <br />b.  <a href=\"#/glossary?term=Gestaltungsregel\">Gestaltungsregel</a> \u2013 einfache, aber  spezifische Regel f\u00fcr Gestaltung von Benutzungs\u00adschnittstellen.<br />Beispiele allgemein anerkannter Heuristiken (von Jakob Nielsen und Rolf Molich):<br />1.\tBeachte Konventionen der realen Welt, z.B. sprich die Sprache der <a href=\"#/glossary?term=Benutzer\">Benutzer</a><br />2.\tBeachte Konventionen der verwendeten Plattform<br />3.\tMinimiere die Notwendigkeit zur Erinnerung beim Benutzers in dem Objekte, Handlungen und Optionen sichtbar gemacht werden.<br />4.\tBiete angemessenes Feedback innerhalb angemessener Zeit<br />5.\tHilf Benutzern beim Erkennen, Verstehen und Beseitigen von Fehlern.<br /></p>",
          "term-english": "Heuristic",
          "term-german": "Heuristik"
        },
        {
          "categories": [
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "<p>A <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a> method in which one or more evaluators, preferably experts, compare an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> to a list of heuristics and identify where the interactive system does not follow those heuristics.<br />Notes: <br />1.\tThe list of heuristics must be manageable. Usually about 10 heuristics are used.<br />2.\tExperts can be <a href=\"#/glossary?term=Usability\">Usability</a> experts or subject matter experts (\"single experts\"), or both (\"double experts\").</p>",
          "description-german": "<p>Eine Methode der <a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a> bei der ein oder mehrere Begutachter \u2013 vorzugsweise Experten \u2013 ein <a href=\"#/glossary?term=Interaktives+System\">Interaktives System</a> mit einer Liste von Heuristiken vergleichen und feststellen an welchen Stellen das interaktive System diesen Heuristiken nicht folgt.<br />Anmerkungen:<br />1.\tDie Liste der Heuristiken muss handhabbar sein. \u00dcblicherweise werden etwa 10 Heuristiken benutzt.<br />2.\tExperten k\u00f6nnen <a href=\"#/glossary?term=Usability\">Usability</a>-Experten oder Experten im Anwendungsbereich sein.</p>",
          "term-english": "Heuristic evaluation",
          "term-german": "Heuristische Evaluierung"
        },
        {
          "categories": [
            "Test",
            "System"
          ],
          "description-english": "<p>A software <a href=\"#/Prototype\">prototype</a> of the <a href=\"#/User interface\">user interface</a> to the <a href=\"#/Interactive system\">interactive system</a> that is being designed. A high-fidelity prototype more closely resembles the finished <a href=\"#/Interactive system\">interactive system</a>.</p>",
          "description-german": "<p>Ein Software-<a href=\"#/Prototyp\">Prototyp</a> der <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a> des zu entwickelnden <a href=\"#/Interaktives System\">interaktiven Systems</a>. Ein High-Fidelity-Prototyp ähnelt dem fertigen <a href=\"#/Interaktives System\">interaktiven System</a>.</p>",
          "term-english": "High-fidelity prototype",
          "term-german": "High-fidelity-Prototyp"
        },
        {
          "categories": [
            "Anforderungen",
            "Prinzipien"
          ],
          "description-english": "<p>A family of standards covering <a href=\"#/Human-centred design\">Human-centred design</a>.<br />Note:<br />1.\tISO 9241 includes standards related to <br />a.\tSoftware ergonomics, <br />b.\tThe human-centred design process, <br />c.\tDisplays and display related hardware, <br />d.\tPhysical input devices, <br />e.\tWorkplace ergonomics, <br />f.\t<a href=\"#/Environment\">Environment</a> ergonomics, <br />g.\tControl centres, <br />h.\tTactile and haptic interactions.</p>",
          "description-german": "<p>Eine Reihe von Standards, die die <a href=\"#/Menschzentrierte Gestaltung\">Menschzentrierte Gestaltung</a> interaktiver Systeme betrifft.  <br />Anmerkung:<br />1.\tISO 9241 beinhaltet Standards zu den Themen<br />a.\tSoftware-Ergonomie<br />b.\tProzess menschzentrierter Gestaltung<br />c.\tDisplays und Display bezogene Hardware<br />d.\tPhysikalisches Eingabeger\u00e4te<br />e.\tErgonomie des Arbeitsplatzes<br />f.\tErgonomie der <a href=\"#/Umgebung\">Umgebung</a><br />g.\tKontrollzentren<br />h.\tTaktile und haptische Interaktionen</p>",
          "term-english": "ISO 9241",
          "term-german": "ISO 9241"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A <a href=\"#/User\">user</a> who uses the output of the <a href=\"#/Interactive system\">interactive system</a>, but who does not interact directly with the <a href=\"#/Interactive system\">interactive system</a>.<br />Examples of indirect <a href=\"#/User\">users</a>:<br />1.A bank customer who receives a paper or electronic statement is an indirect user of the bank’s computer system.<br/>2.\tA customer who contacts the call centre to reserve a car is an indirect user of the computer system used by the call centre operative to make the reservation.</p>",
          "description-german": "<p>Ein <a href=\"#/Benutzer\">Benutzer</a>, der die Ergebnisse des <a href=\"#/Interaktives System\">interaktiven Systems</a> verwendet, aber nicht direkt mit dem <a href=\"#/Interaktives System\">interaktiven< System</a> interagiert. <br />Beispiele für indirekte <a href=\"#/Benutzer\">Benutzer</a>:<br />1.\tEin Bankkunde, der eine schriftliche oder elektronische Abrechnung erhält, ist ein indirekter Benutzer des Computersystems der Bank<br/>2.\tEin Kunde, der sich mit dem Call-Center in Verbindung setzt, um ein Auto zu reservieren, ist ein indirekter Benutzer des Computersystems, das von dem Mitarbeiter im Call-Center verwendet wird, um die Reservierung vorzunehmen.</p>",
          "term-english": "Indirect user",
          "term-german": "Indirekter Benutzer"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "<p>The property of a <a href=\"#/glossary?term=Dialogue\">Dialogue</a> that allows users to modify interaction and presentation of information to suit their individual capabilities and needs.<br />Note: <br />1.\tSuitability for individuali\u00adzation is a dialogue principle.</p>",
          "description-german": "<p>Die Eigenschaft eines Dialogs die <a href=\"#/glossary?term=Benutzer\">Benutzer</a> erm\u00f6glicht die Interaktion mit dem System und die Darstellung von Informationen an ihre individuellen F\u00e4higkeiten und Bed\u00fcrfnisse anpassen zu k\u00f6nnen.<br />Anmerkung:<br />1.\tIndividualisierbarkeit ist ein Dialogprinzip.</p>",
          "term-english": "Suitability for individualization",
          "term-german": "Individualisierbarkeit"
        },
        {
          "categories": [
            "Rollen",
            "Gestaltung"
          ],
          "description-english": "<p>A person who creates and organizes the structure of information to enable each <a href=\"#/glossary?term=User\">User</a> group to efficiently locate required information when using interactive systems. <br />Note: <br />1.\tInformation architect is a process <a href=\"#/glossary?term=Role\">Role</a> in <a href=\"#/glossary?term=Human-centred+design\">Human-centred design</a>.</p>",
          "description-german": "<p>Eine Person die die Struktur von Information in interaktiven Systemen f\u00fcr das effiziente Auffinden durch jede <a href=\"#/glossary?term=Benutzergruppe\">Benutzergruppe</a> kreiert und organisiert.<br />Anmerkung:<br />1.\tInformationsarchitekt ist eine <a href=\"#/glossary?term=Rolle\">Rolle</a> im Prozess der menschzentrierten Gestaltung.</p>",
          "term-english": "Information architect",
          "term-german": "Informationsarchitekt"
        },
        {
          "categories": [
            "Gestaltung",
            "Anforderungen"
          ],
          "description-english": "<p>TThe naming and structuring of the information that must be accessible to the <a href=\"#/User\">user</a>.<br/>Notes:<br/>Examples of UX-related deliverables in the information architecture:<br/>a.\tData model from the user perspective; content and content hierarchy;<br/>b.\tThe words used in the <a href=\"#/User interface\">user interface</a>, for navigation and content;<br/>c.\t<a href=\"#/Navigation structure\">Navigation structure</a>, for example menu structure and site map.</p>",
          "description-german": "<p>Die Benennung und Strukturierung der Information, die für den <a href=\"#/Benutzer\">Benutzer</a> zugänglich sein muss.<br/>Anmerkung:<br/>1.\tBeispiele für UX-bezogene Ergebnisse in der Informationsarchitektur:<br/>a.\tDatenmodell aus der Benutzerperspektive; Inhalte und Hierarchie der Inhalte;<br/>b.\tDie Ausdrücke, die in der <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a> für Navigation und Inhalt verwendet werden;<br/>c.\t<a href=\"#/Navigationsstruktur\">Navigationsstruktur</a>, zum Beispiel Menüstruktur und Sitemap.</p>",
          "term-english": "Information architecture",
          "term-german": "Informationsarchitektur"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a> \u2013 Inspection based</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Inspektionsbasierte+Usability-Evaluierung\">Inspektionsbasierte Usability-Evaluierung</a></p>",
          "term-english": "Inspection",
          "term-german": "Inspektion"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p><a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a> based on the judgment of one or more evaluators who examine or use an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> to identify potential <a href=\"#/glossary?term=Usability\">Usability</a> problems and deviations from established criteria.<br />Notes:<br />1.\t<a href=\"#/glossary?term=Inspection\">Inspection</a>-based <a href=\"#/glossary?term=Usability\">Usability</a> evaluation is often performed by usability experts or subject matter experts who base their judgement on prior experience of usability problems encountered by users and their own knowledge of ergonomic <a href=\"#/glossary?term=User\">User</a> interface guidelines and styleguides.<br />2.\t<a href=\"#/glossary?term=Heuristic\">Heuristic</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a> is a technique for <a href=\"#/glossary?term=Inspection\">Inspection</a> based <a href=\"#/glossary?term=Usability\">Usability</a> evaluation.</p>",
          "description-german": "<p><a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a> die auf der Beurteilung ein oder mehrerer Evaluatoren basiert, die ein <a href=\"#/glossary?term=Interaktives+System\">Interaktives System</a> pr\u00fcfen oder benutzen, um potentielle <a href=\"#/glossary?term=Usability\">Usability</a>-Probleme und Abweichungen von anerkannten Kriterien zu identifizieren.<br />Anmerkungen:<br />1.\tInspektionsbasierte Usability-<a href=\"#/glossary?term=Evaluierung\">Evaluierung</a> wird oft von <a href=\"#/glossary?term=Usability\">Usability</a>-Experten oder Fachexperten durchgef\u00fchrt, die ihre Urteile auf die fr\u00fchere Erfahrung mit Usability-Problemen und ihr eigenes Wissen \u00fcber Gestaltungsregeln und Styleguides gr\u00fcnden.<br />2.\t<a href=\"#/glossary?term=Heuristische+Evaluierung\">Heuristische Evaluierung</a> ist eine Vorgehensweise f\u00fcr Inspektionsbasierte <a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a>.</p>",
          "term-english": "Usability evaluation \u2013 Inspection based",
          "term-german": "Inspektionsbasierte Usability-Evaluierung"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A person who defines and designs the interaction between humans and system based on <a href=\"#/glossary?term=User\">User</a> requirements and the <a href=\"#/glossary?term=Context+of+use\">Context of use</a>.<br />Note: <br />1.\tScenarios and personas are also important bases for the work of the interaction designer<br />2.\tInteraction designer is a process <a href=\"#/glossary?term=Role\">Role</a> in <a href=\"#/glossary?term=Human-centred+design\">Human-centred design</a>. </p>",
          "description-german": "<p>Eine Person die die Interaktion zwischen Mensch und System auf Basis der Nutzungs\u00adanforderungen und <a href=\"#/glossary?term=Nutzungskontext\">Nutzungskontext</a> definiert und konzipiert. <br />Anmerkung:<br />1.\tSzenarien und Personas sind auch wichtige Grundlagen f\u00fcr die Arbeit des Interaktionsdesigners.<br />2.\tInteraktionsdesigner ist eine <a href=\"#/glossary?term=Rolle\">Rolle</a> im Prozess der menschzentrierten Gestaltung.</p>",
          "term-english": "Interaction designer",
          "term-german": "Interaktionsdesigner"
        },
        {
          "categories": [
            "System",
            "Anforderungen"
          ],
          "description-english": "<p>A combination of hardware, software and services that <a href=\"#/User\">users</a> interact with in order to achieve specific <a href=\"#/Goal\">goals</a>.<br />Note: <br />1.\tThis includes, where appropriate, packaging, user documentation, on-line help, support and training.<br/>2.\tEven systems that do not accept input from <a href=\"#/User\">users</a> are covered by this definition, for example destination boards in an airport or signs in a train station.</p>",
          "description-german": "<p>Eine Kombination aus Hardware, Software und Dienstleistungen, mit der <a href=\"#/Benutzer\">Benutzer</a> interagieren, um bestimmte <a href=\"#/Ziel\">Ziele</a> zu erreichen.<br />Anmerkung:<br />1.\tDies schließt gegebenenfalls Verpackung, Benutzerdokumentation, Onlinehilfe, Support und Schulung mit ein.<br/>2.\tAuch Systeme, die keine Eingaben von <a href=\"#/Benutzer\">Benutzern</a> akzeptieren, fallen unter diese Definition, z. B. Anzeigetafeln in einem Flughafen oder Schilder in einem Bahnhof.</p>",
          "term-english": "Interactive system",
          "term-german": "Interaktives System"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>An individual or organisation with an active interest in an <a href=\"#/Interactive system\">interactive system</a>.<br />Notes:<br />1.\tAll <a href=\"#/User\">users</a> are stakeholders, but not all stakeholders are users. To highlight the distinction, you can use the phrase “users and other stakeholders”.<br />2.\t<a href=\"#/Market requirement\">Market requirements</a> and <a href=\"#/Organisational requirement\">organisational requirements</a> are examples of <a href=\"#/Requirement\">requirements</a> from stakeholders who are not users.<br /><br/>Examples:<br/>1.\tTStakeholders might include: <a href=\"#/User\">users</a>, technical support, trainers, documentation writers and developers.<br/>2.\tStakeholders who may not be <a href=\"#/User\">users</a> might include: designers, developers, managers of development teams, shareholders, board members and marketing professionals.</p>",
          "description-german": "<p>Eine Person oder Organisation mit einem aktiven Interesse an einem <a href=\"#/Interaktives System\">interaktiven System</a>.<br />Anmerkungen: <br />1.\tAlle <a href=\"#/Benutzer\">Benutzer</a> sind Interessenvertreter, aber nicht alle Interessenvertreter sind <a href=\"#/Benutzer\">Benutzer</a>. Um die Unterscheidung hervorzuheben, kann man den Ausdruck „<a href=\"#/Benutzer\">Benutzer</a> und andere Interessenvertreter“ verwenden.<br />2.\t<a href=\"#/Marktanforderung\">Marktanforderungen</a> und <a href=\"#/Organisatorische Anforderung\">organisatorische Anforderungen</a> sind Beispiele für <a href=\"#/Anforderung\">Anforderungen</a> von Interessenvertretern, die keine <a href=\"#/Benutzer\">Benutzer</a> sind.<br/><br/>Beispiele:<br />1.\tInteressenvertreter können sein: <a href=\"#/Benutzer\">Benutzer</a>, technischer Support, Trainer, Autoren von Dokumentation und Entwickler.<br/>2.\tZu den Interessenvertretern, die möglicherweise keine <a href=\"#/Benutzer\">Benutzer</a> sind, gehören: Designer, Entwickler, Manager von Entwicklungsteams, Aktionäre, Vorstandsmitglieder und Marketingexperten.</p>",
          "term-english": "Stakeholder",
          "term-german": "Interessenvertreter"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "<p>What the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> should be capable of from the point of view of the stakeholders.</p>",
          "description-german": "<p>Was das interaktive System aus Sicht des Interessenvertreters leisten muss.<br />Anmerkung:<br />1.\tDer englische Ausdruck f\u00fcr Interessenvertreteranforderung ist Stakeholder requirement.</p>",
          "term-english": "Stakeholder requirement",
          "term-german": "Interessenvertreteranforderung"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p> A data-gathering method that questions a few carefully selected individuals in depth to arrive at a fuller understanding of the <a href=\"#/Context of use\">context of use</a> for an existing or planned <a href=\"#/Interactive system\">interactive system</a>. Through inquiry and interpretation, it reveals commonalities and differences across the user base.<br />Notes: <br />1.\tIn an interview, the interviewer (a <a href=\"#/User experience professional\">user experience professional</a>) typically conducts a <a href=\"#/Briefing\">briefing</a> and then asks questions to a <a href=\"#/User\">user</a> about the current <a href=\"#/Context of use\">context of use</a> and, if applicable, about the planned <a href=\"#/Interactive system\">interactive system</a>. The interviewer uses an <a href=\"#/Interview checklist\">interview checklist</a> to ensure that all relevant topics are covered.<br />2.\tInterview questions should be<br/>a.\t <a href=\"#/Open question\">Open</a> rather than <a href=\"#/Closed question\">closed</a>;<br/>b.\t<a href=\"#/Neutral question\">Neutral</a> rather than <a href=\"#/Leading question\">leading</a>.<br />3.\tThe main purpose of an interview is to gather information about <a href=\"#/User\">users</a>, <a href=\"#/Goal\">goals</a>, <a href=\"#/Task\">tasks</a>, <a href=\"#/Resource\">resources</a> and <a href=\"#/Environment\">environments</a> – that is, how things are currently done. In an <a href=\"#/Iterative\">iterative</a> cycle, a <a href=\"#/Low-fidelity prototype\">low-fidelity prototype</a> based on data collected from <a href=\"#/User\">users</a> through <a href=\"#/Observation\">observation</a> and <a href=\"#/Interview\">interviews</a> may be subsequently evaluated with <a href=\"#/User\">users</a> to clarify the understanding of the <a href=\"#/Context of use\">context of use</a>, <a href=\"#/User need\">user needs</a>, <a href=\"#/User requirement\">user requirements</a> and the <a href=\"#/Use scenario\">use scenario</a> for the <a href=\"#/Interactive system\">interactive system</a>.<br/>4.\tInterview participants may make valuable suggestions regarding the expected future system – these can be documented separately and should be probed in subsequent interviews to check their validity. They can also be communicated through <a href=\"#/As-is scenario\">as-is scenarios</a> as shown in example 2 in the definition of <a href=\"#/As-is scenario\">as-is scenario</a>.<br/>5.\tWhere possible, interviews should be done contextually, however any interview is better than no interview at all.<br/>6.\tSuccessful interviewers<br/>a.\tUse <a href=\"#/Open question\">open questions</a> and avoid <a href=\"#/Closed question\">closed questions</a>;<br/>b.\tUse <a href=\"#/Neutral question\">neutral questions</a> and avoid <a href=\"#/Leading question\">leading questions</a>;<br/>c.\tDon’t talk too much;<br/>d.\tUse an <a href=\"#/Interview checklist\">interview checklist</a> but remain flexible;<br/>e.\tPrepare for the interview;<br/>f.\tRemaincurious;<br/>g.\tCheck their notes before the interview participant leaves so they never leave unsure about what happened.<br/>7.\tCompare this definition to <a href=\"#/Contextual interview\">contextual interview</a>, <a href=\"#/Pre-session interview\">pre-session</a> interview and <a href=\"#/Post-session interview\">post-session interview</a>.</p>",
          "description-german": "<p>Eine Methode zur Datensammlung, die einige sorgfältig ausgewählte Personen eingehend befragt, um zu einem besseren Verständnis des <a href=\"#/Nutzungskontext\">Nutzungskontextes</a> für ein vorhandenes oder geplantes <a href=\"#/Interaktives System\">interaktives System</a> zu gelangen. Durch die Befragung und Interpretation werden Gemeinsamkeiten und Unterschiede innerhalb der <a href=\"#/Benutzer\">Benutzer</a> eines <a href=\"#/Interaktives Systems\">interaktiven Systems</a> aufgedeckt.<br />Anmerkungen: <br />1.\tIn einem Interview führt der Interviewer (ein <a href=\"#/User Experience Professional\">User Experience Professional</a>) üblicherweise ein <a href=\"#/Briefing\">Briefing</a> durch und stellt danach dem <a href=\"#/Benutzer\">Benutzer</a> Fragen über den aktuellen <a href=\"#/Nutzungskontext\">Nutzungskontext</a> und gegebenenfalls zum geplanten <a href=\"#/Interaktives System\">interaktiven System</a>. Der Interviewer nutzt eine <a href=\"#/Interviewcheckliste\">Interviewcheckliste</a>, um sicherzustellen, dass zu allen relevanten Aspekten befragt wurde.<br />2.\tInterviewfragen sollten<br />a.\teher <a href=\"#/Offene Frage\">offen</a> als <a href=\"#/Geschlossene Frage\">geschlossen</a><br />b.\teher <a href=\"#/Neutrale Frage\">neutral</a> als <a href=\"#/Suggestionsfrage\">suggestiv</a><br />formuliert sein.<br />4.\tDer Hauptzweck eines Interviews besteht darin, Informationen über <a href=\"#/Benutzer\">Benutzer</a>, <a href=\"#/Ziel\">Ziele</a>, <a href=\"#/Aufgabe\">Aufgaben</a>, <a href=\"#/Ressourcen\">Ressourcen</a> und <a href=\"#/Umgebung\">Umgebungen</a> zu sammeln – das heißt darüber, wie Dinge derzeit erledigt werden. In der Praxis wird häufig ein <a href=\"#/Iterativ\">iterativer</a> Zyklus angewandt, bei dem Daten von <a href=\"#/Benutzer\">Benutzern</a> durch <a href=\"#/Beobachtung\">Beobachtung</a> und <a href=\"#/Interview\">Interviews</a> gesammelt werden, dann ein <a href=\"#/Low-fidelity-Prototyp\">Low- Fidelity-Prototyp</a> erstellt wird und dieser <a href=\"#/Prototyp\">Prototyp</a> (der auf Benutzerdaten basiert) mit <a href=\"#/Benutzer\">Benutzern</a> evaluiert wird, um das Verständnis des <a href=\"#/Nutzungskontext\">Nutzungskontextes</a>, der <a href=\"#/Erfordernis\">Erfordernisse</a>, <a href=\"#/Nutzungsanforderung\">Nutzungsanforderungen</a> und <a href=\"#/Nutzungsszenario\">Nutzungsszenarien</a> für das <a href=\"#/Interaktives System\">interaktive System</a> zu klären.<br/>4.\tInterviewteilnehmer können wertvolle Anregungen zum erwarteten zukünftigen System geben - diese können separat dokumentiert werden und sollten in nachfolgenden Interviews auf ihre Stichhaltigkeit überprüft werden. Sie können auch über <a href=\"#/Ist-Szenario\">Ist- Szenarien</a> kommuniziert werden, wie in Beispiel 2 in der Definition von <a href=\"#/Ist-Szenario\">„Ist- Szenarien“</a> gezeigt.<br/>5.\tWenn möglich, sollten Interviews kontextuell durchgeführt werden, jedoch ist jedes Interview besser als gar kein Interview.<br/>6.\tErfolgreiche Interviewer<br/>a.\tverwenden <a href=\"#/Offene Frage\">offene Fragen</a> und vermeiden <a href=\"#/Geschlossene Frage\">geschlossene Fragen</a>;<br/>b.\t verwenden <a href=\"#/Neutrale Frage\">neutrale Fragen</a> und vermeiden <a href=\"#/Suggestionsfrage\">Suggestivfragen</a>;<br/>c.\tRede nicht zu viel.<br/>d.\tverwenden eine <a href=\"#/Interviewcheckliste\">Interviewcheckliste</a>, bleiben jedoch flexibel;<br/>e.\t bereiten sich auf das Interview vor;<br/>f.\tbleibenneugierig;<br/>g.\tüberprüfen ihre Notizen, bevor der Interviewteilnehmer geht, damit sie nie unsicher darüber sind, ob sie alle wesentlichen Informationen zu dem, was sich ereignet hat,erfasst haben.<br/>7.\tVergleiche <a href=\"#/Kontextuelles Interview\">kontextuelles Interview</a>, <a href=\"#/Pre-Session Interview\">Pre-Session-Interview</a> und <a href=\"#/Post-Session Interview\">Post-Session-Interview</a>.</p>",
          "term-english": "Interview",
          "term-german": "Interview"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "<p>A written list of suitable questions and cues used by the interviewer during an <a href=\"#/Interview\">interview</a> to make sure that all relevant topics are covered.</p>",
          "description-german": "<p>Eine schriftliche Liste geeigneter Fragen und Hinweise, die der Interviewer während eines <a href=\"#/Interview\">Interviews</a> verwendet, um sicherzustellen, dass alle relevanten Themen abgedeckt werden.</p>",
          "term-english": "Interview checklist",
          "term-german": "Interviewcheckliste"
        },
        {
          "categories": [
            "Anforderungen",
            "Planung"
          ],
          "description-english": "<p>Use of the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> is easy to understand, regardless of the <a href=\"#/glossary?term=User\">User</a>'s experience, knowledge, language skills, or current concentration level. <br />Note: <br />1.\tAffordances and <a href=\"#/glossary?term=Self-descriptiveness\">Self-descriptiveness</a> are means to make an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> intuitive.</p>",
          "description-german": "<p>Die Benutzung des interaktiven Systems ist unmittelbar zu verstehen \u2013 unabh\u00e4ngig von der Erfahrung, vom Wissen, von den Sprachkenntnissen oder vom momentanen Konzentrationsgrad des Benutzers.<br />Anmerkung:<br />1.\t<a href=\"#/glossary?term=Affordance\">Affordance</a> und <a href=\"#/glossary?term=Selbstbeschreibungsf%C3%A4higkeit\">Selbstbeschreibungsf\u00e4higkeit</a> sind Mittel, ein <a href=\"#/glossary?term=Interaktives+System\">Interaktives System</a> intuitiv zu gestalten.</p>",
          "term-english": "Intuitive",
          "term-german": "Intuitiv"
        },
        {
          "categories": [
            "Planung",
            "Evaluierung"
          ],
          "description-english": "<p>Repetitive.<br />An iterative process repeats steps in the <a href=\"#/Human-centred design\" >human-centred design</a> process until a <a href=\"#/Usability\" >usability</a> <a href=\"#/Evaluation\" >evaluation</a>  of the <a href=\"#/User interface\" >user interface</a>interface shows that the <a href=\"#/User requirements\" >user requirements</a> have been adequately met.</p>",
          "description-german": "<p>Wiederholend.<br />Ein iteratives Vorgehen wiederholt Schritte des Prozesses der menschzentrierten Gestaltung solange, bis eine <a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a> der <a href=\"#/glossary?term=Benutzungsschnittstelle\">Benutzungsschnittstelle</a> zeigt, dass die Nutzungsanforderungen ausreichend erf\u00fcllt sind.</p>",
          "term-english": "Iterative",
          "term-german": "Iterativ"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "<p>The same information is presented in the same way throughout the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>, in accordance with the <a href=\"#/glossary?term=User\">User</a>\u2019s expectation.<br />Notes:<br />1.\tConsistency is an aspect of <a href=\"#/glossary?term=Conformity+with+user+expectations\">Conformity with user expectations</a>.<br />2.\tConsistency is relevant on several levels, for example <br />a.\twithin a screen;<br />b.\tacross screens in the same <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>;<br />c.\tacross interactive systems from the same manufacturer;<br />d.\tacross similar interactive systems from different manufacturers.</p>",
          "description-german": "<p>Die gleiche Information wird in gleicher Weise innerhalb des gesamten interaktiven Systems entsprechend der Benutzererwartung dargestellt.<br />Anmerkungen:<br />1.\tKonsistenz ist eine Komponente der <a href=\"#/glossary?term=Erwartungskonformit%C3%A4t\">Erwartungskonformit\u00e4t</a>. <br />2.\tKonsistenz ist auf verschiedenen Ebenen relevant wie zum Beispiel <br />a.\tinnerhalb einer Bildschirmanzeige,<br />b.\tzwischen den Bildschirmanzeigen desselben interaktiven Systems, <br />c.\tzwischen interaktiven Systemen desselben Herstellers,<br />d.\tzwischen \u00e4hnlichen interaktiven Systemen unterschiedlicher Hersteller.</p>",
          "term-english": "Consistency",
          "term-german": "Konsistenz"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "<p>An <a href=\"#/Interview\">interview</a> that takes place at the location where the <a href=\"#/User\">user’s</a> interaction with the <a href=\"#/Interactive system\">interactive system</a> usually takes place and focuses on the <a href=\"#/Context of use\">context of use</a> of the <a href=\"#/User\">user</a>.</p>",
          "description-german": "<p>Ein <a href=\"#/Interview\">Interview</a>, das dort stattfindet, wo die Interaktion des <a href=\"#/Benutzer\">Benutzers</a> mit dem <a href=\"#/Interaktives System\">interaktiven System</a> üblicherweise erfolgt und das auf den <a href=\"#/Nutzungskontext\">Nutzungskontext</a> des <a href=\"#/Benutzer\">Benutzers</a> abzielt.</p>",
          "term-english": "Contextual interview",
          "term-german": "Kontextuelles Interview"
        },
        {
          "categories": [
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "<p>A <a href=\"#/glossary?term=Dialogue\">Dialogue</a> is suitable for learning when it supports and guides the <a href=\"#/glossary?term=User\">User</a> in learning to use the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>.<br />Notes: <br />1.\tRecommendations for observing the <a href=\"#/glossary?term=Dialogue\">Dialogue</a> principle:<br />a.\tThe dialogue should provide sufficient feedback about the intermediary and final results of an activity so that the user learns from successfully accomplished activities.<br />b.\tIf appropriate to the tasks and learning goals, the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> should allow the user to explore (\u201ctry out\u201d) dialogue steps without negative consequences.<br />2.\tSuitability for learning is a dialogue principle.<br />Example of suitability for learning:<br />1.\tWhen users reserve a room using a hotel room reservation system, the users receive step-by-step feedback to refine their queries and details about the successful reservation of the room.</p>",
          "description-german": "<p>Die Eigenschaft eines Dialogs die <a href=\"#/glossary?term=Benutzer\">Benutzer</a> beim Erlernen der Nutzung des interaktiven Systems zu unterst\u00fctzen und anzuleiten.<br />Anmerkungen:<br />1.\tEmpfehlungen zur Befolgung des Dialogprinzips:<br />a.\tDer <a href=\"#/glossary?term=Dialog\">Dialog</a> sollte ausreichende R\u00fcckmeldung \u00fcber Zwischen- und Endergebnisse von Handlungen bereitstellen, damit die Benutzer von erfolgreich ausgef\u00fchrten Handlungen lernen.<br />b.\tFalls es zu den Aufgaben und den Lernzielen passt, sollte das interaktive System dem Benutzer erlauben, Dialogschritte ohne nachteilige Auswirkungen auszuprobieren.<br />2.\tLernf\u00f6rderlichkeit ist ein Dialogprinzip.<br />Beispiel f\u00fcr Lernf\u00f6rderlichkeit:<br />1.\tWenn Benutzer mit Hilfe eines Hotelzimmerreservierungssystems ein Zimmer reservieren, erhalten die Benutzer Schritt f\u00fcr Schritt R\u00fcckmeldungen, um ihre Anfrage zu verfeinern und immer mehr Details \u00fcber den Fortschritt der erfolgreichen Zimmerreservierung.</p>",
          "term-english": "Suitability for learning",
          "term-german": "Lernförderlichkeit"
        },
        {
          "categories": [
            "Test",
            "System"
          ],
          "description-english": "<p>A low-cost, simple illustration of a design or concept used to gather feedback from <a href=\"#/User\">users</a> and other <a href=\"#/Stakeholder\">stakeholders</a> during the early stages of design. <br />Notes:<br />1.\tA low-fidelity prototype is often created using paper, pens, sticky notes and so on. Screen mock-ups are often made using a prototyping tool.<br />2.\tA low-fidelity prototype may be operated by a human being instead of a computer.<br />3.\tA low-fidelity prototype should be capable of being updated in moments.</p>",
          "description-german": "<p>Eine preiswerte, einfache Veranschaulichung eines Designs oder eines Konzepts, das benutzt wird, um Feedback von  <a href=\"#/Benutzer\">Benutzern</a> und anderen <a href=\"#/Interessenvertreter\">Interessenvertretern</a> während früher Phasen der Entwicklung einzuholen.<br />Anmerkungen: <br />1.\tEin Low-Fidelity-Prototyp wird häufig mit Hilfe von Papier, Stiften, Haftzetteln usw. erstellt. Screenentwürfe werden oft mit Hilfe eines Prototyping-Tools hergestellt.<br />2.\tEin Low-Fidelity-Prototyp kann von einem Menschen anstelle eines Computer betrieben werden.<br />3.\tEin Low-Fidelity-Prototyp sollte in wenigen Augenblicken aktualisiert werden können.</p>",
          "term-english": "Low-fidelity prototype",
          "term-german": "Low-fidelity-Prototyp"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "<p>A <a href=\"#/Requirement\">requirement</a> for an <a href=\"#/Interactive system\">interactive system</a> based on marketing policy aimed at maximizing business opportunities, purchase and use.<br />Examples:<br />1.\tMarket requirements are often referred to as customer requirements.<br />Examples<br />1.\tThe website must be at least as usable as that of the two top competitors.<br/>2.\tThe colours used on the website must conform to the <a href=\"#/Style guide\">style guide</a>.</p>",
          "description-german": "<p>Eine <a href=\"#/Anforderung\">Anforderung</a> für ein <a href=\"#/Interaktives System\">interaktives System</a> basierend auf einer Marketingpolitik, die darauf abzielt, Geschäftschancen, Absatz und Nutzen zu maximieren<br />Beispiele:<br />1.\tDie Website muss mindestens so nutzbar sein wie die der beiden Hauptkonkurrenten. <br />2.\tDie auf der Website verwendeten Farben müssen dem <a href=\"#/Style Guide\">Style Guide</a> entsprechen.</p>",
          "term-english": "Market requirement",
          "term-german": "Marktanforderung"
        },
        {
          "categories": [
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "<p>A principle for a successful <a href=\"#/Contextual interview\">contextual interview</a>: The interviewer treats the <a href=\"#/User\">user</a> as the master while the interviewer is the apprentice. The goal of the master-apprentice model is to understand users’ <a href=\"#/Goal\">goals</a> and <a href=\"#/Task\">tasks</a> in detail by learning them as an apprentice would.<br/>Notes:<br/>1.\tThe interviewer asks because they sincerely want to learn – not because they want to demonstrate their knowledge.<br/>2.\tEverything the master says is correct. Sometimes the apprentice must ask several questions in order to fully understand the master – the interviewer must never leave unsure about what happened.<br/>Typical mistakes include:<br/>a.\tInterrupting the master;<br/>b.\tAttempting to influence the master;<br/>c.\tDoubting or even trying to correct the master;<br/>d.\tUsing the <a href=\"#/Interview checklist\">interview checklist</a> to steer the <a href=\"#/Interview\">interview</a> rather than letting the master address issues in the way they prefer.</p>",
          "description-german": "<p>Ein Prinzip für ein erfolgreiches <a href=\"#/Kontextuelles Interview\">kontextuelles Interview</a>: Der Interviewer behandelt den <a href=\"#/Benutzer\">Benutzer</a> als den Meister, während der Interviewer selbst der Schüler ist. Ziel des Meister- Schüler-Modells ist es, die <a href=\"#/Ziel\">Ziele</a> und <a href=\"#/Aufgabe\">Aufgaben</a> des <a href=\"#/Benutzer\">Benutzers</a> im Detail zu verstehen, indem man als Schüler vom Benutzer als Meister lernt.<br/>Anmerkungen:<br/>1.\tDer Interviewer fragt, weil er ernsthaft lernen will - nicht, weil er sein Wissen demonstrieren möchte.<br/>2.\tAlles, was der Meister sagt, ist richtig. Manchmal muss der Schüler mehrere Fragen stellen, um den Meister vollständig zu verstehen - der Interviewer darf sich nie darüber im Unklaren sein, worum es wirklich geht.<br/>3.\tTypische Fehler sind:<br/>a.\tUnterbrechen des Meisters;<br/>b.\tVersuchen, den Meister zu beeinflussen;<br/>c.\tZu zweifeln oder sogar zu versuchen, den Meister zu korrigieren;<br/>d.\t Verwenden der <a href=\"#/Interviewcheckliste\">Interviewcheckliste</a>, um das <a href=\"#/Interview\">Interview</a> zu steuern, anstatt es dem Meister zu erlauben, Probleme so anzusprechen, wie der Meister es bevorzugt.</p>",
          "term-english": "Master-apprentice model",
          "term-german": "Meister-Sch\u00fcler-Modell"
        },
        {
          "categories": [
            "Planung",
            "Gestaltung"
          ],
          "description-english": "<p>An approach to design that aims to make interactive systems more usable by focusing on the use of the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> and applying human factors, ergonomics and <a href=\"#/glossary?term=Usability\">Usability</a> knowledge and techniques.<br />Notes:<br />1.\tThe concept \"human-centred design\" is used instead of \"<a href=\"#/glossary?term=User\">User</a>-centred design\" to emphasise the need to consider additional stakeholders who may not be users.<br />2.\tFeedback from users through <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a> is a critical source of information in human-centred design.</p>",
          "description-german": "<p>Herangehensweise bei der Gestaltung und Entwicklung von interaktiven Systemen, die darauf abzielt, diese gebrauchtauglicher zu machen indem sie sich auf die Verwendung des interaktiven Systems konzentriert und Kenntnisse und Techniken aus den Bereichen der Arbeitswissenschaft, Ergonomie und der Gebrauchstauglichkeit anwendet.<br />Anmerkungen:<br />1.\tDer Begriff \u201cmenschzentrierte Gestaltung\u201d wird statt \u201cbenutzerzentrierter Gestaltung\u201d verwendet, um auch die Erfordernisse weiterer <a href=\"#/glossary?term=Interessenvertreter\">Interessenvertreter</a> einzuschliessen, die nicht unbedingt <a href=\"#/glossary?term=Benutzer\">Benutzer</a> sind.<br />2.\tFeedback von Benutzern aus <a href=\"#/glossary?term=Usability\">Usability</a> Evaluierungen ist eine wichtige Informationsquelle in der menschzentrierten Gestaltung.</p>",
          "term-english": "Human-centred design",
          "term-german": "Menschzentrierte Gestaltung"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "<p>The perception people have of themselves, others, the <a href=\"#/glossary?term=Environment\">Environment</a>, and the things with which they interact. <br />Notes: <br />1.\tAlternative, popular definition: A person's thought process about how something works in the real world.<br />2.\tPeople form mental models through experience, training, and instruction. The mental model of an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> is formed largely by interpreting its perceived actions and its visible structure. Expectations resulting from the use of other or similar systems are also of importance.<br />3.\tIf a <a href=\"#/glossary?term=User\">User</a>'s mental model of an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> is incomplete or contradictory, then the user cannot easily use the interactive system.</p>",
          "description-german": "<p>Die Vorstellung, die Menschen von sich, anderen, der <a href=\"#/glossary?term=Umgebung\">Umgebung</a> und den Dingen haben, mit denen sie interagieren. <br />Anmerkungen: <br />1.\tAlternative, popul\u00e4re Definition: Der Denkprozess einer Person dar\u00fcber, wie etwas in der realen Welt funktioniert.<br />2.\tMenschen generieren mentale Modelle aufgrund von Erfahrung, Training und Instruktion. Das mentale Modell bez\u00fcglich eines interaktiven Systems wird gr\u00f6\u00dftenteils durch die Interpretation von wahrgenommenen Aktionen und sichtbaren Strukturen gebildet. Die Erwartung durch die Benutzung anderer oder \u00e4hnlicher Systeme spielt auch eine <a href=\"#/glossary?term=Rolle\">Rolle</a>.<br />3.\tWenn ein mentales Modell eines Benutzers von einem interaktiven System unvollst\u00e4ndig oder widerspr\u00fcchlich ist, dann kann der <a href=\"#/glossary?term=Benutzer\">Benutzer</a> das interaktive System nicht hindernisfrei benutzen.</p>",
          "term-english": "Mental model",
          "term-german": "Mentales Modell"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "<p>The activity carried out by a <a href=\"#/glossary?term=Moderator\">Moderator</a> in a <a href=\"#/glossary?term=Usability\">Usability</a> test or <a href=\"#/glossary?term=Focus+group\">Focus group</a>.</p>",
          "description-german": "<p>Die durch einen <a href=\"#/glossary?term=Moderator\">Moderator</a> w\u00e4hrend eines <a href=\"#/glossary?term=Usability\">Usability</a>-Tests oder einer <a href=\"#/glossary?term=Fokusgruppe\">Fokusgruppe</a> ausge\u00fcbte T\u00e4tigkeit.</p>",
          "term-english": "Moderation",
          "term-german": "Moderation"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A neutral person who conducts a <a href=\"#/glossary?term=Usability\">Usability</a> test session or a <a href=\"#/glossary?term=Focus+group\">Focus group</a> session.<br />Notes:<br />1. \tModerator is a <a href=\"#/glossary?term=Role\">Role</a> in a <a href=\"#/glossary?term=Usability\">Usability</a> test session or focus group session.<br />2.\tThe moderator's tasks during a <a href=\"#/glossary?term=Usability+test\">Usability test</a> session are described under <a href=\"#/glossary?term=Usability+test+session\">Usability test session</a>.<br />3.\t<a href=\"#/glossary?term=Facilitator\">Facilitator</a> is a frequently used synonym for moderator.</p>",
          "description-german": "<p>Eine neutrale Person die eine <a href=\"#/glossary?term=Usability-Testsitzung\">Usability-Testsitzung</a> oder eine <a href=\"#/glossary?term=Fokusgruppe\">Fokusgruppe</a> leitet.<br />Anmerkungen: <br />1.\tModerator ist eine <a href=\"#/glossary?term=Rolle\">Rolle</a> in einer <a href=\"#/glossary?term=Usability\">Usability</a>-Testsitzung oder in einer Fokusgruppensitzung.<br />2.\tDie typischen Aufgaben des Moderators w\u00e4hrend einer Usability-Testsitzung sind beim Begriff Usability-Testsitzung beschrieben.<br />3.\tAuf Englisch wird <a href=\"#/glossary?term=Facilitator\">Facilitator</a> oft als Synonym f\u00fcr Moderator verwendet.</p>",
          "term-english": "Moderator",
          "term-german": "Moderator"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "<p>See Post-session <a href=\"#/glossary?term=Interview\">Interview</a>.</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Post-Session+Interview\">Post-Session Interview</a>.</p>",
          "term-english": "Debriefing",
          "term-german": "Nachbesprechung"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "<p>The logical organization of the units of displayed information that comprise the <a href=\"#/User interface\">User interface</a>.<br />Notes:<br />1.\tIn practice, the \"units of displayed information\" are often screens, pages or windows.<br />2.\tThe navigation structure comprises: <br />a.\tThe logical structure, for example hierarchy, the order and grouping of elements of the user interface and navigation items.<br />b.\tThe navigation elements that are used to navigate the structure, for example menus and breadcrumbs.<br />3.\tThe navigation structure is part of the <a href=\"#/Information architecture\">information architecture</a>.</p>",
          "description-german": "<p>Die logische Organisation der angezeigten Informationseinheiten der <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a>.<br />Anmerkungen:<br />1.\tIn der Praxis sind die \u201eangezeigten Informationseinheiten\u201c oft Bildschirminhalte, Seiten oder Fenster.<br />2.\tDie Navigationsstruktur umfasst: <br />a.\tDie logische Struktur, zum Beispiel Hierarchie, Anordnung sowie Gruppierung von Bestandteilen des User Interfaces bzw. Navigationsitems.<br />b.\tDie Navigationsmittel zum Navigieren in der Struktur, zum Beispiel Men\u00fc und Brotkrumen<br />3.\tDie Navigationsstruktur ist Teil der <a href=\"#/Informationsarchitektur\">Informationsarchitektur</a>.</p>",
          "term-english": "Navigation structure",
          "term-german": "Navigationsstruktur"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>A question in an <a href=\"#/Interview\">Interview</a> that has no built-in assumptions, and no frame that excludes anything or directs the reply in a certain direction. <br />Note:<br />1.\tCompare to <a href=\"#/Leading question\">Leading question</a>.<br />Examples of neutral (and <a href=\"#/Open question\">open</a>) <a href=\"#/Interview\">interview</a> questions: <br />1.\tWhat happened?<br />2.\tWhat do you mean by that?<br />3.\tWhat possibilities do you have now?<br />4.\tWhat should the home page of the new car rental website look like?</p>",
          "description-german": "<p>Eine Frage in einem <a href=\"#/Interview\">Interview</a>, die keine impliziten Annahmen beinhaltet und auch keinen Ansatz bietet, einen Aspekt auszuschliessen oder die Antwort in eine bestimmte Richtung zu lenken. <br />Anmerkung:<br />1.\tVergleiche mit <a href=\"#/Suggestionsfrage\">Suggestivfrage</a>.<br />Beispiele f\u00fcr neutrale (und <a href=\"#/Offene Frage\">offene</a>) <a href=\"#/Interview\">Interviewfragen</a><br />1.\tWas ist passiert?<br />2.\tWas meinen Sie damit?<br />3.\tWelche M\u00f6glichkeiten haben Sie jetzt?<br />4.\tWie sollte die Homepage der neuen Autovermietungswebsite aussehen?</p>",
          "term-english": "Neutral question",
          "term-german": "Neutrale Frage"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "<p>A <a href=\"#/Requirement\">requirement</a> for use that provides the basis for design and <a href=\"#/Evaluation\">evaluation</a> of an <a href=\"#/Interactive system\">interactive system</a> to meet identified <a href=\"#/User need\">user needs</a>.<br />Notes: <br />1.\tUser requirements are derived from <a href=\"#/User need\">user needs</a>.<br />2.\tA user requirement can be a <br /><a href=\"#/Qualitative user requirement\">Qualitative user requirement</a> or a <a href=\"#/Quantitative user requirement\">Quantitative user requirement</a>.<br/>3.\tBoth <a href=\"#/Qualitative user requirement\">qualitative</a> and <a href=\"#/Quantitative user requirement\">quantitative user requirements</a> provide a basis for the design of the <a href=\"#/Interactive system\">interactive system</a> and can be verified by evaluating the <a href=\"#/Interactive system\">interactive system</a>. While <a href=\"#/Qualitative user requirement\">qualitative user requirements</a> address the way in which the <a href=\"#/Interactive system\">interactive system</a> is used to arrive at a user <a href=\"#/Goal\">goal</a>, <a href=\"#/Quantitative user requirement\">quantitative user requirements</a> set measurable <a href=\"#/Goal\">goals</a> for <a href=\"#/Usability\">usability</a> and <a href=\"#/User experience\">user experience</a>.<br/><br/>Examples of relationships between <a href=\"#/User need\">user need</a> and user requirement:<br/>1.\t<a href=\"#/User need\">User need</a>: Users who frequently rent cars from a car rental company need to know what options they chose for previous reservations so they can apply them to future reservations.<br/>Corresponding user requirements:<br/>a.\tUsers must be able to select the types of cars they chose in previous reservations;<br/>b.\tUsers must be able to select the payment methods they used for previous reservations.<br/>2.\tUser need: During a disaster in a motorway tunnel, car drivers in the tunnel need to avoid breathing poisonous gases in order to survive the disaster.<br/>Corresponding user requirements:<br/>a.\tUsers must be able to recognise immediately that poisonous gases are present around them as soon as they have been technically detected.<br/>b.\tAt any location in the tunnel, users must be able to detect how to get to the next rescue room.<br/>Corresponding <a href=\"#/Organisational requirement\">organisational requirements</a>:<br/>c.\tThe organisation operating the tunnel must ensure that rescue rooms are available at regular intervals throughout the tunnel.<br/>d.\tThe air pressure in the rescue rooms must exceed the air pressure of the surroundings.<br/>3.\t<a href=\"#/User need\">User need</a>: During heart surgery, the anaesthetist needs to be aware of the patient’s vital signs in order to keep them stable.<br/>Corresponding user requirements:<br/>a.\tUsers must be able to monitor changes in the blood pressure during the operation.<br/>b.\tUsers must be able to monitor changes in the blood pressure during the operation.</p>",
          "description-german": "<p>Eine <a href=\"#/Anforderung\">Anforderung</a> an die Nutzung, die die Grundlage für die Gestaltung und die <a href=\"#/Usability-Evaluierung\">Usability-Evaluierung</a> eines <a href=\"#/Interaktives System\">interaktiven Systems</a> bildet, um identifizierte <a href=\"#/Erfordernis\">Erfordernisse</a> zu erfüllen.<br />Anmerkungen:<br />1.\tNutzungsanforderungen werden aus Erfordernissen abgeleitet.<br />2.\tEine Nutzungsanforderung kann eine <a href=\"#/Qualitative Nutzungsanforderung\">qualitative Nutzungsanforderung</a> oder eine <a href=\"#/Quantitative Nutzungsanforderung\">quantitative Nutzungsanforderung</a> sein.<br />3.\tSowohl <a href=\"#/Qualitative Nutzungsanforderung\">qualitative</a> als auch <a href=\"#/Quantitative Nutzungsanforderung\">quantitative Nutzungsanforderungen</a> bilden die Grundlage für die Gestaltung des <a href=\"#/Interaktives System\">interaktiven Systems</a> und können durch eine <a href=\"#/Usability-Evaluierung\">Usability-Evaluierung</a> des interaktiven Systems überprüft werden. Während <a href=\"#/Qualitative Nutzungsanforderung\">qualitative Nutzungsanforderungen</a> die Art und Weise ansprechen, in der das <a href=\"#/Interaktives System\">interaktive System</a> benutzt wird, um das <a href=\"#/Ziel\">Ziel</a> des <a href=\"#/Benutzer\">Benutzers</a> zu erreichen, setzen <a href=\"#/Quantitative Nutzungsanforderung\">quantitative Nutzungsanforderungen</a> messbare <a href=\"#/Ziel\">Ziele</a> für <a href=\"#/Usability\">Usability</a> und <a href=\"#/Benutzererlebnis\">User Experience</a>.<br/><br/>Beispiele für eine Beziehung zwischen <a href=\"#/Ziel\">Erfordernis</a> und <a href=\"#/Nutzungsanforderung\">Nutzungsanforderung</a>:<br/>1.\t<a href=\"#/Erfordernis\">Erfordernis</a>: <a href=\"#/Benutzer\">Benutzer</a>, die häufig Autos von einer Autovermietungsfirma mieten, müssen wissen, welche Auswahl sie bei früheren Reservierungen getroffen haben, um sie für zukünftige Reservierungen wieder verwenden zu können.<br/>Zugehörige <a href=\"#/Nutzungsanforderung\">Nutzungsanforderungen</a>:<br/>a.\tBenutzer müssen in der Lage sein, die Arten von Autos auszuwählen, die sie in früheren Reservierungen verwendet haben;<br/>b.\tBenutzer müssen in der Lage sein, die Zahlungsmittel auszuwählen, die sie bei früheren Reservierungen verwendet haben.<br/>2.\t<a href=\"#/Benutzer\">Erfordernis</a>: Während einer Katastrophe in einem Autobahntunnel müssen Autofahrer vermeiden, im Tunnel giftige Gase einzuatmen, um die Katastrophe zu überleben.<br/>Zugehörige <a href=\"#/Nutzungsanforderung\">Nutzungsanforderungen</a>:<br/>a.\t<a href=\"#/Benutzer\">Benutzer</a> müssen sofort erkennen können, dass um sie herum giftige Gase vorhanden sind, sobald diese technisch erfasst wurden.<br/>b.\tAn jedem Ort im Tunnel müssen die Benutzer erkennen können, wie sie zum nächsten Rettungsraum gelangen.<br/>Dazugehörende <a href=\"#/Organisatorische Anforderung\">organisatorische Anforderungen</a>:<br/>c.\tDie Organisation, die den Tunnel betreibt, muss sicherstellen, dass im gesamten Tunnel in regelmäßigen Abständen Rettungsräume zur Verfügung stehen.<br/>d.\tDer Luftdruck in den Rettungsräumen muss den Luftdruck der Umgebungübersteigen.<br/>3.\t<a href=\"#/Erfordernis\">Erfordernis</a>: Während einer Herzoperation muss sich der Anästhesist der Vitalzeichen des Patienten bewusst sein, um sie stabil zu halten.<br/>Dazugehörende Nutzungsanforderungen:<br/>a.\t<a href=\"#/Benutzer\">Benutzer</a> müssen in der Lage sein, Veränderungen des Blutdrucks während der Operation überwachen zu können.<br/>b.\tZu jeder Zeit müssen <a href=\"#/Benutzer\">Benutzer</a> die Herzaktivität des Patienten sehen.</p>",
          "term-english": "User requirement",
          "term-german": "Nutzungsanforderung"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "<p>A combination of <a href=\"#/User\">users</a>, <a href=\"#/Goal\">goals</a>, <a href=\"#/Task\">tasks</a>, <a href=\"#/Resource\">resources</a>, and <a href=\"#/Environment\">environments.</a><br/>Notes:<br/>1.\tThe context of use is determined by <a href=\"#/Interview\">interviewing</a> <a href=\"#/User\">users</a> or by <a href=\"#/Observation\">observing</a> them carry out <a href=\"#/Task\">tasks</a>.<br/>2.\tThe results from <a href=\"#/Focus group\">focus groups</a>, <a href=\"#/Observation\">observation</a> and <a href=\"#/Contextual interview\">contextual interviews</a> are described in the <a href=\"#/Context of use description\">context of use description</a>.<br/>Examples of contexts of use, users, goals and tasks, environments and resources:<br/>1.\tConsider the <a href=\"#/Interactive system\">interactive system</a> “messaging app”:<br/>Teenagers on a bus use their phones to send messages to their friends to make them laugh.<br/>a.\tUsers: Teenagers;<br/>b.\tGoal: Make friends laugh;<br/>c.\tTask: Send message;<br/>d.\tSocial environment: Friends:<br/>e.\tPhysical environment: Bus;<br/>f.\tResource:Phone.<br/>2.\tConsider the <a href=\"#/Interactive system\">interactive system</a> “text processor”:<br/>Secretaries in a school office create certificates for students in time for graduation; they validate the certificates with stamps.<br/>a.\tUsers: Secretaries;<br/>b.\tGoal: Have the certificates ready in time for graduation;<br/>c.\tTask: Create certificates;<br/>d.\tSocial environment: School staff and students;<br/>e.\tPhysical environment: School and school office;<br/>f.\tResource: Stamp.</p>",
          "description-german": "<p>Eine Kombination aus <a href=\"#/Benutzer\">Benutzern</a>, <a href=\"#/Ziel\">Zielen</a>, <a href=\"#/Aufgabe\">Aufgaben</a>, <a href=\"#/Ressourcen\">Ressourcen</a> und <a href=\"#/Umgebung\">Umgebungen</a><br/>Anmerkungen:<br/>1.\tDer Nutzungskontext wird durch <a href=\"#/Interview\">Befragung</a> von <a href=\"#/Benutzer\">Benutzern</a> oder durch deren <a href=\"#/Beobachtung\">Beobachtung</a> bei der Ausführung von <a href=\"#/Aufgabe\">Aufgaben</a> ermittelt.<br/>2.\tDie Ergebnisse aus <a href=\"#/Fokusgruppe\">Fokusgruppen</a>, <a href=\"#/Beobachtung\">Beobachtungen</a> und <a href=\"#/Kontextuelles Interview\">kontextuellen Interviews</a> werden in der <a href=\"#/Nutzungskontextbeschreibung\">Nutzungskontextbeschreibung</a> beschrieben.<br/>Beispiele für Ergebnisse aus sehr einfachen Analysen von Nutzungskontexten:<br/>1.\tBetrachten Sie das <a href=\"#/Interaktives System\">interaktive System</a> „Nachrichten App“:<br/>Jugendliche in einem Bus benutzen ihre Smartphones zum Versenden von Nachrichten an ihre Freunde, um diese zum Lachen zu bringen.<br/>a.\tBenutzer: Jugendliche;<br/>b.\tZiel: Freunde zum Lachen bringen;<br/>c.\tAufgabe: Nachricht senden:<br/>d.\tSoziale Umgebung: Freunde:<br/>e.\tPhysische Umgebung: Bus:<br/>f.\tRessource: Smartphone.<br/>2.\tBetrachten Sie das <a href=\"#/Interaktives System\">interaktive System</a> „Textverarbeitung“:<br/>In einem Schulbüro erstellen SekretärInnen die Zertifikate für die Schüler rechtzeitig vor der Zeugnisübergabe; sie bestätigen die Gültigkeit der Zertifikate mit Hilfe von Stempeln.<br/>a.\tBenutzer: SekretärInnen;<br/>b.\tZiel: Rechtzeitige Bereitstellung der Zertifikate vor der Zeugnisübergabe;<br/>c.\tAufgabe: Erstellen der Zertifikate;<br/>d.\t Soziales Umfeld: Schulpersonal und Schüler;<br/>e.\tPhysische Umgebung: Schule und Schulbüro;<br/>f.\tRessource: Stempel.</p>",
          "term-english": "Context of use",
          "term-german": "Nutzungskontext"
        },
        {
          "categories": [
            "Anforderungen",
            "Planung"
          ],
          "description-english": "<p>A description of the <a href=\"#/User\">users</a>, <a href=\"#/Goal\">goals</a>, <a href=\"#/Task\">tasks</a>, <a href=\"#/Resource\">resources</a>, and <a href=\"#/Environment\">environments</a> derived from <a href=\"#/Observation\">observations</a>, <a href=\"#/Contextual interview\">contextual interview</a> and <a href=\"#/Focus group\">focus groups</a>. <br/>Notes:<br/>1.\tThe context of use description is the basis for identifying <a href=\"#/User need\">user needs</a> and tracing them back to their source.<br/>2.\tA context of use description describes:<br>a.\t<a href=\"#/User\">Users</a>, in the form of <a href=\"#/User group profile\">user group profiles</a> and <a href=\"#/Persona\">personas</a>;<br>b.\t<a href=\"#/Goal\">Goals</a> in the form of <a href=\"#/As-is scenario\">as-is scenarios</a>;<br>c.\t<a href=\"#/Task\">Tasks</a>, in the form of <a href=\"#/Task model\">task models</a>, <a href=\"#/As-is scenario\">as-is scenarios</a> or <a href=\"#/User journey map\">user journey maps</a>;<br>d.\t<a href=\"#/Resource\">Resources</a>, in the form of lists or <a href=\"#/As-is scenario\">as-is scenarios</a>;<br>e.\t<a href=\"#/Environment\">Environments</a>, in the form of <a href=\"#/As-is scenario\">as-is scenarios</a>.<br/>3.\tExamples of components within a context of use description are <a href=\"#/User group profile\">user group profiles</a>, <a href=\"#/Persona\">personas</a>, <a href=\"#/As-is scenario\">as-is scenarios</a>, <a href=\"#/Task model\">task models</a> and <a href=\"#/User journey map\">user journey maps</a>.</p>",
          "description-german": "<p>Eine Beschreibung der <a href=\"#/Benutzer\">Benutzer</a>, <a href=\"#/Ziel\">Ziele</a>, <a href=\"#/Aufgabe\">Aufgaben</a>, <a href=\"#/Ressourcen\">Ressourcen</a> und <a href=\"#/Umgebung\">Umgebungen</a>, die aus <a href=\"#/Beobachtung\">Beobachtungen</a>, <a href=\"#/Kontextuelles Interview\">kontextuellen Interviews</a> und <a href=\"#/Fokusgruppe\">Fokusgruppen</a> hervorgeht.<br/>Anmerkungen:<br/>1.\tDie Nutzungskontextbeschreibung ist die Grundlage, um <a href=\"#/Erfordernis\">Erfordernisse</a> zu identifizieren und sie zu ihrer Quelle zurückverfolgen zu können.<br/>2.\tEine Nutzungskontextbeschreibung beschreibt:<br/>a.\t<a href=\"#/Benutzer\">Benutzer</a> in Form von <a href=\"#/Benutzergruppenprofil\">Benutzergruppenprofilen</a> und <a href=\"#/Persona\">Personas</a>;<br/>b.\t<a href=\"#/Ziel\">Ziele</a> in Form von <a href=\"#/Ist-Szenario\">Ist-Szenarien</a>;<br/>c.\t<a href=\"#/Aufgabe\">Aufgaben</a> in Form von <a href=\"#/Aufgabenmodell\">Aufgabenmodellen</a>, <a href=\"#/Ist-Szenario\">Ist-Szenarien</a> oder <a href=\"#/User Journey Map\">User Journey Maps</a>;<br/>d.\t<a href=\"#/Ressourcen\">Ressourcen</a> in Form von <a href=\"#/Ist-Szenario\">Ist-Szenarien</a>;<br/>e.\t<a href=\"#/Umgebung\">Umgebungen</a> in Form von Listen oder <a href=\"#/Ist-Szenario\">Ist-Szenarien</a>.<br/>3.\tBeispiele für Komponenten innerhalb einer Nutzungskontextbeschreibung sind <a href=\"#/Benutzergruppenprofil\">Benutzergruppenprofile</a>, <a href=\"#/Persona\">Personas</a>, <a href=\"#/Ist-Szenario\">Ist-Szenarien</a>, <a href=\"#/Aufgabenmodell\">Aufgabenmodelle</a> und <a href=\"#/User Journey Map\">User Journey Maps</a>.</p>",
          "term-english": "Context of use description",
          "term-german": "Nutzungskontextbeschreibung"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "<p>The key units of information, or data, with which users interact in order to carry out their tasks. <br />Examples of <a href=\"#/glossary?term=Task\">Task</a> objects:<br />1.\tFor a customer management system: <br />- A letter to a customer;<br />\t- A list of the customer's unpaid bills;<br />\t- An order from the customer.<br />2.\tFor a train ticket vending machine:<br />\t- A ticket:<br />\t- A receipt for the purchase of a ticket;<br />\t- A travel plan.</p>",
          "description-german": "<p>Die wichtigsten Informationseinheiten oder Daten mit denen <a href=\"#/glossary?term=Benutzer\">Benutzer</a> interagieren, um ihre Aufgaben durchzuf\u00fchren.<br />Anmerkung:<br />1.\tDer englische Ausdruck f\u00fcr Nutzungsobjekt ist Task object.<br />Beispiele f\u00fcr Nutzungsobjekte:<br />1.\tF\u00fcr ein Kundenmanagementsystem: <br />\t- Ein Brief an einen Kunden, <br />\t- Eine Liste unbezahlter Rechnungen des Kunden, <br />\t- Eine Auftrag von dem Kunden.<br />2.\tF\u00fcr einen Automaten der Bahnkarten verkauft:<br />\t- Eine Fahrkarte,<br />\t- Eine Quittung f\u00fcr den Kauf einer Fahrkarte,<br />\t- Einen Reiseplan.</p>",
          "term-english": "Task object",
          "term-german": "Nutzungsobjekt"
        },
        {
          "categories": [
            "Gestaltung",
            "Evaluierung"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> problem</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Usability-Problem\">Usability-Problem</a></p>",
          "term-english": "Problem",
          "term-german": "Nutzungsproblem"
        },
        {
          "categories": [
            "Test",
            "Planung"
          ],
          "description-english": "<p>A narrative text description that describes an intended usage situation with the <a href=\"#/Interactive system\">interactive system</a> under development.<br/>Notes:<br/>1.\tThe purpose of use scenarios is to provide a very early, tangible basis for discussions about what the future <a href=\"#/Interactive system\">interactive system</a> could be like for the <a href=\"#/User\">user</a>, before <a href=\"#/Prototype\">prototypes</a> are constructed. Use scenarios are based on a deep understanding of the <a href=\"#/Context of use\">context of use</a>, <a href=\"#/User need\">user needs</a>, <a href=\"#/User requirement\">user requirements</a> as well as discussions with <a href=\"#/User\">users</a> and <a href=\"#/Stakeholder\">stakeholders</a>.<br/>2.\tThe specific <a href=\"#/User\">user</a> in the use scenario is often a <a href=\"#/Persona\">persona</a>.<br/>3.\tUse scenarios illustrate use of the <a href=\"#/Interactive system\">interactive system</a> in a real context. They can be viewed as textual representations of the initial <a href=\"#/Prototype\">prototypes</a> of a new <a href=\"#/Interactive system\">interactive system</a>. They enable developers to understand processes and context.<br/>4.\tA use scenario should avoid placing unnecessary constraints on the design by referencing specific objects, such as command buttons, in the <a href=\"#/User interface\">user interface</a>.<br/><br/>Example of a use scenario:<br/>1.\t“Before leaving for the airport, John Miller checks the availability at the airport car park with his new application. If enough parking spaces are available, he reserves one with his new application and then calmly drives to the airport. He knows that since the application has been launched there is a separate entry for cars with reservations.” Compare this example to the example in <a href=\"#/As-is scenario\">as-is scenario</a>.<br/>2.\tThe following text is a bad example because it is too specific and violates note 5: “John Miller looks at the ‘Overview of available parking spaces’ screen and selects one by clicking the ‘Select’ button. He then clicks the ‘Reserve’-button and reserves the parking space.”</p>",
          "description-german": "<p>Eine erzählende, textuelle Beschreibung, die eine zukünftige Benutzungssituation mit dem in Entwicklung befindlichen <a href=\"#/Interaktives System\">interaktiven System</a> beschreibt.<br/>Anmerkungen:<br/>1.\tDer Zweck von Nutzungsszenarien besteht darin, eine sehr frühe, greifbare Grundlage für Diskussionen darüber zu schaffen, wie das zukünftige <a href=\"#/Interaktives System\">interaktive System</a> für den <a href=\"#/Benutzer\">Benutzer</a> aussehen könnte, bevor <a href=\"#/Prototyp\">Prototypen</a> erstellt werden. Nutzungsszenarien basieren auf einem umfassenden Verständnis des <a href=\"#/Nutzungskontext\">Nutzungskontextes</a>, der <a href=\"#/Erfordernis\">Erfordernisse</a>, der <a href=\"#/Nutzungsanforderung\">Nutzungsanforderungen</a> und der Diskussionen mit <a href=\"#/Benutzer\">Benutzern</a> und <a href=\"#/Interessenvertreter\">Interessenvertretern</a>.<br/>2.\tDer spezifische <a href=\"#/Benutzer\">Benutzer</a> in einem Nutzungsszenario ist oft eine <a href=\"#/Persona\">Persona</a>.<br/>3.\tNutzungsszenarien veranschaulichen die Benutzung des <a href=\"#/Interaktives System\">interaktiven Systems</a> in einem realen Kontext. Sie können als Textdarstellungen der ersten <a href=\"#/Prototyp\">Prototypen</a> eines neuen <a href=\"#/Interaktives System\">interaktiven Systems</a> angesehen werden. Sie ermöglichen es Entwicklern, Prozesse und Kontext zu verstehen.<br/>4.\tIn einem Nutzungsszenario sollten unnötige Einschränkungen für das Design durch Verweis auf bestimmte Objekte, wie z.B. Buttons in der <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a>, vermieden werden.<br/><br/>Beispiel für ein Nutzungsszenario:<br/>1.\t„Bevor John Miller zum Flughafen fährt, sichtet er mit seiner neuen App immer die Parksituation am Flughafen. Wenn ausreichend Parkplätze vorhanden sind, reserviert er mit seiner neuen App einen Parkplatz und fährt dann entspannt mit seinem Wagen zum Flughafen. Er weiß, dass mit der Veröffentlichung der neuen App am Flughafen ein separater Zugang für Parkhausgäste mit reserviertem Parkplatz geschaffen wurde.“ Vergleichen Sie dieses Beispiel mit dem Beispiel im <a href=\"#/Ist-Szenario\">Ist-Szenario</a>.<br/>Der folgende Text ist ein schlechtes Beispiel, denn er ist zu spezifisch und verstößt gegen Anmerkung 4:<br/>„John Miller schaut sich den Bildschirm ‚Überblick über verfügbare Parkplätze‘ an und wählt einen Parkplätz mit dem Button ‚Auswählen‘ aus. Anschließend klickt er auf den Button ‚Reservieren‘ und reserviert diesen Parkplatz.“</p>",
          "term-english": "Use scenario",
          "term-german": "Nutzungsszenario"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>A question in an <a href=\"#/Interview\">interview</a> that does not give any indication of the expected format or content of the answer.<br />Notes: <br />1.\tOpen questions are desirable in <a href=\"#/Interview\">interviews</a> because they invite <a href=\"#/User\">users</a> to start talking and provide extensive answers to questions.<br />2.\tCompare this to a <a href=\"#/Closed question\">closed question</a>.<br />Examples: <br />1.\tFor examples of open (and <a href=\"#/Neutral question\">neutral</a>) <a href=\"#/Interview\">interview</a> questions see <a href=\"#/Neutral question\">Neutral question</a>.”</p>",
          "description-german": "<p>Eine Frage in einem <a href=\"#/Interview\">Interview</a>, die keinen Hinweis auf das erwartete Format oder den erwarteten Inhalt der Antwort gibt.<br />Anmerkungen: <br />1.\tOffene Fragen sind in <a href=\"#/Interview\">Interviews</a> zu bevorzugen, weil sie <a href=\"#/Benutzer\">Benutzer</a> zur freien Rede animieren und ausführliche Antworten auf die Frage zulassen.<br />2.\tVergleiche mit <a href=\"#/Geschlossene Frage\">geschlossener Frage</a>.<br />Beispiele:<br />1.\tFür Beispiele zu offenen (und <a href=\"#/Neutrale Frage\">neutralen</a>) <a href=\"#/Interview\">Interviewfragen</a> siehe <a href=\"#/Neutrale Frage\">Neutrale Frage</a></p>",
          "term-english": "Open question",
          "term-german": "Offene Frage"
        },
        {
          "categories": [
            "System",
            "Gestaltung"
          ],
          "description-english": "<p>Assistance delivered through computer software that can be topic-oriented, procedural or reference information. <br />Notes:<br />1.\tMost online help is designed to give assistance in the use of an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>, but can also be used to present information on a broad range of subjects. <br />2.\tOnline help is a form of <a href=\"#/glossary?term=User\">User</a> assistance.</p>",
          "description-german": "<p>Unterst\u00fctzung die durch ein Computerprogramm bereitgestellt wird. Onlinehilfe kann themenorientiert, verfahrensorientiert oder ein Hinweis sein.<br />Anmerkungen:<br />1.\tOnlinehilfe kann auch Informationen zu weitergehenden Themenbereichen bieten.<br />2.\tOnlinehilfe ist eine Form der <a href=\"#/glossary?term=Benutzerunterst%C3%BCtzung\">Benutzerunterst\u00fctzung</a>.</p>",
          "term-english": "Online help",
          "term-german": "Onlinehilfe"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Planung"
          ],
          "description-english": "<p>An organizational rule that <a href=\"#/User\">users</a> have to follow when conducting their <a href=\"#/Task\">tasks</a>.<br />Note: <br />1.\tOrganizational requirements are <a href=\"#/Requirement\">requirements</a> on the <a href=\"#/User\">users</a> that lead to <a href=\"#/Requirement\">requirements</a> on the <a href=\"#/Interactive system\">Interactive system</a>.<br/>2.\tOrganisational requirement may be based on regulatory requirements.<br />Examples:<br />1.\tA salesperson must have a written approval from the director for offers that exceed 100.000 Euros.<br />2.\tA support staff member must send a <a href=\"#/User\">user</a> of the <a href=\"#/Interactive system\">interactive system</a> a gift card with a value of up to 50€ if the <a href=\"#/User\">user</a> has a reasonable complaint.<br/>3.\tOrganisational requirements based on regulatory requirements:<br/>a.\tUsers must confirm that they have read the terms and conditions before continuing.<br/>b.\tMinors are explicitly told that they are not allowed to proceed past the front page of a sports betting website.</p>",
          "description-german": "<p>Eine organisatorische Regel die <a href=\"#/Benutzer\">Benutzer</a> befolgen m\u00fcssen w\u00e4hrend sie ihre <a href=\"#/Aufgabe\">Aufgaben</a> l\u00f6sen.<br />Anmerkung:<br />1.\tOrganisatorische <a href=\"#/Anforderung\">Anforderungen</a> sind Anforderungen an die <a href=\"#/Benutzer\">Benutzer</a> die zu <a href=\"#/Anforderung\">Anforderungen</a> an das <a href=\"#/Interaktives System\">interaktive System</a> f\u00fchren.<br/>2.\tDie organisatorische <a href=\"#/Anforderung\">Anforderung</a> kann auf gesetzlichen Anforderungen basieren.<br />Beispiele: <br />1.\tEin Verk\u00e4ufer muss Angebote \u00fcber 100.000 Euro vom Gesch\u00e4ftsf\u00fchrer unterschreiben lassen.<br />2.\tEin Support-Mitarbeiter muss einem <a href=\"#/Benutzer\">Benutzer</a> des <a href=\"#/Interaktives System\">interaktiven Systems</a> eine Geschenkkarte von bis zu 50 € zukommen lassen, wenn der <a href=\"#/Benutzer\">Benutzer</a> eine berechtigte Beschwerde vorgebracht hat.<br/>3.\tOrganisatorische Anforderungen, die auf gesetzlichen Anforderungen basieren, sind:<br/>a.\tBenutzer müssen bestätigen, dass sie die Nutzungsbedingungen gelesen haben, bevor sie fortfahren.<br/>b.\tMinderjährige werden ausdrücklich darauf hingewiesen, dass sie keine weiteren als die Titelseite einer Sportwetten-Website einsehen dürfen.</p>",
          "term-english": "Organisational requirement",
          "term-german": "Organisatorische Anforderung"
        },
        {
          "categories": [
            "Rollen",
            "Planung"
          ],
          "description-english": "<p>A description of a fictitious but realistic <a href=\"#/User\">user</a> and what they intend to do when using an <a href=\"#/Interactive system\">interactive system</a><br/>Notes:<br/>1.\tPersonas are not real people; they are realistic representations of <a href=\"#/User\">users</a>, constructed from empirically determined data, for example from <a href=\"#/Observation\">observations</a> or <a href=\"#/Interview\">interviews</a>.<br/>2.\tPersonas typically have a name, age, some background, <a href=\"#/Goal\">goals</a> and aspirations. A persona description should include information about the persona’s knowledge about and interest in the subject matter of the <a href=\"#/Interactive system\">interactive system</a>. Including a photo in a persona description helps to create the illusion of a real person.</p>",
          "description-german": "<p>Eine Beschreibung eines konstruierten, aber realistischen <a href=\"#/Benutzer\">Benutzers</a> und was dieser bei der Benutzung eines <a href=\"#/Interaktives System\">interaktiven Systems</a> beabsichtigt.<br/>Anmerkungen:<br/>1.\tPersonas sind nicht Beschreibungen existierender Personen, sondern repräsentieren erfundene Beispiele eines realen Benutzers auf der Basis empirisch ermittelter Daten, zum Beispiel von <a href=\"#/Beobachtung\">Beobachtungen</a> oder <a href=\"#/Interview \">Interviews</a>.<br/>2.\tPersonas verfügen typischerweise über einen Namen, Alter, einige Hintergrundinformationen, <a href=\"#/Ziel\">Ziele</a> und Wünsche. Eine Persona-Beschreibung sollte Informationen über wesentliches Wissen im Themenfeld des <a href=\"#/Interaktives System\">interaktiven Systems</a> und die entsprechenden Interessen der Persona im Themenfeld beinhalten. Die Aufnahme eines Fotos in eine Persona-Beschreibung hilft dabei, die Vorstellung einer realen Person zu erzeugen.</p>",
          "term-english": "Persona",
          "term-german": "Persona"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Finding\">Finding</a></p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Usability-Befund\">Usability-Befund</a></p>",
          "term-english": "Positive usability finding",
          "term-german": "Positiver Usability-Befund"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "<p>An activity in a <a href=\"#/glossary?term=Usability\">Usability</a> test session where the usability <a href=\"#/glossary?term=Test+participant\">Test participant</a> answers questions about his/her experience and general impression of the <a href=\"#/glossary?term=Usability\">Usability</a> of the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>. <br />Notes:<br />1.\tThe post-session <a href=\"#/glossary?term=Interview\">Interview</a> takes place after the <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Test+participant\">Test participant</a> has carried out as many <a href=\"#/glossary?term=Usability\">Usability</a> test tasks as time allows. <br />2.\tAlso referred to as a <a href=\"#/glossary?term=Debriefing\">Debriefing</a>.</p>",
          "description-german": "<p>Eine Aktivit\u00e4t in einem <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a>, bei der ein <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> Fragen bez\u00fcglich seines allgemeinen Eindrucks hinsichtlich der <a href=\"#/glossary?term=Usability\">Usability</a> des interaktiven Systems beantwortet. <br />Anmerkungen:<br />1.\tDas Post-Session <a href=\"#/glossary?term=Interview\">Interview</a> findet statt, nachdem der <a href=\"#/glossary?term=Usability\">Usability</a>-<a href=\"#/glossary?term=Testteilnehmer\">Testteilnehmer</a> soviele der vorgesehenen <a href=\"#/glossary?term=Usability\">Usability</a>-Testaufgaben wie m\u00f6glich in der vorgegebenen Zeit erledigt hat. <br />2.\tWird auch als Debriefing oder <a href=\"#/glossary?term=Nachbesprechung\">Nachbesprechung</a> bezeichnet.</p>",
          "term-english": "Post-session interview",
          "term-german": "Post-Session Interview"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "<p>An activity in a <a href=\"#/glossary?term=Usability\">Usability</a> test session where the usability <a href=\"#/glossary?term=Test+participant\">Test participant</a> answers questions about his/her background and previous experience with the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> or related interactive systems. <br />Note:<br />1.\tThe pre-session <a href=\"#/glossary?term=Interview\">Interview</a> takes place after the <a href=\"#/glossary?term=Briefing\">Briefing</a> but before the <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Test+participant\">Test participant</a> starts carrying out <a href=\"#/glossary?term=Usability\">Usability</a> test tasks.</p>",
          "description-german": "<p>Eine T\u00e4tigkeit bei einem <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a>, bei der <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> Fragen bez\u00fcglich ihres Hintergrundes und vorheriger Erfahrung mit dem interaktiven System oder \u00e4hnlichen interaktiven Systemen beantworten. <br />Anmerkung:<br />1.\tDas Pre-Session <a href=\"#/glossary?term=Interview\">Interview</a> findet nach dem <a href=\"#/glossary?term=Briefing\">Briefing</a> statt, bevor der <a href=\"#/glossary?term=Usability\">Usability</a>-<a href=\"#/glossary?term=Testteilnehmer\">Testteilnehmer</a> beginnt, die <a href=\"#/glossary?term=Usability\">Usability</a>-Testaufgaben abzuarbeiten.</p>",
          "term-english": "Pre-session interview",
          "term-german": "Pre-Session Interview"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A <a href=\"#/User\">user</a> who uses the <a href=\"#/Interactive system\">interactive system</a> for its intended purpose.<br/><br/>Examples of primary users:<br/>1.\tA bank customer who uses a cash dispenser to withdraw money is a primary user of the cash dispenser.<br/>2.\tA call centre operative who uses a reservation system to reserve cars for customers is a primary user of the reservation system.</p>",
          "description-german": "<p>Ein <a href=\"#/Benutzer\">Benutzer</a>, der das <a href=\"#/Interaktives System\">interaktive System</a> für seinen beabsichtigten Zweck verwendet.<br/><br/>Beispiele für primäre Benutzer:<br/>1.\tin Bankkunde, der einen Geldautomaten benutzt, um Geld abzuheben, ist ein primärer Benutzer des Geldautomaten.<br/>2.\tEin Call-Center-Mitarbeiter, der ein Reservierungssystem verwendet, um Autos für Kunden zu reservieren, ist ein primärer Benutzer des Reservierungssystems.</p>",
          "term-english": "Primary user",
          "term-german": "Primärer Benutzer"
        },
        {
          "categories": [
            "Rollen",
            "Test"
          ],
          "description-english": "<p>A <a href=\"#/glossary?term=Usability\">Usability</a> specialist who makes notes of usability findings during a <a href=\"#/glossary?term=Usability+test\">Usability test</a> session, <a href=\"#/glossary?term=Focus+group\">Focus group</a> or <a href=\"#/glossary?term=Interview\">Interview</a>. <br />Notes:<br />1.\tNote-taker is a <a href=\"#/glossary?term=Role\">Role</a> in a <a href=\"#/glossary?term=Usability\">Usability</a> test session, focus group or interview.<br />2.\tThe use of a note-taker allows the <a href=\"#/glossary?term=Moderator\">Moderator</a> to fully concentrate on the <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Test+participant\">Test participant</a>.</p>",
          "description-german": "<p>Ein Usabilityspezialist, der Notizen \u00fcber <a href=\"#/glossary?term=Usability\">Usability</a>-Befunde w\u00e4hrend einer <a href=\"#/glossary?term=Usability-Testsitzung\">Usability-Testsitzung</a>, <a href=\"#/glossary?term=Fokusgruppe\">Fokusgruppe</a> oder <a href=\"#/glossary?term=Interview\">Interview</a> notiert. <br />Anmerkungen:<br />1.\tProtokollant ist eine <a href=\"#/glossary?term=Rolle\">Rolle</a> in einer <a href=\"#/glossary?term=Usability\">Usability</a>-Testsitzung, Fokusgruppe oder Interview<br />2.\tDer Einsatz eines Protokollanten erlaubt dem <a href=\"#/glossary?term=Moderator\">Moderator</a>, sich voll auf den <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> zu konzentrieren.</p>",
          "term-english": "Note-taker",
          "term-german": "Protokollant"
        },
        {
          "categories": [
            "Test",
            "System"
          ],
          "description-english": "<p>A representation of all or part of an <a href=\"#/Interactive system\">interactive system</a> that, although limited in some way, can be used for analysis, design and <a href=\"#/Usability evaluation\">usability evaluation</a>.<br/>Notes:<br/>1.\tThe key purposes of a prototype are<br/>a.\tTo facilitate early <a href=\"#/Evaluation\">evaluation</a> of the <a href=\"#/Effectiveness\">effectiveness</a> and <a href=\"#/Efficiency\">efficiency</a> of an <a href=\"#/Interactive system\">interactive system</a> at a time when it is still reasonably cheap to make fundamental changes to <a href=\"#/Information architecture\">information architecture</a> and design.<br/>b.\tTo increase the interest of prospective <a href=\"#/User\">users</a> in the new <a href=\"#/Interactive system\">interactive system</a> based on a concrete example. <a href=\"#/User\">Users</a> often find it easier to criticise something than to answer the <a href=\"#/Open question\">open question</a> “What do you want?”.<br/>c.\tTo show <a href=\"#/Stakeholder\">stakeholders</a> and colleagues a concrete example of what it is that you are planning.<br/>d.\tTo serve as a specification for the implementation of the <a href=\"#/Interactive system\">interactive system</a>. This particularly applies to <a href=\"#/High-fidelity prototype\">high-fidelity prototypes</a>.<br/>2.\tThis curriculum distinguishes between <a href=\"#/Low-fidelity prototype\">low-fidelity prototype</a> and <a href=\"#/High-fidelity prototype\">high-fidelity prototype</a>.</p>",
          "description-german": "<p>Eine Repräsentation von Teilen oder des gesamten <a href=\"#/Interaktives System\">interaktiven Systems</a>, die in einem bestimmten Maße für Analyse, Design und <a href=\"#/Usability-Evaluierung\">Usability-Evaluierung</a> benutzt werden kann.<br/>Anmerkungen:<br/>1.\tDie wichtigsten Zwecke eines Prototyps sind:<br/>a.\tEine frühzeitige <a href=\"#/Usability-Evaluierung\">Usability-Evaluierung</a> der <a href=\"#/Effektivität\">Effektivität</a> und <a href=\"#/Effizienz\">Effizienz</a> eines <a href=\"#/Interaktives System\">interaktiven Systems</a> zu einer Zeit zu ermöglichen, in der es noch relativ billig ist, grundlegende Änderungen an der <a href=\"#/Informationsarchitektur\">Informationsarchitektur</a> und der Gestaltung vorzunehmen.<br/>b.\tDas Interesse potenzieller <a href=\"#/Benutzer\">Benutzer</a> am neuen <a href=\"#/Interaktives System\">interaktiven System</a> anhand eines konkreten Beispiels zu erhöhen. <a href=\"#/Benutzer\">Benutzer</a> finden es oft leichter, etwas zu kritisieren, als die <a href=\"#/Offene Frage\">offene Frage</a> „Was willst du?“ zu beantworten.<br/>c.\t<a href=\"#/Interessenvertreter\">Interessenvertretern</a> und Kollegen ein konkretes Beispiel dafür zu geben, wie aussehen kann, was sie vorhaben.<br/>d.\tAls Spezifikation für die Implementierung des <a href=\"#/Interaktives System\">interaktiven Systems</a> zu dienen. Dies gilt insbesondere für <a href=\"#/High-fidelity-Prototyp\">High-fidelity-Prototypen</a>.<br/>2.\tDieses Curriculum unterscheidet zwischen <a href=\"#/Low-fidelity-Prototyp\">Low-Fidelity-Prototyp</a> und <a href=\"#/High-fidelity-Prototyp\">High-Fidelity- Prototyp</a>.</p>",
          "term-english": "Prototype",
          "term-german": "Prototyp"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "<p>A statement of what <a href=\"#/User\">users</a> must be able to locate, recognise, understand, select or input as part of conducting a <a href=\"#/Task\">task</a> with the <a href=\"#/Interactive system\">interactive system</a> to meet identified <a href=\"#/User need\">user needs</a> in a specified <a href=\"#/Context of use\">context of use</a>. <br />Notes: <br />1.\tQualitative user requirements are not features. They provide the basis for features.<br/>Examples:<br/>Reasonable qualitative user requirements:<br/>a.\t“The user must be able to see the number of people and suitcases that can fit into the cars available within a specific price range at the car rental website.”<br/>b.\t “The user must be able to select a car with automatic transmission on the car rental website.”<br/>c.\t“The user must be able to see the opening hours of a specific car rental location.”<br />2.\tIncorrect qualitative user requirements:<br/>a.\t“The user interface must be usable and support all user tasks” (too general).<br/>b.\t“The user interface must have a big, red ‘Rent this car’ button” (too detailed, and there is no user requirement, only a solution).</p>",
          "description-german": "<p>Eine Aussage darüber, was <a href=\"#/Benutzer\">Benutzer</a> im Rahmen der Durchführung einer <a href=\"#/Aufgabe\">Aufgabe</a> mit dem <a href=\"#/Interaktives System\">interaktiven System</a> feststellen, erkennen, verstehen, auswählen oder eingeben müssen, um den identifizierten Erfordernissen des Nutzungskontextes zu genügen.<br />Anmerkungen:<br />1.\tQualitative Nutzungsanforderungen sind keine Funktionen. Sie bieten die Grundlage für Funktionen.<br />Beispiele:<br/>1.\tAkzeptable qualitative Nutzungsanforderungen:<br/>a.\t„Der <a href=\"#/Benutzer\">Benutzer</a> muss in der Lage sein, die Anzahl der Personen und Koffer zu sehen, die in die Autos passen, die innerhalb einer bestimmten Preisspanne auf der Autovermietungswebsite verfügbar sind.“<br/>b.\t„Der <a href=\"#/Benutzer\">Benutzer</a> muss in der Lage sein, auf der Autovermietungswebsite ein Auto mit Automatikgetriebe auszuwählen.“<br/>c.\t„Der <a href=\"#/Benutzer\">Benutzer</a> muss in der Lage sein, die Öffnungszeiten eines bestimmten Autovermietungsstandortes zu sehen.“<br/>2.\tInkorrekte qualitative Nutzungsanforderungen:<br/>a.\t„Die <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a> muss benutzbar sein und alle <a href=\"#/Aufgabe\">Aufgaben</a> des <a href=\"#/Benutzer\">Benutzers</a> unterstützen.“ (zu allgemein).<br/>b.\t„Die <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a> muss einen großen, roten 'Miete dieses Auto'-Button haben.“ (zu detailliert und es wird hier nichts von der Nutzung gefordert, sondern die Lösung selbst präsentiert (roter Button)).</p>",
          "term-english": "Qualitative user requirement",
          "term-german": "Qualitative Nutzungsanforderung"
        },
        {
          "categories": [
            "Planung",
            "Anforderungen",
            "Evaluierung"
          ],
          "description-english": "<p>The degree to which the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> fulfils requirements.<br />Note: <br />1.\tExamples of quality characteristics other than <a href=\"#/glossary?term=Usability\">Usability</a> are correctness, reliability and security.</p>",
          "description-german": "<p>Grad der Erf\u00fcllung von Anforderungen durch ein <a href=\"#/glossary?term=Interaktives+System\">Interaktives System</a>.<br />Anmerkung: <br />1.\tBeispiele f\u00fcr Qualit\u00e4tsmerkmale neben <a href=\"#/glossary?term=Usability\">Usability</a> sind Korrektheit, Verl\u00e4sslichkeit und Sicherheit.</p>",
          "term-english": "Quality",
          "term-german": "Qualit\u00e4t"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "<p>A required level of <a href=\"#/Usability\">usability</a> to meet identified <a href=\"#/User need\">user needs</a> expressed in terms of measures of <a href=\"#/Effectiveness\">effectiveness</a>, <a href=\"#/Efficiency\">efficiency</a>, <a href=\"#/Satisfaction\">satisfaction</a>, <a href=\"#/Accessibility\">accessibility</a>, <a href=\"#/User experience\">user experience</a> and avoidance of harm from use in a specified <a href=\"#/Context of use\">context of use</a>. <br />Notes: <br />1.\tQuantitative user requirements are acceptance criteria for <a href=\"#/Usability\">usability</a> and <a href=\"#/User experience\">user experience</a>, for example whether users can solve particular <a href=\"#/Task\">tasks</a> with the <a href=\"#/Interactive system\">interactive system</a> in an acceptable time or with a specified maximum number of use errors.<br />2.\tWhen defining suitable quantitative user requirements:<br/>a.\tLook for guidance from existing systems – <a href=\"#/User\">users</a> will expect the new <a href=\"#/Interactive system\">interactive system</a> to perform better than or at least as well as the existing system.<br/>b.\tConsider quantitative user requirements set by <a href=\"#/Stakeholder\">stakeholders</a> who have an interest in a specific minimum performance of the <a href=\"#/Interactive system\">interactive system</a>.<br/>c.\tVerify quantitative user requirements with <a href=\"#/User\">users</a> to determine whether or not they are appropriate from their perspective.<br/><br/>Examples:<br/>1.\tMeasure of effectiveness: “95% of 25 users who have used the car rental website at least twice within the past 6 months must be able to rent an economy size car at Frankfurt Airport (Germany) for two days starting tomorrow at 09.00.”<br/>2.\tMeasure of efficiency: “80% of 25 users who have used the car rental website at least twice within the past 6 months must be able to rent an economy size car at Frankfurt Airport (Germany) for two days starting tomorrow at 09.00, within 5 minutes.”<br/>3.\tMeasure of satisfaction: “80% of 25 users who have used the car rental website at least twice within the past 2 months must answer ‘Agree’ or ‘Strongly agree’ to the statement ‘I would recommend this website to a friend.’ ”<br/>4.\tMeasure of accessibility: “80% of 25 people using screen readers must be able to rent a car as specified in example 2 within 10 minutes.”<br/>5.\tMeasure of user experience: “After using the interactive system for a month, 80% of 200 users must answer ‘Agree’ or ‘Strongly agree’ to the statement ‘I would recommend this product to a friend.’ ”<br/>6.\tMeasure of avoidance of harm from use: “99% of 100 users who have booked a flight must be fully aware of the dates they have selected, and of any additional costs.<br/>6.\rCompare the above example to the examples in qualitative user requirement.</p>",
          "description-german": "<p>Ein erforderliches Maß an <a href=\"#/Usability\">Usability</a>, um die identifizierten <a href=\"#/Usability\">Erfordernisse</a> in einem bestimmten <a href=\"#/Usability\">Nutzungskontext</a> zu erfüllen, ausgedrückt in Maßen der <a href=\"#/Effektivität\">Effektivität</a>, der <a href=\"#/Effizienz\">Effizienz</a>, der <a href=\"#/Zufriedenstellung\">Zufriedenstellung</a>, der <a href=\"#/Barrierefreiheit\">Barrierefreiheit</a>, der <a href=\"#/Benutzererlebnis\">User Experience</a> und der Vermeidung von Schäden durch die Benutzung.<br />Anmerkungen:<br />1.\tQuantitative Nutzungsanforderungen sind Akzeptanzkriterien für <a href=\"#/Benutzererlebnis\">Usability</a> und <a href=\"#/Benutzererlebnis\">User Experience</a>, zum Beispiel, ob <a href=\"#/Benutzer\">Benutzer</a> bestimmte <a href=\"#/Aufgabe\">Aufgaben</a> mit dem <a href=\"#/Interaktives System\">interaktiven System</a> innerhalb einer akzeptablen Zeit oder mit einer spezifizierten maximalen Anzahl von Fehlern während der Benutzung erledigen können.Bei der Definition geeigneter quantitativer Nutzungsanforderungen:<br/>a.\tNutzen Sie Erfahrungen von bestehenden Systemen – <a href=\"#/Benutzer\">Benutzer</a> erwarten, dass das neue <a href=\"#/Interaktives System\">interaktive System</a> besser oder zumindest genauso gut wie das vorhandene System funktioniert.<br/>b.\tBerücksichtigen Sie die von <a href=\"#/Interessenvertreter\">Interessenvertretern</a> festgelegten quantitativen Nutzungsanforderungen, da diese an einer bestimmten Mindestleistung des <a href=\"#/Interaktives System\">interaktiven Systems</a> interessiert sind.<br/>c.\tÜberprüfen Sie die quantitativen Nutzungsanforderungen mit den <a href=\"#/Benutzer\">Benutzern</a>, um festzustellen, ob diese aus deren Sicht angemessen sind oder nicht.<br/>Beispiele:<br/>1.\t<a href=\"#/Effektivität\">Effektivität</a>smaß: „95% von 25 <a href=\"#/Benutzer\">Benutzern</a>, die die Autovermietungswebsite in den letzten 6 Monaten mindestens zweimal genutzt haben, müssen ein Economy-Auto am Frankfurter Flughafen für zwei Tage ab morgen 09.00 Uhr mieten können.“<br/>2.\t<a href=\"#/Effizienz\">Effizienz</a>maß: „80% von 25 <a href=\"#/Benutzer\">Benutzern</a>, die die Autovermietungswebsite in den letzten 6 Monaten mindestens zweimal genutzt haben, müssen innerhalb von 5 Minuten ein Economy-Auto am Frankfurter Flughafen ab morgen 09.00 Uhr mieten können.“<br/>3.\t<a href=\"#/Zufriedenstellung\">Zufriedenstellung</a>smaß: „80% von 25 <a href=\"#/Benutzer\">Benutzern,</a> die die Autovermietungswebsite in den letzten 2 Monaten mindestens zweimal genutzt haben, müssen die Aussage ‚Ich würde diese Website einem Freund empfehlen‘ mit ‚Stimme zu‘ oder ‚Stimme voll zu‘ beantworten.“<br/>4.\tMaß der <a href=\"#/Barrierefreiheit\">Barrierefreiheit</a>: „80% von 25 Personen, die Screenreader benutzen, müssen in der Lage sein, ein Auto wie in Beispiel 2 angegeben innerhalb von 10 Minuten mieten zu können.“<br/>5.\tMaß der <a href=\"#/Benutzererlebnis\">User Experience</a>: „Nach der Benutzung des interaktiven Systems für einen Monat müssen 80% von 200 <a href=\"#/Benutzer\">Benutzern</a> die Aussage ‚Ich würde dieses Produkt einem Freund empfehlen.‘ mit ‚Stimme zu‘ oder ‚Stimme voll zu‘ beantworten.“<br/>6.\tMaß zur Vermeidung von Schäden durch die Benutzung: „99% von 100 <a href=\"#/Benutzer\">Benutzern</a>, die einen Flug gebucht haben, müssen sich der von ihnen ausgewählten Daten und eventueller zusätzlicher Kosten bewusst sein.“<br/>7.\tVergleichen Sie obige Beispiele mit den Beispielen für <a href=\"#/Qualitative Nutzungsanforderung\">qualitative Nutzungsanforderung</a>.</p>",
          "term-english": "Quantitative user requirement",
          "term-german": "Quantitative Nutzungsanforderung"
        },
        {
          "categories": [
            "Planung",
            "Test"
          ],
          "description-english": "<p>A process for selecting candidates that have the required qualifications to participate in a human-centred activity such as a <a href=\"#/glossary?term=Focus+group\">Focus group</a>, contextual <a href=\"#/glossary?term=Interview\">Interview</a>, or <a href=\"#/glossary?term=Usability\">Usability</a> test.<br />Note:<br />1.\tA <a href=\"#/glossary?term=Recruitment+screener\">Recruitment screener</a> is often used to determine whether candidates have the required qualifications to participate in the human-centred activity.<br />2.\tRelevant qualifications include: Background, knowledge of the subject matter, attitudes and interests.</p>",
          "description-german": "<p>Akquise von Benutzern, die die erforderlichen Qualifikationen haben, an einer menschzentrierten Aktivit\u00e4t wie z.B. einem <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a>, einem kontextuellen <a href=\"#/glossary?term=Interview\">Interview</a> oder einer <a href=\"#/glossary?term=Fokusgruppe\">Fokusgruppe</a> teilzunehmen.<br />Anmerkung: <br />1.\tOft wird ein <a href=\"#/glossary?term=Rekrutierungsfragebogen\">Rekrutierungsfragebogen</a> eingesetzt, um festzustellen ob Kandidaten \u00fcber die erforderlichen Qualifikationen zur Teilnahme an der menschzentrierten Aktivit\u00e4t verf\u00fcgen.<br />2.\tRelevante Qualifikationen beinhalten: Hintergrund, Wissen \u00fcber das Sachgebiet, Einstellungen und Interessen.</p>",
          "term-english": "Recruiting",
          "term-german": "Rekrutierung"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>A series of questions for prospective participants to identify whether they represent the intended users and therefore qualify to participate in a human-centred activity, for example a <a href=\"#/glossary?term=Usability\">Usability</a> test or a <a href=\"#/glossary?term=Focus+group\">Focus group</a>.<br />Notes:<br />1.\tA recruitment screener is used during <a href=\"#/glossary?term=Recruiting\">Recruiting</a> to determine whether candidates have the required qualifications to participate in the activity.<br />2.\tRelevant qualifications include: Background, knowledge of the subject matter, attitudes and interests.</p>",
          "description-german": "<p>Eine Reihe von Fragen f\u00fcr potenzielle Teilnehmer hinsichtlich ihrer Qualifikationen zur Teilnahme an einer menschzentrierten Aktivit\u00e4t wie z.B. einem <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> oder einer <a href=\"#/glossary?term=Fokusgruppe\">Fokusgruppe</a>.<br />Anmerkungen: <br />1.\tEin Rekrutierungsfragebogen wird w\u00e4hrend der <a href=\"#/glossary?term=Rekrutierung\">Rekrutierung</a> von Teilnehmern benutzt, um festzustellen ob Kandidaten \u00fcber die erforderlichen Qualifikationen zur Teilnahme an der menschzentrierten Aktivit\u00e4t verf\u00fcgen.<br />2.\tRelevante Qualifikationen beinhalten: Hintergrund, Wissen \u00fcber das Sachgebiet, Einstellungen und Interessen.<br />3.\tDer englische Ausdruck f\u00fcr Rekrutierungs\u00ad<a href=\"#/glossary?term=Fragebogen\">Fragebogen</a> ist Screener oder Recruitment Screener.</p>",
          "term-english": "Recruitment screener",
          "term-german": "Rekrutierungsfragebogen"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p>A <a href=\"#/glossary?term=Usability\">Usability</a> test where the usability <a href=\"#/glossary?term=Test+participant\">Test participant</a> and the <a href=\"#/glossary?term=Moderator\">Moderator</a> are in different physical locations. <br />Notes: <br />1.\tThe moderator observes the <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Test+participant\">Test participant</a> using an internet connection. <br />2.\tThe moderator communicates with the <a href=\"#/glossary?term=Usability\">Usability</a> test participant over the telephone or via an internet connection.<br />3.\tCompare to <a href=\"#/glossary?term=Usability+test\">Usability test</a> and unattended usability\u00a0test.</p>",
          "description-german": "<p>Ein <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> bei dem sich der <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> und der <a href=\"#/glossary?term=Moderator\">Moderator</a> an unterschiedlichen Orten befinden <br />(\u201eRemote\u201c bedeutet hier \u201eentfernt liegend\u201c). <br />Anmerkungen:<br />1.\tDer Moderator beobachtet den <a href=\"#/glossary?term=Usability\">Usability</a>-<a href=\"#/glossary?term=Testteilnehmer\">Testteilnehmer</a> \u00fcber eine Internetverbindung. <br />2.\tDer <a href=\"#/glossary?term=Moderator\">Moderator</a> kommuniziert mit dem <a href=\"#/glossary?term=Usability\">Usability</a>-Testteilnehmer \u00fcber Telefon oder Internet.<br />3.\tVergleiche mit <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> und <a href=\"#/glossary?term=Unbeaufsichtigter+Usability-Test\">Unbeaufsichtigter Usability-Test</a>.</p>",
          "term-english": "Remote usability test",
          "term-german": "Remote Usability-Test"
        },
        {
          "categories": [
            "System"
          ],
          "description-english": "<p>All means required to use an <a href=\"#/Interactive system\">Interactive system</a>.<br />Note:<br />Resources can be<br>a.\tReusable – for example: equipment, information and available human-based and system-based support; or<br/>b.\tExhaustible – for example: time, human effort, financial resources and materials.</p>",
          "description-german": "<p>Alle Mittel die zur Nutzung eines <a href=\"#/Interaktives System\">interaktiven Systems</a> notwendig sind. <br />Anmerkung: <br />1.\tRessourcen können sein<br/>a.\t Wiederverwendbar - zum Beispiel: Ausrüstung, Informationen und verfügbare menschliche und systembasierte Unterstützung; oder<br/>b.\tErschöpfbar - zum Beispiel: Zeit, menschliche Anstrengung, finanzielle Ressourcen und Materialien.</p>",
          "term-english": "Resource",
          "term-german": "Ressourcen"
        },
        {
          "categories": [
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=User\">User</a> interface <a href=\"#/glossary?term=Guideline\">Guideline</a>.</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Gestaltungsregel\">Gestaltungsregel</a></p>",
          "term-english": "Guideline",
          "term-german": "Richtlinie"
        },
        {
          "categories": [
            "Anforderungen",
            "Rollen"
          ],
          "description-english": "<p>A duty or function that a person carries out within an organization.<br />Notes: <br />1.\tA role describes a set of connected behaviors, rights, obligations, and norms in a job situation. <br />2.\tRoles are occupied by individuals, who are called actors.<br />3.\tDepending on the complexity of a project, several people might share one role or multiple roles might be assigned to one person.<br />4.\tWork roles are \"hats\" that people wear when they take on the corresponding job responsibilities and perform the associated activities.<br />Example: <br />1.\tIn a <a href=\"#/glossary?term=Usability\">Usability</a> test session, one person can simultaneously occupy the roles <a href=\"#/glossary?term=Moderator\">Moderator</a> and <a href=\"#/glossary?term=Note-taker\">Note-taker</a>. In another <a href=\"#/glossary?term=Usability\">Usability</a> test session, in contrast, one person may act as moderator and two other people may both act as note-takers.</p>",
          "description-german": "<p>Eine Funktion die eine Person innerhalb der Struktur einer Organisation inne hat.<br />Anmerkungen:<br />1.\tEine Rolle beschreibt eine Menge von zusammengeh\u00f6rigen Verhaltensweisen, Rechten, Pflichten und Normen in einem beruflichen Kontext.<br />2.\tRollen werden von Individuen besetzt.<br />3.\tAbh\u00e4ngig von der Komplexit\u00e4t eines Projektes k\u00f6nnen mehrere Menschen eine Rolle teilen oder mehrere Rollen einer Person zugewiesen werden.<br />4.\tArbeitsrollen sind \u201eH\u00fcte\u201c, die Menschen aufhaben, wenn sie die entsprechenden Verantwortlichkeiten \u00fcbernehmen und die damit verbundenen T\u00e4tigkeiten aus\u00fcben.<br />Beispiel:<br />1.\tIn einer <a href=\"#/glossary?term=Usability-Testsitzung\">Usability-Testsitzung</a> kann eine Person gleichzeitig die Rolle des Moderators und die des Protokollanten \u00fcbernehmen. <br />\tIn einer anderen <a href=\"#/glossary?term=Usability\">Usability</a>-Testsitzung hingegen, k\u00f6nnte eine Person als <a href=\"#/glossary?term=Moderator\">Moderator</a> fungieren und zwei andere Personen k\u00f6nnten beide als <a href=\"#/glossary?term=Protokollant\">Protokollant</a> auftreten.</p>",
          "term-english": "Role",
          "term-german": "Rolle"
        },
        {
          "categories": [
            "Rollen",
            "Planung"
          ],
          "description-english": "<p>A <a href=\"#/User\">user</a> who carries out support <a href=\"#/Task\">tasks</a> with the <a href=\"#/Interactive system\">interactive system</a>, for example to maintain it or to train <a href=\"#/Primary user\">primary users</a>.<br/>Note:<br/>1.\tSecondary users – in particular maintenance staff – typically interact with a different <a href=\"#/User interface\">user interface</a> than <a href=\"#/Primary user\">primary users</a>. This <a href=\"#/User interface\">user interface</a> also requires context analysis and specification of <a href=\"#/User requirement\">user requirements</a> to be usable.<br/><br/>Examples of secondary users:<br/>1.\tA user who prints a document on a printer is a primary user of the printer. When the same user a moment later changes the ink on the printer, he or she is a secondary user of the printer.<br/>2.\tA bank employee who restocks a cash dispenser with cash is a secondary user of the cash dispenser.<br/>3.\tA trainer who teaches a call centre operative how to use a car reservation system is a secondary user of the reservation system.</p>",
          "description-german": "<p>Ein <a href=\"#/Benutzer\">Benutzer</a>, der unterstützende <a href=\"#/Aufgabe\">Aufgaben</a> mit dem <a href=\"#/Interaktives System\">interaktiven System</a> ausführt, beispielsweise um es zu pflegen oder um <a href=\"#/Primärer Benutzer\">primäre Benutzer</a> zu schulen.<br/>Anmerkung:<br/>1.\tSekundäre Benutzer - insbesondere Wartungspersonal - interagieren typischerweise mit einer anderen <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a> als <a href=\"#/Primäre Benutzer\">primäre Benutzer</a>. Diese <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a> erfordert ebenfalls eine Analyse des <a href=\"#/Nutzungskontext\">Nutzungskontextes</a> und eine Spezifikation von <a href=\"#/Nutzungsanforderung\">Nutzungsanforderungen</a>, um benutzbar zu sein.<br/><br/> Beispiele für sekundäre Benutzer:<br/>1.\tEin <a href=\"#/Benutzer\">Benutzer</a>, der ein Dokument auf einem Drucker druckt, ist ein <a href=\"#/Primärer Benutzer\">primärer Benutzer</a> des Druckers. Wenn derselbe <a href=\"#/Benutzer\">Benutzer</a> einen Moment später die Tintenpatrone des Druckers wechselt, ist er ein sekundärer Benutzer des Druckers.<br/>2.\tEin Bankangestellter, der einen Geldautomaten mit Geld füllt, ist ein sekundärer Benutzer des Geldautomaten.<br/>3.\tEin Ausbilder, der einem Call-Center-Mitarbeiter beibringt, wie ein Autoreservierungssystem zu benutzen ist, ist ein sekundärer Benutzer des Reservierungssystems.</p>",
          "term-english": "Secondary user",
          "term-german": "Sekundärer Benutzer"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "<p>The property of a <a href=\"#/glossary?term=Dialogue\">Dialogue</a> to, at any time, make it obvious to the users which dialogue they are in, where they are within the dialogue, which actions can be taken, and how they can be performed.<br />Note: <br />1.\tAffordances and self-descriptiveness are means to make an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> <a href=\"#/glossary?term=Intuitive\">Intuitive</a>. <br />2.\tSelf-descriptiveness is a dialogue principle. </p>",
          "description-german": "<p>Die Eigenschaft eines Dialogs zu jeder Zeit dem <a href=\"#/glossary?term=Benutzer\">Benutzer</a> offensichtlich zu machen, in welchem <a href=\"#/glossary?term=Dialog\">Dialog</a>, an welcher Stelle im Dialog er sich befindet, welche Handlungen unternommen werden k\u00f6nnen und wie diese ausgef\u00fchrt werden k\u00f6nnen.<br />Anmerkung:<br />1.\t<a href=\"#/glossary?term=Affordance\">Affordance</a> und Selbstbeschreibungsf\u00e4higkeit sind Mittel, um ein <a href=\"#/glossary?term=Interaktives+System\">Interaktives System</a> intuitive zu gestalten.<br />2.\tSelbstbeschreibungsf\u00e4higkeit ist ein Dialogprinzip. </p>",
          "term-english": "Self-descriptiveness",
          "term-german": "Selbstbeschreibungsf\u00e4higkeit"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "<p>The ability of a <a href=\"#/glossary?term=User\">User</a> to initiate and control the direction and pace of the interaction until the point at which the <a href=\"#/glossary?term=Goal\">Goal</a> has been met.<br />Note:<br />1.\tControllability is a <a href=\"#/glossary?term=Dialogue\">Dialogue</a> principle.</p>",
          "description-german": "<p>Der <a href=\"#/glossary?term=Benutzer\">Benutzer</a> ist in der Lage einen Dialogablauf zu starten sowie seine Richtung und Geschwindigkeit zu beeinflussen, bis das <a href=\"#/glossary?term=Ziel\">Ziel</a> erreicht ist.<br />Anmerkung:<br />1.\tSteuerbarkeit ist ein Dialogprinzip.</p>",
          "term-english": "Controllability",
          "term-german": "Steuerbarkeit"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "<p>A sequence of visual frames illustrating the interplay between a <a href=\"#/User\">User</a> and an envisioned <a href=\"#/Interactive system\">interactive system</a>. <br />Note:<br />1.\tThe purpose of a storyboard is similar to the purpose of a <a href=\"#/Use scenario\">use scenario</a>.<br/>2.\tA storyboard is a comic book style representation of a <a href=\"#/Use scenario\">use scenario</a>.<br/>3.\tStoryboards can also be used to illustrate a current <a href=\"#/User experience\">user experience</a>.</p>",
          "description-german": "<p>Eine Folge visueller Bildschirminhalte, die das Zusammenspiel zwischen einem <a href=\"#/Benutzer\">Benutzer</a> und einem vorgestellten <a href=\"#/Interaktives System\">interaktiven System</a> darstellt. <br />Anmerkung:<br />1.\tDer Zweck eines Storyboards ähnelt dem Zweck eines <a href=\"#/Nutzungsszenario\">Nutzungsszenarios</a>.<br />2.\tEin Storyboard ist eine Comic-artige Darstellung eines <a href=\"#/Nutzungsszenario\">Nutzungsszenarios</a>.<br/>3.\tStoryboards können auch verwendet werden, um eine aktuelle <a href=\"#/Benutzererlebnis\">User Experience</a> zu veranschaulichen. </p>",
          "term-english": "Storyboard",
          "term-german": "Storyboard"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "<p>A collection of <a href=\"#/glossary?term=User\">User</a> interface guidelines used to ensure <a href=\"#/glossary?term=Consistency\">Consistency</a> in the appearance and behaviour of the <a href=\"#/glossary?term=User+interface\">User interface</a> of the interactive systems produced by an organization <br />Note:<br />1.\tStyleguides are sometimes called UX Guides.<br />Examples of styleguides:<br />1.\tWindows <a href=\"#/glossary?term=User+experience\">User experience</a> Interaction Guidelines for Windows Desktop apps (\u201cUX\u00a0Guide\u201d)<br />2.\tIOS Human Interface Guidelines</p>",
          "description-german": "<p>Eine Sammlung von Gestaltungsregeln die verwendet wird, um die grunds\u00e4tzliche Erscheinung der <a href=\"#/glossary?term=Benutzungsschnittstelle\">Benutzungsschnittstelle</a> auf jeglicher Software einer Organisation festzulegen.<br />Anmerkung:<br />1.\tStyleguides werden manchmal auch als UX Guides bezeichnet.<br />Beispiele f\u00fcr Styleguides:<br />1.\tWindows User Experience Interaction Guidelines for Windows Desktop apps (\u201eUX\u00a0Guide\u201c)<br />2.\tIOS Human Interface Guidelines</p>",
          "term-english": "Style guide",
          "term-german": "Style Guide"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>A question in an <a href=\"#/Interview\">Interview</a> that signals a preference for certain possibilities, or attempts to direct the reply in a certain direction. <br />Note:<br />1.\tCompare to <a href=\"#/Neutral question\">Neutral question</a>.<br />Example of a leading question:<br />1.\t“Would you like to have the ability to categorise clients by their annual spend with your company?”<br/>2.\t“What advantages does the current car rental website offer for your choice of rental car?”</p>",
          "description-german": "<p>Eine Frage in einem <a href=\"#/Interview\">Interview</a>, die eine Pr\u00e4ferenz f\u00fcr bestimmte Antwortm\u00f6glichkeiten vorgibt oder versucht, die Antwort in eine bestimmte Richtung zu lenken. <br />Anmerkung:<br />1.\tVergleiche mit <a href=\"#/Neutrale Frage\">neutraler Frage</a>.<br />Beispiel f\u00fcr Suggestivfrage:<br />1.\t„Möchten Sie die Möglichkeit haben, Kunden anhand ihrer jährlichen Ausgaben in Ihrem Unternehmen zu kategorisieren?“<br/>2.\t„Welche Vorteile bietet die aktuelle Autovermietungswebsite für die Wahl Ihres Mietwagens?“</p>",
          "term-english": "Leading question",
          "term-german": "Suggestionsfrage"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "<p>A type of <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a> designed and used to gather conclusions about the merit or worth of an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>, especially when a substantial part of it has completed design.<br />Notes:<br />1.\tA summative <a href=\"#/glossary?term=Usability\">Usability</a> evaluation may be used to evaluate a design against <a href=\"#/glossary?term=User\">User</a> requirements in order to determine whether the design is acceptable from the users' point of view.<br />2.\tCompare to Formative <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a>.</p>",
          "description-german": "<p>Eine Usabilityevaluierung, die darauf ausgerichtet ist, Schlussfolgerungen zur <a href=\"#/glossary?term=Qualit%C3%A4t\">Qualit\u00e4t</a> eines interaktiven Systems aus Sicht der <a href=\"#/glossary?term=Usability\">Usability</a> zu ziehen, insbesondere wenn ein wesentlicher Teil der Entwicklung fertig ist.  <br />Anmerkung: <br />1.\tEine summative <a href=\"#/glossary?term=Evaluierung\">Evaluierung</a> kann dazu genutzt werden, ein Design gegen Nutzungsanforderungen zu evaluieren, um festzustellen, ob das Design aus der Perspektive der <a href=\"#/glossary?term=Benutzer\">Benutzer</a> akzeptabel ist.<br />2.\tVergleiche mit Formativer <a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a>.</p>",
          "term-english": "Summative usability evaluation",
          "term-german": "Summative Usability-Evaluierung"
        },
        {
          "categories": [
            "Prinzipien",
            "Implementierung"
          ],
          "description-english": "<p>Explicit information about an event or a condition from an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> to a <a href=\"#/glossary?term=User\">User</a>.<br />Note: <br />1.\tSystem-initiated guidance includes <br />a.\tMessages (informative, warning, error)<br />b.\tStatus information, for example \"7 new messages\"<br />c.\tInstructions, for example \"Separate e-mail addresses by space, comma, semicolon or line break\"<br />2.\tMessages must be constructive, precise, comprehensible and visible. <br />3.\tSystem-initiated guidance is a form of <a href=\"#/glossary?term=User+assistance\">User assistance</a>.</p>",
          "description-german": "<p>Explizite Information \u00fcber ein Ereignis oder einen Zustand vom interaktiven System an den <a href=\"#/glossary?term=Benutzer\">Benutzer</a>. <br />Anmerkungen: <br />Systeminitiierte Benutzerf\u00fchrung umfasst:<br />Meldungen (informativ, warnend, auf Fehler hinweisend)<br />Statusinformation, z.B. \u201d7 neue Nachrichten\u201d<br />Instruktionen, z.B. \u201dE-Mail-Adressen k\u00f6nnen mit einem Leerzeichen, einem Komma, einem Semikolon oder einem Zeilenumbruch getrennt werden.\u201d<br />2.\tMeldungen, m\u00fcssen konstruktiv, pr\u00e4zise, verst\u00e4ndlich und sichtbar sein.<br />3.\tSysteminitiierte Benutzerf\u00fchrung ist eine Form der <a href=\"#/glossary?term=Benutzerunterst%C3%BCtzung\">Benutzerunterst\u00fctzung</a>.</p>",
          "term-english": "System-initiated guidance",
          "term-german": "Systeminitiierte Benutzerf\u00fchrung"
        },
        {
          "categories": [
            "Test",
            "Planung"
          ],
          "description-english": "<p>A narrative text description of the procedure a specific <a href=\"#/User\">user</a> currently follows to complete one or more <a href=\"#/Task\">tasks</a>.<br/>Notes:<br/>1.\tThe specific <a href=\"#/User\">user</a> in the scenario is often a <a href=\"#/Persona\">persona</a>.<br/>2.\tAs-is scenarios are created by a <a href=\"#/User experience professional\">user experience professional</a> based on results from <a href=\"#/Observation\">observation</a> and <a href=\"#/Contextual interview\">contextual interviews</a>.<br/>3.\tAs-is scenarios are a suitable basis for developing <a href=\"#/Persona\">personas</a> as thinking about <a href=\"#/User\">users</a> in their current <a href=\"#/Context of use\">context of use</a> involves thinking about what they want to do, and thinking about activities involves thinking about who will be undertaking them.<br/>4.\tAs-is scenarios are reviewed by users to detect misunderstandings that may have occurred during <a href=\"#/Contextual interview\">contextual interview</a>.<br/><br/>Examples:<br/>As-is scenario<br/>“John Miller is a business traveller who often takes flights in the course of a week. He prefers to take his car to the airport. But every now and then he misses a flight and then regrets not having taken a taxi or tram to the airport. He simply underestimates the queues at the front of the car park and the walking time to the gate.” Compare this example to the corresponding example in <a href=\"#/Use scenario\">use scenario</a>.<br/>2.\tSuggestions from interview participants may be added to the as-is scenario:<br/>John Miller suggests: “It would be wonderful if I could just pre-order a parking spot and skip the queues. If I find out that no parking spots are available, I could simply call a taxi. This would allow me to plan my time better. They could also offer an express valet service, where I would simply leave my car and my keys and they would park the car for me – for a fee, of course.”</p>",
          "description-german": "<p>Eine erzählende, textuelle Beschreibung des Vorgehens, das ein bestimmter Benutzer anwendet, um eine oder mehrere <a href=\"#/Aufgabe\">Aufgaben</a> zu erledigen.<br />Anmerkungen: <br />1.\tDer spezifische <a href=\"#/Benutzer\">Benutzer</a> in dem Szenario ist oft eine <a href=\"#/Persona\">Persona</a>.<br />2.\tIst-Szenarien werden von einem <a href=\"#/User Experience Professional\">User Experience Professional</a> basierend auf Ergebnissen von <a href=\"#/Beobachtung\">Beobachtungen</a> und <a href=\"#/Kontextuelles Interview\">kontextuellen Interviews</a> erstellt.<br/>3.\tIst-Szenarien sind eine hilfreiche Basis zur Entwicklung von <a href=\"#/Persona\">Personas</a>, da das Analysieren von <a href=\"#/Benutzer\">Benutzern</a> in ihrem aktuellen <a href=\"#/Nutzungskontext\">Nutzungskontext</a> eine Analyse ihres Verhaltens beinhaltet. Zur Analyse ihrer Tätigkeiten gehört herauszufinden, wer diese Tätigkeiten durchführt.<br/>4.\tIst-Szenarien werden von <a href=\"#/Benutzer\">Benutzern</a> überprüft, um Missverständnisse zu entdecken, die während <a href=\"#/Kontextuelles Interview\">kontextueller Interviews</a> aufgetreten sein könnten.<br/><br/>Beispiele:<br/>1.\tIst-Szenario<br/>„John Miller ist ein Geschäftsreisender, der im Laufe einer Woche mehrere Flüge tätigt. Er fährt bevorzugt mit seinem Auto zum Flughafen. Gelegentlich verpasst er ein Flugzeug und bereut dann, nicht mit dem Taxi oder mit der Bahn zum Flughafen gefahren zu sein. Er unterschätzt einfach die Fahrzeugschlangen vor der Einfahrt des Parkhauses und die Laufzeit bis zum Flugsteig.“ Vergleiche dieses Beispiel mit dem entsprechenden Beispiel in <a href=\"#/Nutzungsszenario\">Nutzungsszenario</a>.<br/>2.\tVorschläge von Interviewteilnehmern können dem Ist-Szenario hinzugefügt werden: John Miller schlägt vor: Es wäre wunderbar, wenn ich einfach einen Parkplatz vorbestellen und die Warteschlangen überspringen könnte. Wenn ich feststelle, dass keine Parkplätze zur Verfügung stehen, kann ich einfach ein Taxi rufen. Dies würde mir erlauben, meine Zeit besser zu planen. Sie könnten auch einen Express-Parkservice anbieten, bei dem ich einfach mein Auto und meine Schlüssel abgeben würde und sie würden das Auto für mich parken - gegen eine Gebühr natürlich.“</p>",
          "term-english": "As-is scenario",
          "term-german": "Ist-Szenario"
        },
        {
          "categories": [
            "Planung",
            "Test"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> test <a href=\"#/glossary?term=Task\">Task</a>.</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Usability-Testaufgabe\">Usability-Testaufgabe</a>.</p>",
          "term-english": "Test task",
          "term-german": "Testaufgabe"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> test report.</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Usability-Testbericht\">Usability-Testbericht</a>.</p>",
          "term-english": "Test report",
          "term-german": "Testbericht"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> test script.</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Usability-Testskript\">Usability-Testskript</a>.</p>",
          "term-english": "Test script",
          "term-german": "Testskript"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> test participant</p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a></p>",
          "term-english": "Test participant",
          "term-german": "Testteilnehmer"
        },
        {
          "categories": [
            "Planung",
            "System"
          ],
          "description-english": "<p>The physical, social and technical conditions in which a <a href=\"#/User\">User</a> interacts with an <a href=\"#/Interactive system\">Interactive system</a>.<br />Note: <br />1.\tThe social conditions include the organizational conditions.</p>",
          "description-german": "<p>Die physischen, sozialen und technischen Bedingungen, unter denen ein <a href=\"#/Benutzer\">Benutzer</a> mit einem <a href=\"#/Interaktives System\">interaktiven System</a> interagiert.<br />Anmerkung: <br />1.\tDie sozialen Bedingungen umfassen die organisatorischen Bedingungen.</p>",
          "term-english": "Environment",
          "term-german": "Umgebung"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "<p>A <a href=\"#/glossary?term=Usability\">Usability</a> test where <a href=\"#/glossary?term=Usability+test\">Usability test</a> participants solve usability test tasks without being observed. <br />Note: <br />1.\tUsability test participants' actions are usually video recorded for later analysis.<br />2.\tUnattended usability tests are often conducted on the <a href=\"#/glossary?term=Test+participant\">Test participant</a>'s computer in his/her home. Video recording is accomplished through recording software installed on the computer by a vendor of unattended <a href=\"#/glossary?term=Usability\">Usability</a> testing services.<br />3.\tCompare to <a href=\"#/glossary?term=Usability+test\">Usability test</a> and Remote usability\u00a0test.</p>",
          "description-german": "<p>Ein <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> bei dem <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> <a href=\"#/glossary?term=Usability\">Usability</a>-Testaufgaben l\u00f6sen ohne dabei beobachtet zu werden. <br />Anmerkung: <br />1.\tHandlungen werden auf Video zur sp\u00e4teren Analyse aufgezeichnet.<br />2.\tUnbeaufsichtigte Usability-Tests werden oft beim <a href=\"#/glossary?term=Testteilnehmer\">Testteilnehmer</a> zuhause, auf dessen Computer durchgef\u00fchrt. Videoaufnahmen werden mithilfe einer Aufzeichnungssoftware gespeichert die von einem Anbieter f\u00fcr unbeaufsichtigte <a href=\"#/glossary?term=Usability\">Usability</a>-Tests auf dem Computer installiert wird.<br />3.\tVergleiche mit <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> und <a href=\"#/glossary?term=Remote+Usability-Test\">Remote Usability-Test</a></p>",
          "term-english": "Unattended usability test",
          "term-german": "Unbeaufsichtigter Usability-Test"
        },
        {
          "categories": [
            "Test",
            "Anforderungen",
            "Prinzipien"
          ],
          "description-english": "<p>Extent to which an <a href=\"#/Interactive system\">Interactive system</a> can be used by specified users to achieve specified goals with <a href=\"#/Effectiveness\">Effectiveness</a>, <a href=\"#/Efficiency\">Efficiency</a> and <a href=\"#/Satisfaction\">Satisfaction</a> in a specified <a href=\"#/Context of use\">Context of use</a>.<br />Note:<br />1.\tUsability depends on users, goals and tasks, and other aspects of the <a href=\"#/Context of use\">Context of use</a>.<br />2.\t Technical defects may lead to <a href=\"#/Usability problem\">usability Problems</a> if they prevent <a href=\"#/User\">users</a> from solving their <a href=\"#/Task\">taks</a> <a href=\"#/Effectiveness\">effectively</a> or <a href=\"#/Efficiency\">efficiently</a>.</p>",
          "description-german": "<p>Das Ausmaß, in dem ein <a href=\"#/interaktives System\">interaktives System</a> von bestimmten <a href=\"#/Benutzer\">Benutzern</a> benutzt werden kann, um in einem bestimmten <a href=\"#/Nutzungskontext\">Nutzungskontext</a> bestimmte <a href=\"#/Ziel\">Ziele</a> <a href=\"#/Effektivität\">effektiv</a>, <a href=\"#/Effizienz\">effizient</a> und <a href=\"#/Zufriedenstellung\">zufriedenstellend</a> zu erreichen.<br />Anmerkung:<br />1.\tUsability hängt von <a href=\"#/Benutzer\">Benutzern</a>, <a href=\"#/Ziel\">Zielen</a> und <a href=\"#/Aufgabe\">Aufgaben</a> sowie anderen Aspekten des <a href=\"#/Nutzungskontext\">Nutzungskontextes</a> ab<br />2.\tTechnische Mängel können zu <a href=\"#/Usability-Problem\">Usability-Problemen</a> führen, wenn sie verhindern, dass <a href=\"#/Benutzer\">Benutzer</a> ihre <a href=\"#/Zufriedenstellung\">Aufgabe</a> <a href=\"#/Effektivität\">effektiv</a> oder <a href=\"#/Effizienz\">effizient</a> lösen können.</p>",
          "term-english": "Usability",
          "term-german": "Usability"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A person who manages a <a href=\"#/glossary?term=Human-centred+design\">Human-centred design</a> process.<br />Notes:<br />1.\tThe <a href=\"#/glossary?term=Usability\">Usability</a> engineer (UE) is well versed in the human-centred design process, available human-centred engineering methods and tools, and guidelines for usable <a href=\"#/glossary?term=User\">User</a> interfaces. This knowledge enables the UE to manage<br />a.\t<a href=\"#/glossary?term=Human-centred+design\">Human-centred design</a> activities;<br />b.\tThe integration of human-centred design into the organization's design process for interactive systems; <br />c.\tThe definition of measurable human-centred goals for a project;<br />d.\tThe training of participating project team members.<br />2.\tThe UE determines suitable approaches, tools and styleguides for the human-centred design in general and for specific projects. The UE assists management in deciding whether work packages should be carried out by qualified employees in the organization or by competent subcontractors.<br />3.\t<a href=\"#/glossary?term=Usability\">Usability</a> engineer is a process <a href=\"#/glossary?term=Role\">Role</a> in human-centred design.</p>",
          "description-german": "<p>Eine Person die in einer Querschnittsfunktion verantwortlich einen menschzentrierten Gestaltungsprozess betreut. <br />Anmerkungen:<br />1.\tDer <a href=\"#/glossary?term=Usability\">Usability</a> Engineer (UE) ist kompetent und erfahren in den Prozessschritten, verf\u00fcgbaren Methoden der menschzentrierten Gestaltung und Gestaltungsregeln f\u00fcr <a href=\"#/glossary?term=Benutzererlebnis\">Benutzererlebnis</a>, sodass er die Entwicklungsprojekte unter dem Aspekt menschzentrierter Gestaltung planen und die <a href=\"#/glossary?term=Qualit%C3%A4t\">Qualit\u00e4t</a> der Ausf\u00fchrung von menschzentrierten Gestaltungsbezogenen Aktivit\u00e4ten sicherstellen kann. Dies beinhaltet <br />a.\tMenschzentrierte Gestaltungsaktivit\u00e4ten,<br />b.\tDie Integration der menschzentrierten Gestaltung in den Produktentwicklungs\u00adprozess des Unternehmens, <br />c.\tDie Definition von Erfolgskriterien f\u00fcr solche Projekte,<br />d.\tDas Training von beteiligten Projektteams. <br />2.\tDer UE legt angemessene Vorgehensweisen, Werkzeuge und Styleguides f\u00fcr das menschzentrierte Design im Allgemeinen als auch f\u00fcr spezifische Projekte fest. Der UE unterst\u00fctzt das Management bei der Entscheidung, welche Arbeitspakete von qualifizierten Mitarbeitern im Unternehmen und welche durch kompetente Subunternehmer ausgef\u00fchrt werden sollten.<br />3.\t<a href=\"#/glossary?term=Usability\">Usability</a> Engineer ist eine <a href=\"#/glossary?term=Rolle\">Rolle</a> im Prozess der menschzentrierten Gestaltung.<br /></p>",
          "term-english": "Usability engineer",
          "term-german": "Usability Engineer"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A professional who has one or more of the following process roles: <br />1.\t<a href=\"#/glossary?term=Usability\">Usability</a> engineer, <br />2.\t<a href=\"#/glossary?term=User\">User</a> requirements engineer, <br />3.\t<a href=\"#/glossary?term=Usability\">Usability</a> tester,<br />4.\t<a href=\"#/glossary?term=Information+architect\">Information architect</a>,<br />5.\t<a href=\"#/glossary?term=Interaction+designer\">Interaction designer</a>,<br />6.\t<a href=\"#/glossary?term=User+interface\">User interface</a> designer.</p>",
          "description-german": "<p>Eine Person die eine oder mehrere der folgenden Rollen hat: <br />1.\t<a href=\"#/glossary?term=Usability+Engineer\">Usability Engineer</a>, <br />2.\t<a href=\"#/glossary?term=User+Requirements+Engineer\">User Requirements Engineer</a>, <br />3.\t<a href=\"#/glossary?term=Usability-Tester\">Usability-Tester</a>,<br />4.\tInformationsarchitect,<br />5.\t<a href=\"#/glossary?term=Interaktionsdesigner\">Interaktionsdesigner</a>,<br />6.\t<a href=\"#/glossary?term=User+Interface+Designer\">User Interface Designer</a>.</p>",
          "term-english": "Usability professional",
          "term-german": "Usability Professional"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Finding\">Finding</a></p>",
          "description-german": "<p>Ergebnis aus einer <a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a>. <br />Anmerkung:<br />1.\tM\u00f6gliche <a href=\"#/glossary?term=Usability\">Usability</a>-Befunde sind<br />a.\tEin <a href=\"#/glossary?term=Usability-Problem\">Usability-Problem</a> <br />b.\tEtwas, das die <a href=\"#/glossary?term=Benutzer\">Benutzer</a> mochten, also ein <a href=\"#/glossary?term=Positiver+Usability-Befund\">Positiver Usability-Befund</a>.</p>",
          "term-english": "Usability test result",
          "term-german": "Usability-Befund"
        },
        {
          "categories": [
            "Test",
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "<p>A process through which information about the <a href=\"#/glossary?term=Usability\">Usability</a> of an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> is gathered in order to improve the interactive system (known as formative <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a>) or to assess the merit or worth of an <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> (known as <a href=\"#/glossary?term=Summative+usability+evaluation\">Summative usability evaluation</a>). <br />Notes:<br />1.\t<a href=\"#/glossary?term=Usability\">Usability</a> evaluation is a common term for<br />a.\tUsability evaluation - <a href=\"#/glossary?term=Inspection\">Inspection</a> based<br />b.\t<a href=\"#/glossary?term=Usability\">Usability</a> evaluation \u2013 <a href=\"#/glossary?term=User\">User</a> based<br />2.\tThe synonym \"<a href=\"#/glossary?term=Evaluation\">Evaluation</a>\" is also often used.</p>",
          "description-german": "<p>Ein Prozess der Informationen \u00fcber die <a href=\"#/glossary?term=Usability\">Usability</a> eines interaktiven Systems sammelt um das interaktive System zu verbessern (<a href=\"#/glossary?term=Formative+Usability-Evaluierung\">Formative Usability-Evaluierung</a>) oder um das interaktive System zu bewerten (<a href=\"#/glossary?term=Summative+Usability-Evaluierung\">Summative Usability-Evaluierung</a>). <br />Anmerkungen:<br />1.\t<a href=\"#/glossary?term=Usability\">Usability</a>-<a href=\"#/glossary?term=Evaluierung\">Evaluierung</a> ist ein gemeinsamer Ausdruck f\u00fcr <br />a.\t<a href=\"#/glossary?term=Inspektionsbasierte+Usability-Evaluierung\">Inspektionsbasierte Usability-Evaluierung</a> <br />b.\t<a href=\"#/glossary?term=Benutzerzentrierte+Usability-Evaluierung\">Benutzerzentrierte Usability-Evaluierung</a>.<br />2.\tDas Synonym \u201eEvaluation\u201c wird auch oft verwendet.</p>",
          "term-english": "Usability evaluation",
          "term-german": "Usability-Evaluierung"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "<p>Two or more rooms that are specially equipped for <a href=\"#/glossary?term=Usability\">Usability</a> testing or focus groups. <br />Note:<br />1.\tA usability lab often consists of <br />a.\ta test room where the usability <a href=\"#/glossary?term=Test+participant\">Test participant</a> sits, <br />b.\tan <a href=\"#/glossary?term=Observation\">Observation</a> room where stakeholders can watch <a href=\"#/glossary?term=Usability\">Usability</a> test participants as they solve <a href=\"#/glossary?term=Usability+test\">Usability test</a> tasks. <br />\tOften, the two rooms are separated by a one way mirror which enables observers to watch the usability <a href=\"#/glossary?term=Test+participant\">Test participant</a> but not vice versa.</p>",
          "description-german": "<p>Zwei oder mehrere R\u00e4ume, die speziell f\u00fcr die Durchf\u00fchrung von Usabiltytests oder Fokusgruppen ausgestattet sind. <br />Anmerkung:<br />1.\tEin <a href=\"#/glossary?term=Usability\">Usability</a>-Labor besteht oft aus <br />a.\teinem Testraum, wo der <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> sitzt,<br />b.\teinem Beobachtungsraum, wo <a href=\"#/glossary?term=Interessenvertreter\">Interessenvertreter</a> die <a href=\"#/glossary?term=Usability\">Usability</a>-<a href=\"#/glossary?term=Testteilnehmer\">Testteilnehmer</a> beobachten k\u00f6nnen, w\u00e4hrend die <a href=\"#/glossary?term=Usability\">Usability</a>-Testteilnehmer Aufgaben l\u00f6sen. <br />\tOft sind diese zwei R\u00e4ume durch eine Spiegelwand getrennt, was den Beobachtern erlaubt, den Usability-Testteilnehmern zuzuschauen, nicht aber umgekehrt.</p>",
          "term-english": "Usability lab",
          "term-german": "Usability-Labor"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "<p>A difficulty in using the <a href=\"#/glossary?term=User\">User</a> interface design that affects the ability of the user to achieve their goals effectively, or efficiently, or with <a href=\"#/glossary?term=Satisfaction\">Satisfaction</a>. <br />Note:<br />1.\t<a href=\"#/glossary?term=Usability\">Usability</a> problems can lead to confusion, error, delay, or outright failure to complete some <a href=\"#/glossary?term=Task\">Task</a> on the part of the <a href=\"#/glossary?term=User\">User</a>.</p>",
          "description-german": "<p>Ein Problem in der Benutzung der <a href=\"#/glossary?term=Benutzungsschnittstelle\">Benutzungsschnittstelle</a>, das sich auf die <a href=\"#/glossary?term=Zufriedenstellung\">Zufriedenstellung</a> des Benutzers sowie die <a href=\"#/glossary?term=Effektivit%C3%A4t\">Effektivit\u00e4t</a> und <a href=\"#/glossary?term=Effizienz\">Effizienz</a> des interaktiven Systems auswirkt. <br />Anmerkung:<br />1.\t<a href=\"#/glossary?term=Usability\">Usability</a>-Probleme k\u00f6nnen zu Irritationen, Fehlern oder Verz\u00f6gerungen f\u00fchren oder sogar die Fertigstellung einer <a href=\"#/glossary?term=Aufgabe\">Aufgabe</a> des Benutzers verhindern.</p>",
          "term-english": "Usability problem",
          "term-german": "Usability-Problem"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p>A <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Evaluation\">Evaluation</a> that involves representative users performing specific tasks with the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> to enable identification of <a href=\"#/glossary?term=Usability\">Usability</a> problems or the measurement of <a href=\"#/glossary?term=Effectiveness\">Effectiveness</a>, <a href=\"#/glossary?term=Efficiency\">Efficiency</a>, and <a href=\"#/glossary?term=User\">User</a> <a href=\"#/glossary?term=Satisfaction\">Satisfaction</a>.<br />Notes:<br />1.\tA <a href=\"#/glossary?term=Usability\">Usability</a> test is managed by a <a href=\"#/glossary?term=Usability+tester\">Usability tester</a>.<br />2.\tA usability test usually has three phases:<br />a.\tPlanning, including writing the <a href=\"#/glossary?term=Usability+test+plan\">Usability test plan</a>, writing the usability <a href=\"#/glossary?term=Test+script\">Test script</a>, and <a href=\"#/glossary?term=Recruiting\">Recruiting</a> suitable <a href=\"#/glossary?term=Usability\">Usability</a> test participants,<br />b.\tConducting usability test sessions as described in note 3,<br />c.\tCommunicating usability findings, including writing the usability <a href=\"#/glossary?term=Test+report\">Test report</a>.<br />3.\tA <a href=\"#/glossary?term=Usability\">Usability</a> test consists of a number of usability test sessions. In each session, a usability <a href=\"#/glossary?term=Test+participant\">Test participant</a> attempts to carry out representative <a href=\"#/glossary?term=Usability\">Usability</a> test tasks using the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> or a <a href=\"#/glossary?term=Prototype\">Prototype</a> of the interactive system. Usually, <a href=\"#/glossary?term=Usability\">Usability</a> test sessions are moderated by a <a href=\"#/glossary?term=Moderator\">Moderator</a> and observed by a number of observers, who are often stakeholders. A <a href=\"#/glossary?term=Note-taker\">Note-taker</a> records important <a href=\"#/glossary?term=Usability\">Usability</a> findings.<br />4.\tThe concept \"usability test\" usually refers to a test where the usability <a href=\"#/glossary?term=Test+participant\">Test participant</a> and the moderator are in the same physical location. Other forms of <a href=\"#/glossary?term=Usability\">Usability</a> tests are <a href=\"#/glossary?term=Remote+usability+test\">Remote usability test</a> and <a href=\"#/glossary?term=Unattended+usability+test\">Unattended usability test</a>.<br />5.\tTesting may result in qualitative or quantitative data. <br />6.\tTesting may occur at any time during <a href=\"#/glossary?term=Human-centred+design\">Human-centred design</a>, from early analysis through interactive system delivery and beyond. Testing may be based on paper sketches or display mock-ups, as well as on interactive systems under design and completed interactive systems.<br />7.\tRoles in a <a href=\"#/glossary?term=Usability\">Usability</a> test are:<br />a.\t<a href=\"#/glossary?term=Moderator\">Moderator</a>;<br />b.\t<a href=\"#/glossary?term=Note-taker\">Note-taker</a>;<br />c.\t<a href=\"#/glossary?term=Observer\">Observer</a>;<br />d.\t<a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Test+participant\">Test participant</a>.</p>",
          "description-german": "<p>Eine <a href=\"#/glossary?term=Usability-Evaluierung\">Usability-Evaluierung</a> bei der repr\u00e4sentative <a href=\"#/glossary?term=Benutzer\">Benutzer</a> bestimmte Aufgaben mit dem interaktiven System ausf\u00fchren, um <a href=\"#/glossary?term=Usability\">Usability</a>-Probleme oder die Messwerte f\u00fcr <a href=\"#/glossary?term=Effektivit%C3%A4t\">Effektivit\u00e4t</a>, <a href=\"#/glossary?term=Effizienz\">Effizienz</a> und <a href=\"#/glossary?term=Zufriedenstellung\">Zufriedenstellung</a> zu erfassen. <br />Anmerkungen:<br />1.\tEin <a href=\"#/glossary?term=Usability\">Usability</a>-Test wird von einem <a href=\"#/glossary?term=Usability-Tester\">Usability-Tester</a> geleitet.<br />2.\tEin <a href=\"#/glossary?term=Usability\">Usability</a>-Test besteht \u00fcblicherweise aus 3 Phasen:<br />a.\tPlanung, dazu geh\u00f6ren: Schreiben des Usabiliy-Testplans, schreiben des Usability-Testskripts, und <a href=\"#/glossary?term=Rekrutierung\">Rekrutierung</a> von passenden <a href=\"#/glossary?term=Usability\">Usability</a>-Testteilnehmern.<br />b.\tDurchf\u00fchrung der Usability-Testsitzungen wie in Anmerkung 3 beschrieben.<br />c.\tUsability-Testergebnisse kommunizieren, einschlie\u00dflich Schreiben eines Usability-Testberichts <br />3.\tEin Usability-Test umfasst eine Reihe von Usability-Testsitzungen. In jeder Sitzung versucht ein <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> unter Benutzung des interaktiven Systems oder eines Prototypen eines interaktiven Systems repr\u00e4sentative <a href=\"#/glossary?term=Usability\">Usability</a>-Testaufgaben zu l\u00f6sen. \u00dcblicherweise werden Usability-Testsitzungen von einem <a href=\"#/glossary?term=Moderator\">Moderator</a> moderiert und von einer Anzahl von Beobachtern, die oft <a href=\"#/glossary?term=Interessenvertreter\">Interessenvertreter</a> sind, beobachtet. Ein <a href=\"#/glossary?term=Protokollant\">Protokollant</a> zeichnet wichtige <a href=\"#/glossary?term=Usability\">Usability</a>-Befunde auf.<br />4.\tDer Begriff \u201dUsability-Test\u201d bezieht sich \u00fcblicherweise auf einen Test, bei dem sich der Usability-<a href=\"#/glossary?term=Testteilnehmer\">Testteilnehmer</a> und der <a href=\"#/glossary?term=Moderator\">Moderator</a> am gleichen physischen Ort befinden. Andere Arten von <a href=\"#/glossary?term=Usability\">Usability</a>-Tests sind: <a href=\"#/glossary?term=Remote+Usability-Test\">Remote Usability-Test</a> und <a href=\"#/glossary?term=Unbeaufsichtigter+Usability-Test\">Unbeaufsichtigter Usability-Test</a>.<br />5.\tDas Testen kann qualitative oder quantitative Daten ergeben. <br />6.\tDas Testen kann zu jedem Zeitpunkt w\u00e4hrend der menschzentrierten Gestaltung geschehen \u2013 von der fr\u00fchen Analysephase bis hin zur Lieferung des interaktiven Systems und dar\u00fcberhinaus. Die Tests k\u00f6nnen sowohl an Papierentw\u00fcrfen oder anderen low-fidelity-Prototypen als auch an in Entwicklung befindlichen oder bereits fertiggestellten interaktiven Systemen durchgef\u00fchrt werden.<br />7.\tRollen bei einem <a href=\"#/glossary?term=Usability\">Usability</a>-Test sind:<br />a.\t<a href=\"#/glossary?term=Moderator\">Moderator</a><br />b.\t<a href=\"#/glossary?term=Protokollant\">Protokollant</a><br />c.\t<a href=\"#/glossary?term=Beobachter\">Beobachter</a><br />d.\t<a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> </p>",
          "term-english": "Usability test",
          "term-german": "Usability-Test"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "<p>A description of a <a href=\"#/glossary?term=Task\">Task</a> that a <a href=\"#/glossary?term=Moderator\">Moderator</a> asks a <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Test+participant\">Test participant</a> to carry out during a <a href=\"#/glossary?term=Usability\">Usability</a> test. </p>",
          "description-german": "<p>Eine Beschreibung einer typischen <a href=\"#/glossary?term=Aufgabe\">Aufgabe</a>, die ein <a href=\"#/glossary?term=Moderator\">Moderator</a> einem <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> w\u00e4hrend eines <a href=\"#/glossary?term=Usability\">Usability</a>-Tests stellt. </p>",
          "term-english": "Usability test task",
          "term-german": "Usability-Testaufgabe"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "<p>A document that describes the results of a <a href=\"#/glossary?term=Usability\">Usability</a> test. <br />Notes:<br />1.\tA usability <a href=\"#/glossary?term=Test+report\">Test report</a> typically contains <br />a.\tAn executive summary;<br />b.\t5-50 <a href=\"#/glossary?term=Usability\">Usability</a> findings (including positive usability findings); <br />c.\tThe usability <a href=\"#/glossary?term=Test+script\">Test script</a> used for the <a href=\"#/glossary?term=Usability\">Usability</a> test;<br />d.\tOften, the <a href=\"#/glossary?term=Usability+test\">Usability test</a> report also contains screenshots or pictures that supplement the description of important usability findings.<br />2.\tAlso referred to as test report.</p>",
          "description-german": "<p>Ein Dokument, das die Ergebnisse eines <a href=\"#/glossary?term=Usability\">Usability</a>-Tests beschreibt. <br />Anmerkungen:<br />1.\tEin Usability-<a href=\"#/glossary?term=Testbericht\">Testbericht</a> beinhaltet \u00fcblicherweise <br />a.\tEine Kurzdarstellung, <br />b.\t5-50 <a href=\"#/glossary?term=Usability\">Usability</a>-Befunde (auch positive),<br />c.\tDas <a href=\"#/glossary?term=Usability-Testskript\">Usability-Testskript</a> f\u00fcr den <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a>. <br />d.\tOft umfasst der <a href=\"#/glossary?term=Usability\">Usability</a>-<a href=\"#/glossary?term=Testbericht\">Testbericht</a> auch Screenshots oder Bilder die die Beschreibungen von wichtigen <a href=\"#/glossary?term=Usability\">Usability</a>-Befunden erg\u00e4nzen.<br />2.\tWird auch nur als Testbericht bezeichnet.</p>",
          "term-english": "Usability test report",
          "term-german": "Usability-Testbericht"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A person who evaluates <a href=\"#/glossary?term=User\">User</a> interfaces in various stages of realization. <br />Notes:<br />1.\tIn cooperation with other stakeholders, the <a href=\"#/glossary?term=Usability\">Usability</a> tester <br />a.\tPlans usability evaluations, <br />b.\tConducts usability evaluations, <br />c.\tCommunicates usability findings to stakeholders.<br />2.\tDuring <a href=\"#/glossary?term=Usability+test\">Usability test</a> sessions the usability tester has the <a href=\"#/glossary?term=Role\">Role</a> of <a href=\"#/glossary?term=Moderator\">Moderator</a> or <a href=\"#/glossary?term=Note-taker\">Note-taker</a>.<br />3.\t<a href=\"#/glossary?term=Usability\">Usability</a> tester is a process <a href=\"#/glossary?term=Role\">Role</a> in <a href=\"#/glossary?term=Human-centred+design\">Human-centred design</a>.</p>",
          "description-german": "<p>Eine Person die Benutzungsschnittstellen in verschiedenen Stadien der Realisierung evaluiert. <br />Anmerkungen:<br />1.\tIn Kooperation mit anderen Interessensvertretern, muss der <a href=\"#/glossary?term=Usability\">Usability</a>-Tester<br />a.\tdie Usability-Evaluierungen planen<br />b.\tdie Usability-Evaluierungen leiten<br />c.\tdie Usability-Testergebnisse an die <a href=\"#/glossary?term=Interessenvertreter\">Interessenvertreter</a> kommunizieren.<br />2.\tW\u00e4hrend einer <a href=\"#/glossary?term=Usability-Testsitzung\">Usability-Testsitzung</a> \u00fcbernimmt der <a href=\"#/glossary?term=Usability\">Usability</a>-Tester die <a href=\"#/glossary?term=Rolle\">Rolle</a> des Moderators oder des Protokollanten.<br />3.\tUsability-Tester ist eine Rolle im Prozess der menschzentrierten Gestaltung.</p>",
          "term-english": "Usability tester",
          "term-german": "Usability-Tester"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p>See <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Finding\">Finding</a></p>",
          "description-german": "<p>Siehe <a href=\"#/glossary?term=Usability-Befund\">Usability-Befund</a>.</p>",
          "term-english": "Usability test result",
          "term-german": "Usability-Testergebnis"
        },
        {
          "categories": [
            "Planung",
            "Evaluierung"
          ],
          "description-english": "<p>A brief description of the purpose and extent of a <a href=\"#/glossary?term=Usability\">Usability</a> test. <br />Notes:<br />1.\tThe <a href=\"#/glossary?term=Usability+test\">Usability test</a> plan is intended for management to decide whether the usability test should be run or not. It is deliberately brief and focuses on the <a href=\"#/glossary?term=Resources\">Resources</a> required for the <a href=\"#/glossary?term=Usability\">Usability</a> test.<br />2.\tThe <a href=\"#/glossary?term=Usability+test\">Usability test</a> plan includes <br />a.\tNumber of planned usability test participants;<br />b.\tApproximate length of each <a href=\"#/glossary?term=Usability+test+session\">Usability test session</a>;<br />c.\tName of <a href=\"#/glossary?term=Moderator\">Moderator</a>;<br />d.\tTime plan;<br />e.\tA cost estimate for the <a href=\"#/glossary?term=Usability\">Usability</a> test including person hours.<br />3.\tFurther details about the <a href=\"#/glossary?term=Usability+test\">Usability test</a> such as usability test tasks, test method and required software and hardware are provided in the usability <a href=\"#/glossary?term=Test+script\">Test script</a>.</p>",
          "description-german": "<p>Eine kurze Beschreibung des Zwecks und Umfangs eines <a href=\"#/glossary?term=Usability\">Usability</a>-Tests. <br />Anmerkungen:<br />1.\tDer Usability-Testplan ist f\u00fcr das Management vorgesehen, um entscheiden zu k\u00f6nnen, ob der <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> durchgef\u00fchrt werden sollte oder nicht. Der Plan ist absichtlich kurz gehalten und fokussiert auf die f\u00fcr den <a href=\"#/glossary?term=Usability\">Usability</a>-Test ben\u00f6tigten <a href=\"#/glossary?term=Ressourcen\">Ressourcen</a>.<br />2.\tDer <a href=\"#/glossary?term=Usability\">Usability</a>-Testplan beinhaltet <br />a.\tDie Anzahl geplanter <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a>, <br />b.\tDie ungef\u00e4hre L\u00e4nge jeder <a href=\"#/glossary?term=Usability-Testsitzung\">Usability-Testsitzung</a>, <br />c.\tDen Namen des Moderators, <br />d.\tEinen Zeitplan, <br />e.\tEine Kostensch\u00e4tzung f\u00fcr den <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> einschlie\u00dflich Personenstunden.<br />3.\tWeitere Details \u00fcber den <a href=\"#/glossary?term=Usability\">Usability</a>-Test wie z.B. Usability-Testaufgaben, Testmethode und erforderliche Soft- und Hardware werden im <a href=\"#/glossary?term=Usability-Testskript\">Usability-Testskript</a> bereitgestellt.</p>",
          "term-english": "Usability test plan",
          "term-german": "Usability-Testplan"
        },
        {
          "categories": [
            "Gestaltung",
            "Test"
          ],
          "description-english": "<p>A part of a <a href=\"#/glossary?term=Usability\">Usability</a> test where one usability <a href=\"#/glossary?term=Test+participant\">Test participant</a> carries out representative <a href=\"#/glossary?term=Usability\">Usability</a> test tasks using the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a> or a <a href=\"#/glossary?term=Prototype\">Prototype</a> of the interactive system.<br />Notes:<br />1.\tIn a <a href=\"#/glossary?term=Usability\">Usability</a> test session, the <a href=\"#/glossary?term=Moderator\">Moderator</a> typically <br />a.\tGreets the <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Test+participant\">Test participant</a>; <br />b.\tConducts the <a href=\"#/glossary?term=Usability\">Usability</a> <a href=\"#/glossary?term=Briefing\">Briefing</a> and pre-session <a href=\"#/glossary?term=Interview\">Interview</a>, <br />c.\tHands out <a href=\"#/glossary?term=Usability\">Usability</a> test tasks to the usability <a href=\"#/glossary?term=Test+participant\">Test participant</a><br />d.\tObserves the <a href=\"#/glossary?term=Usability\">Usability</a> test participant during <a href=\"#/glossary?term=Usability+test\">Usability test</a> <a href=\"#/glossary?term=Task\">Task</a> solution, <br />e.\tConducts the post-session <a href=\"#/glossary?term=Interview\">Interview</a>.<br />2.\tCompare to <a href=\"#/glossary?term=Usability\">Usability</a> test.</p>",
          "description-german": "<p>Der Teil eines <a href=\"#/glossary?term=Usability\">Usability</a>-Tests, bei dem ein bestimmter <a href=\"#/glossary?term=Usability-Testteilnehmer\">Usability-Testteilnehmer</a> repr\u00e4sentative <a href=\"#/glossary?term=Usability\">Usability</a>-Testaufgaben unter Benutzung des interaktiven Systems oder des Prototypen eines interaktiven Systems l\u00f6st.<br />Anmerkungen:<br />1.\tTypische Aufgaben des Moderators w\u00e4hrend einer Usability-Testsitzung sind:<br />a.\tBegr\u00fc\u00dfung des Usability-Testteilnehmers;<br />b.\tDurchf\u00fchrung des Briefings und des Pre-Session Interviews;<br />c.\t\u00dcbergabe von Usability-Testaufgaben an den Usability-<a href=\"#/glossary?term=Testteilnehmer\">Testteilnehmer</a>.<br />d.\t<a href=\"#/glossary?term=Beobachtung\">Beobachtung</a> des jeweiligen <a href=\"#/glossary?term=Usability\">Usability</a>-Testteilnehmers w\u00e4hrend der Erledigung der Aufgaben;<br />e.\tDurchf\u00fchrung des Post-Session Interviews.<br />2.\tVergleiche mit <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a>.</p>",
          "term-english": "Usability test session",
          "term-german": "Usability-Testsitzung"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "<p>A checklist used by a <a href=\"#/glossary?term=Moderator\">Moderator</a> in a <a href=\"#/glossary?term=Usability\">Usability</a> test to keep track of <a href=\"#/glossary?term=Briefing\">Briefing</a> and pre-session <a href=\"#/glossary?term=Interview\">Interview</a> questions, <a href=\"#/glossary?term=Usability\">Usability</a> test tasks, and <a href=\"#/glossary?term=Post-session+interview\">Post-session interview</a> questions.</p>",
          "description-german": "<p>Eine von einem <a href=\"#/glossary?term=Moderator\">Moderator</a> in einem <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> verwendete Checkliste, um den \u00dcberblick \u00fcber die Fragen des Briefings und des Pre-Session Interviews, die <a href=\"#/glossary?term=Usability\">Usability</a>-Testaufgaben und die Fragen des Post-Session Interviews zu behalten.</p>",
          "term-english": "Usability test script",
          "term-german": "Usability-Testskript"
        },
        {
          "categories": [
            "Rollen",
            "Test"
          ],
          "description-english": "<p>A representative <a href=\"#/glossary?term=User\">User</a> who solves typical tasks in a <a href=\"#/glossary?term=Usability\">Usability</a> test.</p>",
          "description-german": "<p>Repr\u00e4sentativer <a href=\"#/glossary?term=Benutzer\">Benutzer</a>, der typische Aufgaben in einem <a href=\"#/glossary?term=Usability-Test\">Usability-Test</a> l\u00f6st.</p>",
          "term-english": "Usability test participant",
          "term-german": "Usability-Testteilnehmer"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A person who creates interactive prototypes and implements the <a href=\"#/glossary?term=Dialogue\">Dialogue</a> and <a href=\"#/glossary?term=User\">User</a> experience based on the design created by the <a href=\"#/glossary?term=Interaction+designer\">Interaction designer</a> and the scenarios created by the <a href=\"#/glossary?term=User+requirements+engineer\">User requirements engineer</a>. The <a href=\"#/glossary?term=User+interface\">User interface</a> designer also creates interactive prototypes.<br />Note: <br />1.\tUser interface designer is a process <a href=\"#/glossary?term=Role\">Role</a> in <a href=\"#/glossary?term=Human-centred+design\">Human-centred design</a>.</p>",
          "description-german": "<p>Eine Person die den <a href=\"#/glossary?term=Dialog\">Dialog</a> und das <a href=\"#/glossary?term=Benutzererlebnis\">Benutzererlebnis</a> basierend auf dem Design des  Interaktions\u00addesigners und den Nutzungsszenarios des User Requirements Engineers implementiert. Der User Interface Designer erzeugt ausserdem interaktive Prototypen.<br />Anmerkung:<br />1.\tUser Interface Designer ist eine <a href=\"#/glossary?term=Rolle\">Rolle</a> im Prozess der menschzentrierten Gestaltung.</p>",
          "term-english": "User interface designer",
          "term-german": "User Interface Designer"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "<p>A person who identifies and describes the actual or intended <a href=\"#/glossary?term=Context+of+use\">Context of use</a> of users, and derives the <a href=\"#/glossary?term=User\">User</a> requirements and related organizational requirements, which need to be realized for a specific project. <br />Notes:<br />1.\tThe user requirements engineer identifies the <a href=\"#/glossary?term=Context+of+use\">Context of use</a> based on methods such as interviews with users, observations, user surveys, <a href=\"#/glossary?term=Usability\">Usability</a> evaluations, expert analysis, etc.<br />2.\tThe user requirements engineer generates personas and scenarios that ensure the <a href=\"#/glossary?term=Effectiveness\">Effectiveness</a>, <a href=\"#/glossary?term=Efficiency\">Efficiency</a> and <a href=\"#/glossary?term=Satisfaction\">Satisfaction</a> when performing tasks with the <a href=\"#/glossary?term=Interactive+system\">Interactive system</a>.<br />3.\t User requirements engineer is a process <a href=\"#/glossary?term=Role\">Role</a> in <a href=\"#/glossary?term=Human-centred+design\">Human-centred design</a>.</p>",
          "description-german": "<p>Eine Person die den tats\u00e4chlichen oder geplanten <a href=\"#/glossary?term=Nutzungskontext\">Nutzungskontext</a> von Benutzern identifiziert und beschreibt. Daraus leitet der User Requirements Engineer die Nutzungsanforderungen und damit verbundene organisatorische Anforderungen ab, die f\u00fcr ein bestimmtes Projekt umgesetzt werden m\u00fcssen. <br />Anmerkungen:<br />1.\tDer User Requirements Engineer identifiziert den Nutzungskontext durch Methoden wie Benutzerinterviews, Beobachtungen, Benutzerbefragungen, <a href=\"#/glossary?term=Usability\">Usability</a>-Evaluierungen, Expertenanalysen usw.<br />2.\tDer User Requirements Engineer erzeugt Nutzungs\u00adszenarien, die die <a href=\"#/glossary?term=Effektivit%C3%A4t\">Effektivit\u00e4t</a>, <a href=\"#/glossary?term=Effizienz\">Effizienz</a> und <a href=\"#/glossary?term=Zufriedenstellung\">Zufriedenstellung</a> bei der Aufgabenerledigung mit dem interaktiven System sicherstellen sollen.<br />3.\tUser Requirements Engineer ist eine <a href=\"#/glossary?term=Rolle\">Rolle</a> im Prozess der menschzentrierten Gestaltung.</p>",
          "term-english": "User requirements engineer",
          "term-german": "User Requirements Engineer"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "<p>A screen or page in a <a href=\"#/Low-fidelity prototype\">low-fidelity prototype</a> for a graphical <a href=\"#/User interface\">user interface</a> comprised of lines, rectangular boxes and text that represent the intended interaction design.<br/>Notes:<br/>1.\tWireframes typically do not address visual design and precise layout.</p>",
          "description-german": "<p>Ein Screen oder eine Seite in einem <a href=\"#/Low-fidelity-Prototyp\">Low-Fidelity-Prototyp</a> für eine grafische <a href=\"#/Benutzungsschnittstelle\">Benutzungsschnittstelle</a>, bestehend aus Linien, rechteckigen Kästen und Text, der das zukünftige Interaktionsdesign repräsentiert.<br />Anmerkungen:<br />1.\tWireframes adressieren üblicherweise nicht das visuelle Design und das genaue Layout.</p>",
          "term-english": "Wireframe",
          "term-german": "Wireframe"
        },
        {
          "categories": [
            "Anforderungen",
            "Prinzipien"
          ],
          "description-english": "<p>The intended outcome.<br/>Notes:<br/>1.\tGoals are used in <a href=\"#/Human-centred design\">human-centred design</a> to express the intention of <a href=\"#/User\">users</a> on a high level without foreclosing technical solutions. The concepts “goal” and <a href=\"#/User need\">“user need”</a> are related.<br/>2.\tA goal is typically expressed in the form of a condition or state. In contrast, a <a href=\"#/Task\">task</a> is typically expressed in the form of an activity.<br/><br/>Examples:<br/>1.\tGoal: Change the colour of my hair from brown to red.<br/><a href=\"#/Task\">Task</a>: Book an appointment with my hairdresser using their website.<br/>2.\tGoal: Visit a friend in a small city, 100 km away.<br/><a href=\"#/Task\">Task</a>: Rent a car using the car rental website.<br/>Renting a car is not a user goal.</p>",
          "description-german": "<p>Das angestrebte Arbeitsergebnis.<br/>Anmerkungen:<br/>1.\tZiele werden bei der <a href=\"#/Menschzentrierte Gestaltung\">menschzentrierten Gestaltung</a> verwendet, um die grundsätzlichen Bedürfnisse der <a href=\"#/Benutzer\">Benutzer</a> auszudrücken und keine technischen Lösungen auszuschließen. Die Begriffe „Ziel“ und <a href=\"#/Erfordernis\">„Erfordernis“</a> stehen in Zusammenhang.<br/>2.\tEin Ziel wird typischerweise in Form einer Bedingung oder eines Zustands ausgedrückt. Im Gegensatz dazu wird eine <a href=\"#/Aufgabe\">Aufgabe</a> typischerweise in Form einer Aktivität ausgedrückt.<br/><br/>Beispiele:<br/>1.\tZiel: Änderung der Farbe meiner Haare von braun zu rot.<br/><a href=\"#/Aufgabe\">Aufgabe</a>: Buchen eines Termins mit meinem Friseur über dessen Website.<br/>2.\tZiel: Besuchen eines Freundes in einer kleinen Stadt, 100 km entfernt.<br/><a href=\"#/Aufgabe\">Aufgabe</a>: Mieten eines Autos über die Autovermietungswebsite.<br/>Ein Auto zu mieten ist kein Ziel des <a href=\"#/Benutzer\">Benutzers</a>.</p>",
          "term-english": "Goal",
          "term-german": "Ziel"
        },
        {
          "categories": [
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "<p>The extent to which the <a href=\"#/User\">user’s</a> physical, cognitive and emotional responses that result from the use of an <a href=\"#/Interactive system\">interactive system</a> meet the user’s needs and expectations.<br />Notes: <br />1.\t<a href=\"#/Effectiveness\">Effectiveness</a> and <a href=\"#/Efficiency\">efficiency</a> may influence satisfaction. For example, low <a href=\"#/Effectiveness\">effectiveness</a> or low <a href=\"#/Efficiency\">efficiency</a> may lead to low satisfaction. Satisfaction may influence effectiveness and efficiency. For example, frustration may cause <a href=\"#/User\">users</a> to quit a <a href=\"#/Task\">task</a>, which influences <a href=\"#/Effectiveness\">effectiveness</a>.<br />2.\tSatisfaction is often measured using a <a href=\"#/Questionnaire\">questionnaire</a>. See the examples in the definition of <a href=\"#/Questionnaire\">questionnaire</a>.<br/>3.\tThe difference between satisfaction and <a href=\"#/User experience\">user experience</a> is that satisfaction results from use, while <a href=\"#/User experience\">user experience</a> results from discovering, adopting and using the <a href=\"#/Interactive system\">interactive system</a>, through to final use and recollections of use. In addition, <a href=\"#/User experience\">user experience</a> can be influenced by more than just use, for example brand image, price and opinion of others, but it is still related to actual or imagined use.<br/><br/>Examples of dissatisfaction and satisfaction:<br/>1.\tProlonged periods of use of a notebook without an external mouse causes muscular discomfort.<br/>2.\tUsers say that it “takes forever” to reserve a car on a car rental website.<br/>3.\tUsers spontaneously say that they like the appearance of the home page of a car rental website.<br/>4.\tHigh prices or unacceptable terms of service in a web shop are not part of satisfaction because satisfaction is about the usage of an <a href=\"#/Interactive system\">interactive system</a>. They may influence the <a href=\"#/User experience\">user experience</a>.</p>",
          "description-german": "<p>Das Ausmaß, in dem die physischen, kognitiven und emotionalen Reaktionen des <a href=\"#/Benutzer\">Benutzers</a>, die sich aus der Benutzung eines <a href=\"#/Interaktives System\">interaktiven Systems</a> ergeben, die Bedürfnisse und Erwartungen des <a href=\"#/Benutzer\">Benutzers</a> erfüllen.<br />Anmerkungen:<br />1.\t<a href=\"#/Effektivität\">Effektivität</a> und <a href=\"#/Effizienz\">Effizienz</a> können die Zufriedenstellung beeinflussen. Zum Beispiel kann eine geringe <a href=\"#/Effektivität\">Effektivität</a> oder eine niedrige <a href=\"#/Effizienz\">Effizienz</a> zu einer geringen Zufriedenstellung führen. Zufriedenstellung kann die <a href=\"#/Effektivität\">Effektivität</a> und <a href=\"#/Effizienz\">Effizienz</a> beeinflussen. Zum Beispiel kann Frustration dazu führen, dass <a href=\"#/Benutzer\">Benutzer</a> eine <a href=\"#/Aufgabe\">Aufgabe</a> vor Zielerreichung beenden, was die <a href=\"#/Effektivität\">Effektivität</a> beeinflusst.<br />2.\tDie Zufriedenstellung wird oft anhand eines <a href=\"#/Fragebogen\">Fragebogens</a> gemessen. Siehe die Beispiele in der Definition von <a href=\"#/Fragebogen\">Fragebogen</a>.<br />3.\tDer Unterschied zwischen Zufriedenstellung und <a href=\"#/Benutzererlebnis\">User Experience</a> besteht darin, dass die Zufriedenstellung aus der Benutzung resultiert, während die <a href=\"#/Benutzererlebnis\">User Experience</a> aus dem Entdecken, der Aneignung und der Verwendung des <a href=\"#/Interaktives System\">interaktiven Systems</a> bis zur letzten Benutzung und den Erinnerungen an die Benutzung resultiert. Darüber hinaus kann <a href=\"#/Benutzererlebnis\">User Experience</a> durch mehr als nur die Benutzung beeinflusst werden, beispielsweise durch das Markenimage, den Preis und die Meinung anderer; sie bezieht sich aber immer auf die tatsächliche oder vorgestellte Benutzung.<br/><br/>Beispiele für Unzufriedenheit und Zufriedenstellung:<br/>1.\tLängerer Gebrauch eines Notebooks ohne externe Maus führt zu Muskelbeschwerden.<br/>2.\t<a href=\"#/Benutzer\">Benutzer</a> sagen, dass es „ewig dauert“, ein Auto auf einer Autovermietungswebsite zu reservieren.<br/>3.\t<a href=\"#/Benutzer\">Benutzer</a> sagen spontan, dass sie das Aussehen der Homepage einer Autovermietung mögen.<br/>4.\tHohe Preise oder inakzeptable Servicebedingungen in einem Webshop sind nicht Teil der Zufriedenstellung, da es sich bei der Zufriedenstellung um die Benutzung eines <a href=\"#/Interaktives System\">interaktiven Systems</a> geht. Sie können allerdings die <a href=\"#/Benutzererlebnis\">User Experience</a> beeinflussen.</p>",
          "term-english": "Satisfaction",
          "term-german": "Zufriedenstellung"
        }
      ],
      chosen:0,
      content:[],
      English:true
    }

    
    
  }
  componentWillMount(){
    this.setState({content: this.state.initialContent})
  }
  componentDidMount(){
    this.unlisten = this.props.history.listen((location) => {
      //var item= location.hash.substring(2).replace(/%20/g, " ");
      var item= decodeURI(location.hash.substring(2));
      this.state.initialContent.map((data,index)=>{
        if(this.state.English){
          if(data["term-english"]===item){
            this.setState({
              chosen:index
            })
          } 
         }
         else{
          if(data["term-german"]===item){
            this.setState({
              chosen:index
            })
          } 

         }

      });
     // console.log(this.state.chosen);
      //console.log(this.state.initialContent.indexOf(location.hash.subString(2)));
    });
  }

  handleChange = ({target}) => {
    var updatedList = this.state.initialContent;
    if(this.state.English){
    updatedList = updatedList.filter(function(item){
      return item["term-english"].toLowerCase().search(
      target.value.toLowerCase()) !== -1;
    });
  }
  else{
    updatedList = updatedList.filter(function(item){
      return item["term-german"].toLowerCase().search(
      target.value.toLowerCase()) !== -1;
    });

  }
    this.setState({content: updatedList});
  };
  next = ()=>{
    if(this.state.chosen<this.state.initialContent.length-1){
      this.setState({
        chosen:this.state.chosen+1
      })
    }

  }
  previous(){
    if(this.state.chosen>0){
      this.setState({
        chosen:this.state.chosen-1
      })
    }
  }
  glossary(){
    this.props.history.push('/');
  }
  game(){
      this.props.history.push('/game');
  }
  hallOfFame(){
      this.props.history.push('/hallOfFame');
  }
  changeToEnglish(){
    this.setState({
      English:true
    })
  }
  changeToGerman(){
    this.setState({
      English:false
    })
  }

  render(){
    return (
      <div>
         <ButtonAppBar
          glossary={()=>this.glossary()}
          game={()=>this.game()}
          hallOfFame={()=>this.hallOfFame()}
          English={this.state.English}
          changeToEnglish={()=>this.changeToEnglish()}
          changeToGerman={()=>this.changeToGerman()}
        />
        <div id="app" className="container">
      
  
          <div className="row">
            <div className={classNames("col-sm-4","col-xs-4","col-md-4","col-lg-4")} >
            
              <h1>Content</h1>
              <input onChange={ this.handleChange } ></input>
              <nav >
                <ul>
                  { this.state.content.map((item)=> (
                            
                  <li style={{paddingBottom:" 7px"}} className="nav-item">{this.state.English?<a href={"#/"+item["term-english"]}>{item["term-english"]}</a>:<a href={"#/"+item["term-german"]}>{item["term-german"]}</a>}</li>
                            
                    ))
                  }
                </ul>
              </nav>
            </div>
            <div className={classNames("col-sm-8","col-xs-8","col-md-8","col-lg-8")} >
              {this.state.English?<h1>{this.state.initialContent[this.state.chosen]["term-english"]}</h1>:<h1>{this.state.initialContent[this.state.chosen]["term-german"]}</h1>}
              {this.state.English?<div className="content"  dangerouslySetInnerHTML={{ __html: this.state.initialContent[this.state.chosen]["description-english"]}} />:<div className="content"  dangerouslySetInnerHTML={{ __html: this.state.initialContent[this.state.chosen]["description-german"]}} />}
                <button onClick={() => this.previous()} type="button" class="btn btn-outline-secondary">{this.state.English?"Previous":"Zurück"}</button>
                <button onClick={() => this.next()} id="next"  type="button" class="btn btn-outline-secondary">{this.state.English?"Next":"Weiter"}</button>
              </div>  
          </div>
        </div>
      </div>
    );
  }
}


 export default Glossary;