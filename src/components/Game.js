import React, { Component } from 'react';
import '../App.css';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';
import ButtonAppBar from './ButtonAppBar';
import axios from 'axios'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class Game extends Component {
  constructor(props){
     
    super(props);
    /*
      There is questionsItems and choicesItems in the state with the same initial conent, but after that
      I will take one question from questionsItems and remove it from the list, so at the end the list will
      be empty which indicates the end of the quiz. But the choicesItems should stay with the smame size because
      I will get the cohoices from it for every quesion
    */
    this.state = {
      questionsItems:[
        {
          "categories": [
            "Test",
            "Planung"
          ],
          "description-english": "A narrative text description of the procedure a specific user currently follows to complete one or more tasks.",
          "description-german": "Eine erzählende, textuelle Beschreibung des Vorgehens, das ein bestimmter Benutzer anwendet, um eine oder mehrere Aufgaben zu erledigen.",
          "term-english": "As-is scenario",
          "term-german": "Ist-Szenario"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "A professional who has one or more of the following responsibilities in a project: Planning and managing the human-centred design process, Identifying and describing the context of use, Deriving the user requirements, creating the information architecture and the navigation structure, defining and conceiving the interaction between humans and the interactive system based on the context of use and the user requirements, designing the graphic part of the user interface and carrying out usability evaluations of user interfaces in various stages of realisation.",
          "description-german": "Ein Fachmann, der einen oder mehrere der folgenden Verantwortungsbereiche in einem Projekt hat, Planung und Management des Prozesses menschzentrierter Gestaltung, Identifizieren und Beschreiben des Nutzungskontextes, Ableiten der Nutzungsanforderungen, Erstellen der Informationsarchitektur und der Navigationsstruktur, Definition und Konzeption der Interaktion zwischen Menschen und dem interaktiven System basierend auf dem Nutzungskontext und den Nutzungsanforderungen, Entwerfen des grafischen Teils der Benutzungsschnittstelle und Durchführung von Usability-Evaluierungen von Benutzungsschnittstellen in verschiedenen Umsetzungsphasen.",
          "term-english": "User experience professional",
          "term-german": "User Experience Professional"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A usability evaluation based on the judgment of one or more evaluators who examine or use an interactive system to identify potential usability problems and deviations from established dialogue principles, heuristics, user interface guidelines and user requirements.\n",
          "description-german": "Eine Usability-Evaluierung, die auf der Begutachtung durch einen oder mehrere Evaluatoren basiert, die ein interaktives System prüfen oder benutzen, um potenzielle Usability-Probleme und Abweichungen von anerkannten Dialogprinzipien, Heuristiken, Gestaltungsregeln und Nutzungsanforderungen zu identifizieren.\n",
          "term-english": "Usability inspection",
          "term-german": "Usability-Inspektion"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A result from a usability evaluation.\n",
          "description-german": "Ergebnis aus einer Usability-Evaluierung.\n",
          "term-english": "Usability finding",
          "term-german": "Usability-Befund"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A document reporting the results of a usability test, a usability inspection or a user survey.\n",
          "description-german": "Ein Dokument, in dem die Ergebnisse eines Usability-Tests, einer Usability-Inspektion oder einer Benutzerbefragung berichtet werden.\n",
          "term-english": "Usability evaluation report",
          "term-german": "Usability-Evaluierungsbericht"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "A usability test where usability test participants solve usability test tasks without a moderator.\n",
          "description-german": "Ein Usability-Test, bei dem Usability-Testteilnehmer Usability-Testaufgaben ohne Moderator erledigen.\n",
          "term-english": "Unmoderated usability test",
          "term-german": "Unmoderierter Usability-Test"
        },
        {
          "categories": [
            "Implementierung"
          ],
          "description-english": "A basic component of a user interface that is presented to the user by the interactive system.\n",
          "description-german": "Ein Grundelement einer Benutzungsschnittstelle, die dem Benutzer vom interaktivem System präsentiert wird.\n",
          "term-english": "User interface element",
          "term-german": "User Interface Element"
        },
        {
          "categories": [
            "Evaluierung",
            "Gestaltung"
          ],
          "description-english": "A low-level, specific rule or recommendation for user interface design that leaves little room for interpretation, allowing designers to implement it consistently.\n",
          "description-german": "Konkrete, spezifische Instruktion oder Empfehlung für das Design von Benutzungsschnittstellen, die wenig Interpretationsspielraum lässt, sodass Designer sie konsistent umsetzen können.\n",
          "term-english": "User interface guideline",
          "term-german": "Gestaltungsregel"
        },
  /*      {
          "categories": [
            "Prinzipien"
          ],
          "description-english": "The property of a dialogue that allows users to modify interactions and the presentation of information to suit their individual capabilities and needs.\n",
          "description-german": "Die Eigenschaft eines Dialogs, die Benutzern ermöglicht, die Interaktion mit dem System und die Darstellung von Informationen an ihre individuellen Fähigkeiten und Bedürfnisse anpassen zu können.\n",
          "term-english": "Suitability for individualisation",
          "term-german": "Individualisierbarkeit"
        },*/
        {
          "categories": [
            "Planung",
            "Test"
          ],
          "description-english": "A method for structuring information – such as menus in a navigation structure – that involves writing key concepts onto different cards and asking users to sort these cards into groups.\n",
          "description-german": "Eine Methode zum Strukturieren von Information – wie beispielsweise Menüs in einer Navigationsstruktur –, bei der Kernbegriffe auf verschiedene Karten geschrieben werden und Benutzer aufgefordert werden, diese Karten in Gruppen zu sortieren.\n",
          "term-english": "Card sorting",
          "term-german": "Card-Sorting"
        },
        {
          "categories": [
            "Gestaltung",
            "Anforderungen"
          ],
          "description-english": "The naming and structuring of the information that must be accessible to the user.\n",
          "description-german": "Die Benennung und Strukturierung der Information, die für den Benutzer zugänglich sein muss.\n",
          "term-english": "Information architecture",
          "term-german": "Informationsarchitektur"
        },
        {
          "categories": [
            "Test",
            "Planung"
          ],
          "description-english": "A narrative text description that describes an intended usage situation with the interactive system under development.",
          "description-german": "Eine erzählende, textuelle Beschreibung, die eine zukünftige Benutzungssituation mit dem in Entwicklung befindlichen interaktiven System beschreibt.",
          "term-english": "Use scenario",
          "term-german": "Nutzungsszenario"
        },
        {
          "categories": [
            "Anforderungen",
            "Evaluierung"
          ],
          "description-english": "A graphical or tabular description of all encounters users have with the interactive system covering all touchpoints that influence the user experience, making the overall user experience tangible for others.\n",
          "description-german": "Eine grafische oder tabellarische Beschreibung aller Begegnungen, die Benutzer mit dem interaktiven System haben und welche alle die User Experience beeinflussenden Touchpoints (Kontaktpunkte) abdeckt, wodurch die gesamte User Experience für andere greifbar wird.\n",
          "term-english": "User journey map",
          "term-german": "User Journey Map"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "The goals that are to be achieved for the user of an interactive system when developing the interactive system.\n",
          "description-german": "Die Ziele, die für den Benutzer eines interaktiven Systems bei der Entwicklung eines interaktiven Systems erreicht werden sollen.\n",
          "term-english": "Human-centred quality objectives",
          "term-german": "Menschzentrierte Qualitätsziele"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "A description of the human-centred design activities and deliverables for an interactive system.\n",
          "description-german": "Eine Beschreibung der Aktivitäten und der UX-Ergebnisse der menschzentrierten Gestaltung für ein interaktives System.\n",
          "term-english": "User experience project plan",
          "term-german": "User Experience Projektplan"
        },
        {
          "categories": [
            "Anforderungen",
            "Prinzipien"
          ],
          "description-english": "The intended outcome.\n",
          "description-german": "Das angestrebte Arbeitsergebnis.\n",
          "term-english": "Goal",
          "term-german": "Ziel"
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
            "Gestaltung",
            "Anforderungen"
          ],
          "description-english": "A condition or capability that must be met or possessed by an interactive system to satisfy an agreement, standard, specification or other formally imposed documents.\n",
          "description-german": "Eine Bedingung oder Fähigkeit, die ein interaktives System erfüllen oder besitzen muss, um eine Vereinbarung, eine Norm, eine Spezifikation oder andere formal auferlegte Dokumente zu erfüllen.\n",
          "term-english": "Requirement",
          "term-german": "Anforderung"
        },
        {
          "categories": [
            "Anforderungen",
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "A set of activities undertaken in order to achieve a specific goal. \n",
          "description-german": "Eine Menge von Aktivitäten, die unternommen werden, um ein bestimmtes Ziel zu erreichen.\n",
          "term-english": "Task",
          "term-german": "Aufgabe"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "The property of an interactive system to support the user in the completion of the task – that is, to base the functionality and the dialogue on the task characteristics (rather than the technology chosen to perform the task).\n",
          "description-german": "Die Eigenschaft eines interaktiven Systems den Benutzer zu unterstützen, seine Aufgabe zu erledigen, d. h., die Funktionalität und Dialog an die charakteristischen Eigenschaften der Aufgabe anzupassen, anstatt an die zur Aufgabenerledigung eingesetzten Technologie.\n",
          "term-english": "Suitability for the task",
          "term-german": "Aufgabenangemessenheit"
        },
        {
          "categories": [
            "Implementierung"
          ],
          "description-english": "A description of the subtasks within a task that have to be carried out in order to reach the user’s goals.\n",
          "description-german": "Eine Beschreibung der Teilaufgaben innerhalb einer Aufgabe, die ausgeführt werden müssen, um die Ziele des Benutzers zu erreichen.\n",
          "term-english": "Task model",
          "term-german": "Aufgabenmodell"
        },
        {
          "categories": [
            "Prinzipien"
          ],
          "description-english": "The extent to which an interactive system enables users to interact with it effectively, efficiently and with satisfaction, regardless of their level of vision, hearing, dexterity, cognition, physical mobility, etc.\n",
          "description-german":  "Das Ausmaß, in dem ein interaktives System den Benutzern ermöglicht, effektiv, effizient und zufriedenstellend zu interagieren, unbeachtet der Ausprägung ihres Sehens, ihres Hörens, ihrer Geschicklichkeit, ihres Denkens, ihrer physischen Beweglichkeit usw.\n",
          "term-english": "Accessibility",
          "term-german": "Barrierefreiheit"
        },
        {
          "categories": [
            "Rollen",
            "Anforderungen"
          ],
          "description-english": "A person who interacts with an interactive system, or who uses the output of the system.\n",
          "description-german": "Eine Person, die mit einem interaktiven System interagiert oder die Ergebnisse, die vom System erzeugt werden, benutzt.\n",
          "term-english": "User",
          "term-german": "Benutzer"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A usability evaluation where users are asked to report subjective data into a questionnaire based on their experience of using an interactive system.\n",
          "description-german": "Eine Usability-Evaluierung, bei der Benutzer, ausgehend von ihren Erfahrungen bei der Benutzung eines interaktiven Systems, subjektive Daten in einem Fragebogen angeben.\n",
          "term-english": "User survey",
          "term-german": "Benutzerbefragung"
        },
        {
          "categories": [
            "Planung",
            "Evaluierung"
          ],
          "description-english": "A user’s perceptions and responses that result from the use and/or anticipated use of an interactive system.\n",
          "description-german": "Die Wahrnehmungen und Reaktionen eines Benutzers, die sich aus der Benutzung und/oder der erwarteten Benutzung eines interaktiven Systems ergeben.\n",
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
          "description-english": "A collection of users with the same or similar personal characteristics and context of use related to the interactive system.",
          "description-german": "Eine Gruppe von Benutzern mit gleichen oder ähnlichen persönlichen Merkmalen und Nutzungskontexten bezogen auf das interaktive System.",
          "term-english": "User group",
          "term-german": "Benutzergruppe"
        },
        {
          "categories": [
            "Rollen",
            "Evaluierung"
          ],
          "description-english": "A generalized description of a user group.",
          "description-german": "Eine verallgemeinerte Beschreibung einer Benutzergruppe.",
          "term-english": "User group profile",
          "term-german": "Benutzergruppenprofil"
        },
        {
          "categories": [
            "Planung",
            "Gestaltung",
            "System"
          ],
          "description-english": "Information to help a user to interact with an interactive system.\n",
          "description-german": "Informationen, um einem Benutzer bei der Interaktion mit einem interaktiven System zu helfen.\n",
          "term-english": "User assistance",
          "term-german": "Benutzerunterstützung"
        },
        {
          "categories": [
            "System",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "All components of an interactive system (software or hardware) that provide information and controls for the user, to allow them to accomplish specific tasks with the interactive system.",
          "description-german": "Alle Bestandteile eines interaktiven Systems (Software oder Hardware), die dem Benutzer Informationen und Steuerelemente zur Verfügung stellen, die es dem Benutzer erlauben, bestimmte Aufgaben mit dem interaktiven System zu erledigen.",
          "term-english": "User interface",
          "term-german": "Benutzungsschnittstelle"
        },
        {
          "categories": [
            "Rollen",
            "System"
          ],
          "description-english": "A person who watches users in an observation, usability test session or focus group.\n",
          "description-german": "Eine Person, die Benutzer in einer Beobachtung, Usability-Testsitzung oder Fokusgruppe beobachtet. \n",
          "term-english": "Observer",
          "term-german": "Beobachter"
        },
        {
          "categories": [
            "Prinzipien",
            "Anforderungen"
          ],
          "description-english": "A method for gathering contextual information relating to user needs in which an observer watches users who carry out tasks that are related to the interactive system.\n",
          "description-german": "Eine Methode zum Sammeln von Kontextinformationen zu den Erfordernissen des Nutzungskontextes, bei der ein Beobachter Benutzer beobachtet, die mit dem interaktiven System in Beziehung stehende Aufgaben ausführen. \n",
          "term-english": "Observation",
          "term-german": "Beobachtung"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "The first activity in an interview or a usability test session where the usability test participant is informed about the purpose of the interview or usability test and what their role and contribution will be.",
          "description-german": "Die erste Aktivität in einem Interview oder in einer Usability-Testsitzung, in der ein Usability-Testteilnehmer über den Zweck des Interviews oder des Usability-Tests, über seine eigene Rolle sowie den erwarteten Beitrag informiert wird.",
          "term-english": "Briefing",
          "term-german": "Briefing"
        },
        {
          "categories": [
            "Gestaltung",
            "Test",
            "Evaluierung"
          ],
          "description-english": "A solution to a commonly occurring design problem within a given context of use, that describes the design problem, a general solution, and examples of how to apply it.\n",
          "description-german": "Eine Lösung eines häufig auftretenden Gestaltungsproblems in einem gegebenen Nutzungskontext. Das Design Pattern beschreibt ein Gestaltungsproblem, eine allgemeine Lösung und Beispiele, wie diese Lösung angewandt werden kann.\n",
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
          "description-english": "An interaction between a user and an interactive system that consists of user actions (input) and responses from the interactive system (output) in order to achieve a goal.",
          "description-german": "Die Interaktion zwischen einem Benutzer und einem interaktiven System in Form einer Folge von Handlungen des Benutzers (Eingaben) und Antworten des interaktiven Systems (Ausgaben), um ein Ziel zu erreichen.",
          "term-english": "Dialogue",
          "term-german": "Dialog"
        },
        {
          "categories": [
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "General goals for the design of useful and usable dialogues.\n",
          "description-german": "Allgemeine Ziele f\u00fcr das Dialogdesign.\n",
          "term-english": "Dialogue principles",
          "term-german": "Dialogprinzipien"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "The accuracy and completeness with which users achieve specified goals.",
          "description-german": "Die Genauigkeit und Vollständigkeit, mit der Benutzer festgelegte Ziele erreichen.",
          "term-english": "Effectiveness",
          "term-german": "Effektivität"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "The resources used in relation to the results achieved.",
          "description-german": "Die verwendeten Ressourcen in Bezug auf die erzielten Ergebnisse.",
          "term-english": "Efficiency",
          "term-german": "Effizienz"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A prerequisite identified as necessary for a user, or a user group, to achieve a goal, implied or stated within a specific context of use.\n",
          "description-german": "Eine Voraussetzung, die für einen Benutzer oder eine Benutzergruppe als notwendig erachtet wird, um ein implizites oder im Rahmen eines bestimmten Nutzungskontextes vorgegebenes Ziel zu erreichen.\n",
          "term-english": "User need",
          "term-german": "Erfordernis"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "Correspondence to predictable contextual needs of the user and to commonly accepted conventions.\n",
          "description-german": "Übereinstimmung mit den aus dem Nutzungskontext heraus vorhersehbaren Benutzerbelangen sowie allgemein anerkannten Konventionen.\n",
          "term-english": "Conformity with user expectations",
          "term-german": "Erwartungskonformität"
        },
        {
          "categories": [
            "Anforderungen",
            "Evaluierung"
          ],
          "description-english": "The property of a dialogue to achieve the intended result with either no, or minimal, corrective action by the user despite evident errors in input.\n",
          "description-german": "Die Eigenschaft eines Dialogs, das beabsichtigte Arbeitsergebnis trotz erkennbar fehlerhafter Eingaben entweder mit keinem oder mit minimalem Korrekturaufwand seitens des Benutzers zu erreichen.\n",
          "term-english": "Error tolerance",
          "term-german": "Fehlertoleranz"
        },
        {
          "categories": [
            "Prinzipien"
          ],
          "description-english": "The property of a Dialogue that allows users to modify interaction and presentation of information to suit their individual capabilities and needs.\n",
          "description-german": "Die Eigenschaft eines Dialogs die Benutzer ermöglicht die Interaktion mit dem System und die Darstellung von Informationen an ihre individuellen Fähigkeiten und Bedürfnisse anpassen zu können.\n",
          "term-english": "Suitability for individualization",
          "term-german": "Individualisierbarkeit"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Rollen"
          ],
          "description-english": "A focused discussion where a moderator leads a group of participants through a set of questions on a particular topic.\n",
          "description-german": "Eine gezielte Diskussion, bei der ein Moderator eine Gruppe von Teilnehmern durch eine Menge von Fragen zu einem bestimmten Thema f\u00fchrt. \n",
          "term-english": "Focus group",
          "term-german": "Fokusgruppe"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A set of questions that is used to collect data from users, often in a user survey.\n",
          "description-german": "Ein Satz von Fragen, der verwendet wird, um Daten von Benutzern zu sammeln, oft innerhalb einer Benutzerbefragung.\n",
          "term-english": "Questionnaire",
          "term-german": "Fragebogen"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "An interview question that requires an answer from a predetermined set of alternatives, for example yes and no.\n",
          "description-german": "Eine Interviewfrage, die eine Antwort aus einem vordefinierten Satz von Alternativen fordert, oft einfach „ja“ oder „nein“.\n",
          "term-english": "Closed question",
          "term-german": "Geschlossene Frage"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "A generally recognized rule of thumb that helps to achieve usability.\n",
          "description-german": "Eine allgemein anerkannte Daumenregel die hilft Usability zu erreichen.\n",
          "term-english": "Heuristic",
          "term-german": "Heuristik"
        },
        {
          "categories": [
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "A usability inspection in which one or more evaluators compare an interactive system to a list of heuristics and identify where the interactive system does not follow those heuristics.\n",
          "description-german": "Eine Usability-Inspektion, bei der ein oder mehrere Evaluatoren ein interaktives System mit einer Liste von Heuristiken vergleichen und feststellen, an welchen Stellen das interaktive System diesen Heuristiken nicht folgt.\n",
          "term-english": "Heuristic evaluation",
          "term-german": "Heuristische Evaluierung"
        },
        {
          "categories": [
            "Test",
            "System"
          ],
          "description-english": "A software prototype of the user interface to the interactive system that is being designed. A high-fidelity prototype more closely resembles the finished interactive system.\n",
          "description-german": "Ein Software-Prototyp der Benutzungsschnittstelle des zu entwickelnden interaktiven Systems. Ein High-Fidelity-Prototyp ähnelt dem fertigen interaktiven System.\n",
          "term-english": "High-fidelity prototype",
          "term-german": "High-fidelity-Prototyp"
        },
        {
          "categories": [
            "Anforderungen",
            "Prinzipien"
          ],
          "description-english": "A family of standards covering human-centred design.\n",
          "description-german": "Eine Reihe von Standards, die die menschzentrierte Gestaltung interaktiver Systeme betrifft.\n",
          "term-english": "ISO 9241",
          "term-german": "ISO 9241"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "A user who uses the output of the interactive system, but who does not interact directly with the interactive system.",
          "description-german": "Ein Benutzer, der die Ergebnisse des interaktiven Systems verwendet, aber nicht direkt mit dem interaktiven System interagiert.",
          "term-english": "Indirect user",
          "term-german": "Indirekter Benutzer"
        },
        {
          "categories": [
            "System",
            "Anforderungen"
          ],
          "description-english": "A combination of hardware, software and services that users interact with in order to achieve specific goals.\n",
          "description-german": "Eine Kombination aus Hardware, Software und Dienstleistungen, mit der Benutzer interagieren, um bestimmte Ziele zu erreichen.\n",
          "term-english": "Interactive system",
          "term-german": "Interaktives System"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "An individual or organisation with an active interest in an interactive system.\n",
          "description-german": "Eine Person oder Organisation mit einem aktiven Interesse an einem interaktiven System.\n",
          "term-english": "Stakeholder",
          "term-german": "Interessenvertreter"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A data-gathering method that questions a few carefully selected individuals in depth to arrive at a fuller understanding of the context of use for an existing or planned interactive system. Through inquiry and interpretation, it reveals commonalities and differences across the user base.\n",
          "description-german": "Eine Methode zur Datensammlung, die einige sorgfältig ausgewählte Personen eingehend befragt, um zu einem besseren Verständnis des Nutzungskontextes für ein vorhandenes oder geplantes interaktives System zu gelangen. Durch die Befragung und Interpretation werden Gemeinsamkeiten und Unterschiede innerhalb der Benutzer eines interaktiven Systems aufgedeckt. \n",
          "term-english": "Interview",
          "term-german": "Interview"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "A written list of suitable questions and cues used by the interviewer during an interview to make sure that all relevant topics are covered.",
          "description-german": "Eine schriftliche Liste geeigneter Fragen und Hinweise, die der Interviewer während eines Interviews verwendet, um sicherzustellen, dass alle relevanten Themen abgedeckt werden.",
          "term-english": "Interview checklist",
          "term-german": "Interviewcheckliste"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "A set of principles, methods and approaches for improving productivity by reducing documentation and unnecessary formalism, and focusing on iterative development in short cycles, collaboration and communication, incremental improvement and adaptation to changes.",
          "description-german": "Eine Reihe von Prinzipien, Methoden und Ansätzen zur Produktivitätssteigerung durch Reduzierung von Dokumentation und unnötigem Formalismus mit Fokus auf iterativer Entwicklung in kurzen Zyklen, Zusammenarbeit und Kommunikation, inkrementeller Verbesserung und Anpassung an Veränderungen.",
          "term-english": "Agile development",
          "term-german": "Agile Entwicklung"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "An approach to human-centred design that integrates principles and methods for usability and user experience into agile development, thereby achieving economic advantages.",
          "description-german": "Ein Ansatz der menschzentrierten Gestaltung, der Prinzipien und Methoden für Usability und User Experience in die agile Entwicklung integriert und damit wirtschaftliche Vorteile erzielt.",
          "term-english": "Lean UX",
          "term-german": "Lean UX"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "The level of understanding and implementation of a systematic human-centred design process within an organisation.",
          "description-german": "Das Verständnis und die Umsetzung eines systematischen Prozesses menschzentrierter Gestaltung in einer Organisation.",
          "term-english": "Usability maturity",
          "term-german": "Usability-Reife"
        },
        {
          "categories": [
            "Planung",
            "Evaluierung"
          ],
          "description-english": "Repetitive.An iterative process repeats steps in the human-centred design process until a usability evaluation of the user interface shows that the user requirements have been adequately met.",
          "description-german": "Wiederholend.Ein iteratives Vorgehen wiederholt Schritte des Prozesses der menschzentrierten Gestaltung solange, bis eine Usability-Evaluierung der Benutzungsschnittstelle zeigt, dass die Nutzungsanforderungen ausreichend erfüllt sind.",
          "term-english": "Iterative",
          "term-german": "Iterativ"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "The same information is presented in the same way throughout the interactive system, in accordance with the user’s expectation.\n",
          "description-german": "Dieselbe Information wird im interaktiven System durchgängig in gleicher Weise entsprechend der Erwartung des Benutzers präsentiert.\n",
          "term-english": "Consistency",
          "term-german": "Konsistenz"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "An interview that takes place at the location where the user’s interaction with the interactive system usually takes place and focuses on the context of use of the user.\n",
          "description-german": "Ein Interview, das dort stattfindet, wo die Interaktion des Benutzers mit dem interaktiven System üblicherweise erfolgt und das auf den Nutzungskontext des Benutzers abzielt.\n",
          "term-english": "Contextual interview",
          "term-german": "Kontextuelles Interview"
        },
        {
          "categories": [
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "A dialogue is suitable for learning when it supports and guides the user in learning to use the interactive system.\n",
          "description-german": "Die Eigenschaft eines Dialogs die Benutzer beim Erlernen der Nutzung des interaktiven Systems zu unterstützen und anzuleiten.\n",
          "term-english": "Suitability for learning",
          "term-german": "Lernförderlichkeit"
        },
        {
          "categories": [
            "Test",
            "System"
          ],
          "description-english": "A low-cost, simple illustration of a design or concept used to gather feedback from users and other stakeholders during the early stages of design. \n",
          "description-german": "Eine preiswerte, einfache Veranschaulichung eines Designs oder eines Konzepts, das benutzt wird, um Feedback von Benutzern und anderen Interessenvertretern während früher Phasen der Entwicklung einzuholen.\n",
          "term-english": "Low-fidelity prototype",
          "term-german": "Low-fidelity-Prototyp"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A requirement for an interactive system based on marketing policy aimed at maximizing business opportunities, purchase and use.\n",
          "description-german": "Eine Anforderung für ein interaktives System basierend auf einer Marketingpolitik, die darauf abzielt, Geschäftschancen, Absatz und Nutzen zu maximieren\n",
          "term-english": "Market requirement",
          "term-german": "Marktanforderung"
        },
        {
          "categories": [
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "A principle for a successful contextual interview: The interviewer treats the user as the master while the interviewer is the apprentice. The goal of the master-apprentice model is to understand users’ goals and tasks in detail by learning them as an apprentice would.",
          "description-german": "Ein Prinzip für ein erfolgreiches kontextuelles Interview: Der Interviewer behandelt den Benutzer als den Meister, während der Interviewer selbst der Schüler ist. Ziel des Meister- Schüler-Modells ist es, die Ziele und Aufgaben des Benutzers im Detail zu verstehen, indem man als Schüler vom Benutzer als Meister lernt.",
          "term-english": "Master-apprentice model",
          "term-german": "Meister-Schüler-Modell"
        },
        {
          "categories": [
            "Planung",
            "Gestaltung"
          ],
          "description-english": "An approach to design that aims to make interactive systems more usable by focusing on the use of the interactive system and applying human factors, ergonomics and usability knowledge and methods.",
          "description-german": "nteraktiven Systemen, die darauf abzielt, diese gebrauchtauglicher zu machen indem sie sich auf die Verwendung des interaktiven System konzentriert und Kenntnisse und Techniken aus den Bereichen der Arbeitswissenschaft, Ergonomie und der Gebrauchstauglichkeit anwendet.",
          "term-english": "Human-centred design",
          "term-german": "Menschzentrierte Gestaltung"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "The perception people have of themselves, others, the environment, and the things with which they interact.\n",
          "description-german": "Die Vorstellung, die Menschen von sich, anderen, der Umgebung und den Dingen haben, mit denen sie interagieren. \n",
          "term-english": "Mental model",
          "term-german": "Mentales Modell"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "The activity carried out by a moderator in a usability test or focus group.",
          "description-german": "Die durch einen Moderator w\u00e4hrend eines Usability-Tests oder einer Fokusgruppe ausge\u00fcbte T\u00e4tigkeit.",
          "term-english": "Moderation",
          "term-german": "Moderation"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "A neutral person who conducts a usability test session or a focus group session.\n",
          "description-german": "Eine neutrale Person die eine Usability-Testsitzung oder eine Fokusgruppe leitet.\n",
          "term-english": "Moderator",
          "term-german": "Moderator"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "The logical organization of the units of displayed information that comprise the user interface.\n",
          "description-german": "Die logische Organisation der angezeigten Informationseinheiten der Benutzungsschnittstelle.\n",
          "term-english": "Navigation structure",
          "term-german": "Navigationsstruktur"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A question in an interview that has no built-in assumptions, and no frame that excludes anything or directs the reply in a certain direction.\n",
          "description-german": "Eine Frage in einem Interview, die keine impliziten Annahmen beinhaltet und auch keinen Ansatz bietet, einen Aspekt auszuschliessen oder die Antwort in eine bestimmte Richtung zu lenken.\n",
          "term-english": "Neutral question",
          "term-german": "Neutrale Frage"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A requirement for use that provides the basis for design and evaluation of an interactive system to meet identified user needs.\n",
          "description-german": "Eine Anforderung an die Nutzung, die die Grundlage für die Gestaltung und die Usability-Evaluierung eines interaktiven Systems bildet, um identifizierte Erfordernisse zu erfüllen.\n",
          "term-english": "User requirement",
          "term-german": "Nutzungsanforderung"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "A combination of users, goals, tasks, resources, and environments.\n",
          "description-german": "Eine Kombination aus Benutzern, Zielen, Aufgaben, Ressourcen und Umgebungen\n",
          "term-english": "Context of use",
          "term-german": "Nutzungskontext"
        },
        {
          "categories": [
            "Anforderungen",
            "Planung"
          ],
          "description-english": "A description of the users, goals, tasks, resources, and environments derived from observations, contextual interview and focus groups.\n",
          "description-german": "Eine Beschreibung der Benutzer, Ziele, Aufgaben, Ressourcen und Umgebungen, die aus Beobachtungen, kontextuellen Interviews und Fokusgruppen hervorgeht.\n",
          "term-english": "Context of use description",
          "term-german": "Nutzungs-kontext-beschreibung"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A question in an interview that does not give any indication of the expected format or content of the answer.\n",
          "description-german": "Eine Frage in einem Interview, die keinen Hinweis auf das erwartete Format oder den erwarteten Inhalt der Antwort gibt.\n",
          "term-english": "Open question",
          "term-german": "Offene Frage"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Planung"
          ],
          "description-english": "An organizational rule that users have to follow when conducting their tasks.\n",
          "description-german": "Eine organisatorische Regel die Benutzer befolgen müssen während sie ihre Aufgaben lösen.\n",
          "term-english": "Organisational requirement",
          "term-german": "Organisatorische Anforderung"
        },
        {
          "categories": [
            "Rollen",
            "Planung"
          ],
          "description-english": "A description of a fictitious but realistic user and what they intend to do when using an interactive system \n",
          "description-german": "Eine Beschreibung eines konstruierten, aber realistischen Benutzers und was dieser bei der Benutzung eines interaktiven Systems beabsichtigt. \n",
          "term-english": "Persona",
          "term-german": "Persona"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "An activity in a Usability test session where the usability test participant answers questions about thier user experience and general impression of the Interactive system.  \n",
          "description-german": "Eine Aktivität in einer Usability-Testsitzung, bei der der Usability-Testteilnehmer Fragen bezüglich seines allgemeinen Eindrucks hinsichtlich der User Experience des interaktiven Systems beantwortet. \n",
          "term-english": "Post-session interview",
          "term-german": "Post-Session Interview"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "An activity in a usability test session where the usability test participant answers questions about their background and previous experience with the interactive system and related interactive systems.\n",
          "description-german": "Eine Aktivität in einer Usability-Testsitzung, bei der der Usability-Testteilnehmer Fragen bezüglich seines Hintergrundes und seiner Vorerfahrung mit dem interaktiven System oder ähnlichen interaktiven Systemen beantwortet.\n",
          "term-english": "Pre-session interview",
          "term-german": "Pre-Session Interview"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "A user who uses the interactive system for its intended purpose.",
          "description-german": "Ein Benutzer, der das interaktive System für seinen beabsichtigten Zweck verwendet.",
          "term-english": "Primary user",
          "term-german": "Primärer Benutzerr"
        },
        {
          "categories": [
            "Rollen",
            "Test"
          ],
          "description-english": "A user experience professional who makes notes of usability findings during a usability test session, focus group or interview.\n",
          "description-german": "Ein User Experience Professional, der während einer Usability-Testsitzung, einer Fokusgruppe oder einem Interview Notizen über Usability-Befunde macht.\n",
          "term-english": "Note-taker",
          "term-german": "Protokollant"
        },
        {
          "categories": [
            "Test",
            "System"
          ],
          "description-english": "A representation of all or part of an interactive system that, although limited in some way, can be used for analysis, design and usability evaluation.\n",
          "description-german": "Eine Repräsentation von Teilen oder des gesamten interaktiven Systems, die in einem bestimmten Maße für Analyse, Design und Usability-Evaluierung benutzt werden kann.\n",
          "term-english": "Prototype",
          "term-german": "Prototyp"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A statement of what users must be able to locate, recognise, understand, select or input as part of conducting a task with the interactive system to meet identified user needs in a specified context of use. \n",
          "description-german": "Eine Aussage darüber, was Benutzer im Rahmen der Durchführung einer Aufgabe mit dem interaktiven System feststellen, erkennen, verstehen, auswählen oder eingeben müssen, um den identifizierten Erfordernissen des Nutzungskontextes zu genügen.\n",
          "term-english": "Qualitative user requirement",
          "term-german": "Qualitative Nutzungsanforderung"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A required level of usability to meet identified user needs expressed in terms of measures of effectiveness, efficiency, satisfaction, accessibility, user experience and avoidance of harm from use in a specified context of use. \n",
          "description-german": "Ein erforderliches Maß an Usability, um die identifizierten Erfordernisse in einem bestimmten Nutzungskontext zu erfüllen, ausgedrückt in Maßen der Effektivität, der Effizienz, der Zufriedenstellung, der Barrierefreiheit, der User Experience und der Vermeidung von Schäden durch die Benutzung.\n",
          "term-english": "Quantitative user requirement",
          "term-german": "Quantitative Nutzungsanforderung"
        },
        {
          "categories": [
            "Planung",
            "Test"
          ],
          "description-english": "A process for selecting candidates that have the appropriate characteristics to participate in a human-centred activity such as a focus group, contextual interview, or usability test.\n",
          "description-german": "Ein Verfahren zur Auswahl von Kandidaten, die die erforderlichen Merkmale haben, an einer menschzentrierten Aktivität, wie z.B. einer Fokusgruppe, einem kontextuellen Interview oder einem Usability-Test, teilzunehmen. \n",
          "term-english": "Recruiting",
          "term-german": "Rekrutierung"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A usability test where the usability test participant and the Moderator are in different physical locations.\n",
          "description-german": "Ein Usability-Test bei dem sich der Usability-Testteilnehmer und der Moderator an unterschiedlichen Orten befinden.\n",
          "term-english": "Remote usability test",
          "term-german": "Remote Usability-Test"
        },
        {
          "categories": [
            "System"
          ],
          "description-english": "All means required to use an Interactive system.\n",
          "description-german": "Alle Mittel die zur Nutzung eines interaktiven Systems notwendig sind.\n",
          "term-english": "Resource",
          "term-german": "Ressourcen"
        },
        {
          "categories": [
            "Rollen",
            "Planung"
          ],
          "description-english": "A user who carries out support tasks with the interactive system, for example to maintain it or to train primary users.\n",
          "description-german": "Ein Benutzer, der unterstützende Aufgaben mit dem interaktiven System ausführt, beispielsweise um es zu pflegen oder um primäre Benutzer zu schulen.\n",
          "term-english": "Secondary user",
          "term-german": "Sekundärer Benutzer"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "The property of a Dialogue to, at any time, make it obvious to the users which dialogue they are in, where they are within the dialogue, which actions can be taken, and how they can be performed.\n",
          "description-german": "Die Eigenschaft eines Dialogs zu jeder Zeit dem Benutzer offensichtlich zu machen, in welchem Dialog, an welcher Stelle im Dialog er sich befindet, welche Handlungen unternommen werden können und wie diese ausgeführt werden können.\n",
          "term-english": "Self-descriptiveness",
          "term-german": "Selbstbeschreibungsfähigkeit"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "The ability of a User to initiate and control the direction and pace of the interaction until the point at which the Goal has been met.\n",
          "description-german": "Der Benutzer ist in der Lage einen Dialogablauf zu starten sowie seine Richtung und Geschwindigkeit zu beeinflussen, bis das Ziel erreicht ist.\n",
          "term-english": "Controllability",
          "term-german": "Steuerbarkeit"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "A sequence of visual frames illustrating the interplay between a User and an envisioned interactive system. \n",
          "description-german": "Eine Folge visueller Bildschirminhalte, die das Zusammenspiel zwischen einem Benutzer und einem vorgestellten interaktiven System darstellt. \n",
          "term-english": "Storyboard",
          "term-german": "Storyboard"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "A collection of user interface guidelines used to ensure consistency in the appearance and behaviour of user interfaces across interactive systems produced by the same organisation\n",
          "description-german": "Eine Sammlung von Gestaltungsregeln, die verwendet wird, um Konsistenz in der Erscheinung und im Verhalten von Benutzungsschnittstellen von interaktiven Systemen zu gewährleisten, die von derselben Organisation erstellt werden.\n",
          "term-english": "Style guide",
          "term-german": "Style Guide"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A question in an Interview that signals a preference for certain possibilities, or attempts to direct the reply in a certain direction. \n",
          "description-german": "Eine Frage in einem Interview, die eine Präferenz für bestimmte Antwortmöglichkeiten vorgibt oder versucht, die Antwort in eine bestimmte Richtung zu lenken.\n",
          "term-english": "Leading question",
          "term-german": "Suggestionsfrage"
        },
        {
          "categories": [
            "Planung",
            "System"
          ],
          "description-english": "The physical, social and technical conditions in which a User interacts with an Interactive system.\n",
          "description-german": "Die physischen, sozialen und technischen Bedingungen, unter denen ein Benutzer mit einem interaktiven System interagiert.\n",
          "term-english": "Environment",
          "term-german": "Umgebung"
        },
        {
          "categories": [
            "Test",
            "Anforderungen",
            "Prinzipien"
          ],
          "description-english": "Extent to which an Interactive system can be used by specified users to achieve specified goals with Effectiveness, Efficiency and Satisfaction in a specified Context of use.\n",
          "description-german": "Das Ausmaß, in dem ein interaktives System von bestimmten Benutzern benutzt werden kann, um in einem bestimmten Nutzungskontext bestimmte Ziele effektiv, effizient und zufriedenstellend zu erreichen.\n",
          "term-english": "Usability",
          "term-german": "Usability"
        },
        {
          "categories": [
            "Test",
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "A process through which information about the Usability of an Interactive system is gathered in order to improve the interactive system (known as formative usability evaluation) or to assess the merit or worth of an Interactive system (known as aummative usability evaluation).\n",
          "description-german": "Ein Prozess der Informationen über die Usability eines interaktiven Systems sammelt um das interaktive System zu verbessern (Formative Usability-Evaluierung) oder um das interaktive System zu bewerten (Summative Usability-Evaluierung).\n",
          "term-english": "Usability evaluation",
          "term-german": "Usability-Evaluierung"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "Two or more rooms that are specially equipped for Usability tests or focus groups. \n",
          "description-german": "Zwei oder mehrere Räume, die speziell für die Durchführung von Usabilty-Tests oder Fokusgruppen ausgestattet sind.  \n",
          "term-english": "Usability lab",
          "term-german": "Usability-Labor"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "A difficulty in using the user interface that affects the ability of the user to achieve their goals effectively, or efficiently, or with satisfaction.\n",
          "description-german": "Ein Problem in der Benutzung der Benutzungsschnittstelle, das sich auf die Fähigkeit des Benutzers auswirkt, seine Ziele effektiv oder effizient oder zufriedenstellend zu erreichen.\n",
          "term-english": "Usability problem",
          "term-german": "Usability-Problem"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "A measure given to a usability finding from a usability test to indicate the impact and criticality on the user experience and the consequences.\n",
          "description-german": "Ein Maß für einen Usability-Befund aus einem Usability-Test, um Hinweise hinsichtlich der Auswirkungen des Befundes auf die User Experience, der Kritikalität sowie der Konsequenzen zu geben.\n",
          "term-english": "Rating",
          "term-german": "Bewertung"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A usability evaluation that involves representative users performing specific tasks with the interactive system to enable identification and analysis of usability problems, or the measurement of effectiveness, efficiency, and user satisfaction.\n",
          "description-german": "Eine Usability-Evaluierung, bei der repräsentative Benutzer bestimmte Aufgaben mit dem interaktiven System ausführen, um Usability-Probleme zu erfassen oder die Messung von Effektivität, Effizienz und Zufriedenstellung zu ermöglichen.\n",
          "term-english": "Usability test",
          "term-german": "Usability-Test"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "A description of a task that a moderator asks a usability test participant to carry out during a usability test.",
          "description-german": "Eine Beschreibung einer Aufgabe, die ein Moderator einem Usability-Testteilnehmer während eines Usability-Tests stellt. ",
          "term-english": "Usability test task",
          "term-german": "Usability-Testaufgabe"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A document that describes the results of a usability test. \n",
          "description-german": "Ein Dokument, das die Ergebnisse eines Usability-Tests beschreibt. \n",
          "term-english": "Usability test report",
          "term-german": "Usability-Testbericht"
        },
        {
          "categories": [
            "Planung",
            "Evaluierung"
          ],
          "description-english": "A brief description of the purpose and extent of a usability test. \n",
          "description-german": "Eine kurze Beschreibung des Zwecks und Umfangs eines Usability-Tests. \n",
          "term-english": "Usability test plan",
          "term-german": "Usability-Testplan"
        },
        {
          "categories": [
            "Gestaltung",
            "Test"
          ],
          "description-english": "A part of a Usability test where one usability test participant carries out representative Usability test tasks using the Interactive system or a Prototype of the interactive system.\n",
          "description-german": "Der Teil eines Usability-Tests, bei dem ein bestimmter Usability-Testteilnehmer repräsentative Usability-Testaufgaben unter Benutzung des interaktiven Systems oder des Prototypen eines interaktiven Systems löst.\n",
          "term-english": "Usability test session",
          "term-german": "Usability-Testsitzung"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A checklist used by a moderator in a usability test to keep track of briefing and pre-session interview questions, usability test tasks, and post-session interview questions.",
          "description-german": "Eine von einem Moderator in einem Usability-Test verwendete Checkliste, um den Überblick über die Fragen des Briefings und des Pre-Session Interviews, die Usability-Testaufgaben und die Fragen des Post-Session Interviews zu behalten.",
          "term-english": "Usability test script",
          "term-german": "Usability-Testskript"
        },
        {
          "categories": [
            "Rollen",
            "Test"
          ],
          "description-english": "A representative user who carries out usability test tasks in a usability test session.",
          "description-german": "in repräsentativer Benutzer, der Usability-Testaufgaben in einer Usability-Testsitzung ausführt.",
          "term-english": "Usability test participant",
          "term-german": "Usability-Testteilnehmer"
        },
 
        {
          "categories": [
            "Planung"
          ],
          "description-english": "A screen or page in a low-fidelity prototype for a graphical user interface comprised of lines, rectangular boxes and text that represent the intended interaction design.\n",
          "description-german": "Ein Screen oder eine Seite in einem Low-Fidelity-Prototyp für eine grafische Benutzungsschnittstelle, bestehend aus Linien, rechteckigen Kästen und Text, der das zukünftige Interaktionsdesign repräsentiert.\n",
          "term-english": "Wireframe",
          "term-german": "Wireframe"
        },
        {
          "categories": [
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "The extent to which the user’s physical, cognitive and emotional responses that result from the use of an interactive system meet the user’s needs and expectations.\n",
          "description-german": "Das Ausmaß, in dem die physischen, kognitiven und emotionalen Reaktionen des Benutzers, die sich aus der Benutzung eines interaktiven Systems ergeben, die Bedürfnisse und Erwartungen des Benutzers erfüllen.\n",
          "term-english": "Satisfaction",
          "term-german": "Zufriedenstellung"
        }
      ],
      seconds:0,
      grade:0,
      englishChoices:[],
      germanChoices:[],
      currentQuestion:null,
      correctAnswerEng:null,
      correctAnswerGer:null,
      toggle:false,
      emptyName:false,
      done:false,
      newQuestion:false,
      English:JSON.parse(localStorage.getItem( "english" ))===null?true:JSON.parse(localStorage.getItem( "english" )),
      choosenAnswer:null,
      openDialog:false,
      choicesItems:[
        {
          "categories": [
            "Test",
            "Planung"
          ],
          "description-english": "A narrative text description of the procedure a specific user currently follows to complete one or more tasks.",
          "description-german": "Eine erzählende, textuelle Beschreibung des Vorgehens, das ein bestimmter Benutzer anwendet, um eine oder mehrere Aufgaben zu erledigen.",
          "term-english": "As-is scenario",
          "term-german": "Ist-Szenario"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "\n",
          "description-german": "\n",
          "term-english": "User experience professional",
          "term-german": "User Experience Professional"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A usability evaluation based on the judgment of one or more evaluators who examine or use an interactive system to identify potential usability problems and deviations from established dialogue principles, heuristics, user interface guidelines and user requirements.\n",
          "description-german": "Eine Usability-Evaluierung, die auf der Begutachtung durch einen oder mehrere Evaluatoren basiert, die ein interaktives System prüfen oder benutzen, um potenzielle Usability-Probleme und Abweichungen von anerkannten Dialogprinzipien, Heuristiken, Gestaltungsregeln und Nutzungsanforderungen zu identifizieren.\n",
          "term-english": "Usability inspection",
          "term-german": "Usability-Inspektion"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A result from a usability evaluation.\n",
          "description-german": "Ergebnis aus einer Usability-Evaluierung.\n",
          "term-english": "Usability finding",
          "term-german": "Usability-Befund"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A document reporting the results of a usability test, a usability inspection or a user survey.\n",
          "description-german": "Ein Dokument, in dem die Ergebnisse eines Usability-Tests, einer Usability-Inspektion oder einer Benutzerbefragung berichtet werden.\n",
          "term-english": "Usability evaluation report",
          "term-german": "Usability-Evaluierungsbericht"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "A usability test where usability test participants solve usability test tasks without a moderator.\n",
          "description-german": "Ein Usability-Test, bei dem Usability-Testteilnehmer Usability-Testaufgaben ohne Moderator erledigen.\n",
          "term-english": "Unmoderated usability test",
          "term-german": "Unmoderierter Usability-Test"
        },
        {
          "categories": [
            "Implementierung"
          ],
          "description-english": "A basic component of a user interface that is presented to the user by the interactive system.\n",
          "description-german": "Ein Grundelement einer Benutzungsschnittstelle, die dem Benutzer vom interaktivem System präsentiert wird.\n",
          "term-english": "User interface element",
          "term-german": "User Interface Element"
        },
        {
          "categories": [
            "Evaluierung",
            "Gestaltung"
          ],
          "description-english": "A low-level, specific rule or recommendation for user interface design that leaves little room for interpretation, allowing designers to implement it consistently.\n",
          "description-german": "Konkrete, spezifische Instruktion oder Empfehlung für das Design von Benutzungsschnittstellen, die wenig Interpretationsspielraum lässt, sodass Designer sie konsistent umsetzen können.\n",
          "term-english": "User interface guideline",
          "term-german": "Gestaltungsregel"
        },
      /*  {
          "categories": [
            "Prinzipien"
          ],
          "description-english": "The property of a dialogue that allows users to modify interactions and the presentation of information to suit their individual capabilities and needs.\n",
          "description-german": "Die Eigenschaft eines Dialogs, die Benutzern ermöglicht, die Interaktion mit dem System und die Darstellung von Informationen an ihre individuellen Fähigkeiten und Bedürfnisse anpassen zu können.\n",
          "term-english": "Suitability for individualisation",
          "term-german": "Individualisierbarkeit"
        },*/
        {
          "categories": [
            "Planung",
            "Test"
          ],
          "description-english": "A method for structuring information – such as menus in a navigation structure – that involves writing key concepts onto different cards and asking users to sort these cards into groups.\n",
          "description-german": "Eine Methode zum Strukturieren von Information – wie beispielsweise Menüs in einer Navigationsstruktur –, bei der Kernbegriffe auf verschiedene Karten geschrieben werden und Benutzer aufgefordert werden, diese Karten in Gruppen zu sortieren.\n",
          "term-english": "Card sorting",
          "term-german": "Card-Sorting"
        },
        {
          "categories": [
            "Gestaltung",
            "Anforderungen"
          ],
          "description-english": "The naming and structuring of the information that must be accessible to the user.\n",
          "description-german": "Die Benennung und Strukturierung der Information, die für den Benutzer zugänglich sein muss.\n",
          "term-english": "Information architecture",
          "term-german": "Informationsarchitektur"
        },
        {
          "categories": [
            "Test",
            "Planung"
          ],
          "description-english": "A narrative text description that describes an intended usage situation with the interactive system under development.",
          "description-german": "Eine erzählende, textuelle Beschreibung, die eine zukünftige Benutzungssituation mit dem in Entwicklung befindlichen interaktiven System beschreibt.",
          "term-english": "Use scenario",
          "term-german": "Nutzungsszenario"
        },
        {
          "categories": [
            "Anforderungen",
            "Evaluierung"
          ],
          "description-english": "A graphical or tabular description of all encounters users have with the interactive system covering all touchpoints that influence the user experience, making the overall user experience tangible for others.\n",
          "description-german": "Eine grafische oder tabellarische Beschreibung aller Begegnungen, die Benutzer mit dem interaktiven System haben und welche alle die User Experience beeinflussenden Touchpoints (Kontaktpunkte) abdeckt, wodurch die gesamte User Experience für andere greifbar wird.\n",
          "term-english": "User journey map",
          "term-german": "User Journey Map"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "The goals that are to be achieved for the user of an interactive system when developing the interactive system.\n",
          "description-german": "Die Ziele, die für den Benutzer eines interaktiven Systems bei der Entwicklung eines interaktiven Systems erreicht werden sollen.\n",
          "term-english": "Human-centred quality objectives",
          "term-german": "Menschzentrierte Qualitätsziele"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "A description of the human-centred design activities and deliverables for an interactive system.\n",
          "description-german": "Eine Beschreibung der Aktivitäten und der UX-Ergebnisse der menschzentrierten Gestaltung für ein interaktives System.\n",
          "term-english": "User experience project plan",
          "term-german": "User Experience Projektplan"
        },
        {
          "categories": [
            "Anforderungen",
            "Prinzipien"
          ],
          "description-english": "The intended outcome.\n",
          "description-german": "Das angestrebte Arbeitsergebnis.\n",
          "term-english": "Goal",
          "term-german": "Ziel"
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
            "Gestaltung",
            "Anforderungen"
          ],
          "description-english": "A condition or capability that must be met or possessed by an interactive system to satisfy an agreement, standard, specification or other formally imposed documents.\n",
          "description-german": "Eine Bedingung oder Fähigkeit, die ein interaktives System erfüllen oder besitzen muss, um eine Vereinbarung, eine Norm, eine Spezifikation oder andere formal auferlegte Dokumente zu erfüllen.\n",
          "term-english": "Requirement",
          "term-german": "Anforderung"
        },
        {
          "categories": [
            "Anforderungen",
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "A set of activities undertaken in order to achieve a specific goal. \n",
          "description-german": "Eine Menge von Aktivitäten, die unternommen werden, um ein bestimmtes Ziel zu erreichen.\n",
          "term-english": "Task",
          "term-german": "Aufgabe"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "The property of an interactive system to support the user in the completion of the task – that is, to base the functionality and the dialogue on the task characteristics (rather than the technology chosen to perform the task).\n",
          "description-german": "Die Eigenschaft eines interaktiven Systems den Benutzer zu unterstützen, seine Aufgabe zu erledigen, d. h., die Funktionalität und Dialog an die charakteristischen Eigenschaften der Aufgabe anzupassen, anstatt an die zur Aufgabenerledigung eingesetzten Technologie.\n",
          "term-english": "Suitability for the task",
          "term-german": "Aufgabenangemessenheit"
        },
        {
          "categories": [
            "Implementierung"
          ],
          "description-english": "A description of the subtasks within a task that have to be carried out in order to reach the user’s goals.\n",
          "description-german": "Eine Beschreibung der Teilaufgaben innerhalb einer Aufgabe, die ausgeführt werden müssen, um die Ziele des Benutzers zu erreichen.\n",
          "term-english": "Task model",
          "term-german": "Aufgabenmodell"
        },
        {
          "categories": [
            "Prinzipien"
          ],
          "description-english": "The extent to which an interactive system enables users to interact with it effectively, efficiently and with satisfaction, regardless of their level of vision, hearing, dexterity, cognition, physical mobility, etc.\n",
          "description-german":  "Das Ausmaß, in dem ein interaktives System den Benutzern ermöglicht, effektiv, effizient und zufriedenstellend zu interagieren, unbeachtet der Ausprägung ihres Sehens, ihres Hörens, ihrer Geschicklichkeit, ihres Denkens, ihrer physischen Beweglichkeit usw.\n",
          "term-english": "Accessibility",
          "term-german": "Barrierefreiheit"
        },
        {
          "categories": [
            "Rollen",
            "Anforderungen"
          ],
          "description-english": "A person who interacts with an interactive system, or who uses the output of the system.\n",
          "description-german": "Eine Person, die mit einem interaktiven System interagiert oder die Ergebnisse, die vom System erzeugt werden, benutzt.\n",
          "term-english": "User",
          "term-german": "Benutzer"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A usability evaluation where users are asked to report subjective data into a questionnaire based on their experience of using an interactive system.\n",
          "description-german": "Eine Usability-Evaluierung, bei der Benutzer, ausgehend von ihren Erfahrungen bei der Benutzung eines interaktiven Systems, subjektive Daten in einem Fragebogen angeben.\n",
          "term-english": "User survey",
          "term-german": "Benutzerbefragung"
        },
        {
          "categories": [
            "Planung",
            "Evaluierung"
          ],
          "description-english": "A user’s perceptions and responses that result from the use and/or anticipated use of an interactive system.\n",
          "description-german": "Die Wahrnehmungen und Reaktionen eines Benutzers, die sich aus der Benutzung und/oder der erwarteten Benutzung eines interaktiven Systems ergeben.\n",
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
          "description-english": "A collection of users with the same or similar personal characteristics and context of use related to the interactive system.",
          "description-german": "Eine Gruppe von Benutzern mit gleichen oder ähnlichen persönlichen Merkmalen und Nutzungskontexten bezogen auf das interaktive System.",
          "term-english": "User group",
          "term-german": "Benutzergruppe"
        },
        {
          "categories": [
            "Rollen",
            "Evaluierung"
          ],
          "description-english": "A generalized description of a user group.",
          "description-german": "Eine verallgemeinerte Beschreibung einer Benutzergruppe.",
          "term-english": "User group profile",
          "term-german": "Benutzergruppenprofil"
        },
        {
          "categories": [
            "Planung",
            "Gestaltung",
            "System"
          ],
          "description-english": "Information to help a user to interact with an interactive system.\n",
          "description-german": "Informationen, um einem Benutzer bei der Interaktion mit einem interaktiven System zu helfen.\n",
          "term-english": "User assistance",
          "term-german": "Benutzerunterstützung"
        },
        {
          "categories": [
            "System",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "All components of an interactive system (software or hardware) that provide information and controls for the user, to allow them to accomplish specific tasks with the interactive system.",
          "description-german": "Alle Bestandteile eines interaktiven Systems (Software oder Hardware), die dem Benutzer Informationen und Steuerelemente zur Verfügung stellen, die es dem Benutzer erlauben, bestimmte Aufgaben mit dem interaktiven System zu erledigen.",
          "term-english": "User interface",
          "term-german": "Benutzungsschnittstelle"
        },
        {
          "categories": [
            "Rollen",
            "System"
          ],
          "description-english": "A person who watches users in an observation, usability test session or focus group.\n",
          "description-german": "Eine Person, die Benutzer in einer Beobachtung, Usability-Testsitzung oder Fokusgruppe beobachtet. \n",
          "term-english": "Observer",
          "term-german": "Beobachter"
        },
        {
          "categories": [
            "Prinzipien",
            "Anforderungen"
          ],
          "description-english": "A method for gathering contextual information relating to user needs in which an observer watches users who carry out tasks that are related to the interactive system.\n",
          "description-german": "Eine Methode zum Sammeln von Kontextinformationen zu den Erfordernissen des Nutzungskontextes, bei der ein Beobachter Benutzer beobachtet, die mit dem interaktiven System in Beziehung stehende Aufgaben ausführen. \n",
          "term-english": "Observation",
          "term-german": "Beobachtung"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "The first activity in an interview or a usability test session where the usability test participant is informed about the purpose of the interview or usability test and what their role and contribution will be.",
          "description-german": "Die erste Aktivität in einem Interview oder in einer Usability-Testsitzung, in der ein Usability-Testteilnehmer über den Zweck des Interviews oder des Usability-Tests, über seine eigene Rolle sowie den erwarteten Beitrag informiert wird.",
          "term-english": "Briefing",
          "term-german": "Briefing"
        },
        {
          "categories": [
            "Gestaltung",
            "Test",
            "Evaluierung"
          ],
          "description-english": "A solution to a commonly occurring design problem within a given context of use, that describes the design problem, a general solution, and examples of how to apply it.\n",
          "description-german": "Eine Lösung eines häufig auftretenden Gestaltungsproblems in einem gegebenen Nutzungskontext. Das Design Pattern beschreibt ein Gestaltungsproblem, eine allgemeine Lösung und Beispiele, wie diese Lösung angewandt werden kann.\n",
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
          "description-english": "An interaction between a user and an interactive system that consists of user actions (input) and responses from the interactive system (output) in order to achieve a goal.",
          "description-german": "Die Interaktion zwischen einem Benutzer und einem interaktiven System in Form einer Folge von Handlungen des Benutzers (Eingaben) und Antworten des interaktiven Systems (Ausgaben), um ein Ziel zu erreichen.",
          "term-english": "Dialogue",
          "term-german": "Dialog"
        },
        {
          "categories": [
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "General goals for the design of useful and usable dialogues.\n",
          "description-german": "Allgemeine Ziele f\u00fcr das Dialogdesign.\n",
          "term-english": "Dialogue principles",
          "term-german": "Dialogprinzipien"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "The accuracy and completeness with which users achieve specified goals.",
          "description-german": "Die Genauigkeit und Vollständigkeit, mit der Benutzer festgelegte Ziele erreichen.",
          "term-english": "Effectiveness",
          "term-german": "Effektivität"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "The resources used in relation to the results achieved.",
          "description-german": "Die verwendeten Ressourcen in Bezug auf die erzielten Ergebnisse.",
          "term-english": "Efficiency",
          "term-german": "Effizienz"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A prerequisite identified as necessary for a user, or a user group, to achieve a goal, implied or stated within a specific context of use.\n",
          "description-german": "Eine Voraussetzung, die für einen Benutzer oder eine Benutzergruppe als notwendig erachtet wird, um ein implizites oder im Rahmen eines bestimmten Nutzungskontextes vorgegebenes Ziel zu erreichen.\n",
          "term-english": "User need",
          "term-german": "Erfordernis"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "Correspondence to predictable contextual needs of the user and to commonly accepted conventions.\n",
          "description-german": "Übereinstimmung mit den aus dem Nutzungskontext heraus vorhersehbaren Benutzerbelangen sowie allgemein anerkannten Konventionen.\n",
          "term-english": "Conformity with user expectations",
          "term-german": "Erwartungskonformität"
        },
        {
          "categories": [
            "Anforderungen",
            "Evaluierung"
          ],
          "description-english": "The property of a dialogue to achieve the intended result with either no, or minimal, corrective action by the user despite evident errors in input.\n",
          "description-german": "Die Eigenschaft eines Dialogs, das beabsichtigte Arbeitsergebnis trotz erkennbar fehlerhafter Eingaben entweder mit keinem oder mit minimalem Korrekturaufwand seitens des Benutzers zu erreichen.\n",
          "term-english": "Error tolerance",
          "term-german": "Fehlertoleranz"
        },
        {
          "categories": [
            "Prinzipien"
          ],
          "description-english": "The property of a Dialogue that allows users to modify interaction and presentation of information to suit their individual capabilities and needs.\n",
          "description-german": "Die Eigenschaft eines Dialogs die Benutzer ermöglicht die Interaktion mit dem System und die Darstellung von Informationen an ihre individuellen Fähigkeiten und Bedürfnisse anpassen zu können.\n",
          "term-english": "Suitability for individualization",
          "term-german": "Individualisierbarkeit"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Rollen"
          ],
          "description-english": "A focused discussion where a moderator leads a group of participants through a set of questions on a particular topic.\n",
          "description-german": "Eine gezielte Diskussion, bei der ein Moderator eine Gruppe von Teilnehmern durch eine Menge von Fragen zu einem bestimmten Thema f\u00fchrt. \n",
          "term-english": "Focus group",
          "term-german": "Fokusgruppe"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A set of questions that is used to collect data from users, often in a user survey.\n",
          "description-german": "Ein Satz von Fragen, der verwendet wird, um Daten von Benutzern zu sammeln, oft innerhalb einer Benutzerbefragung.\n",
          "term-english": "Questionnaire",
          "term-german": "Fragebogen"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "An interview question that requires an answer from a predetermined set of alternatives, for example yes and no.\n",
          "description-german": "Eine Interviewfrage, die eine Antwort aus einem vordefinierten Satz von Alternativen fordert, oft einfach „ja“ oder „nein“.\n",
          "term-english": "Closed question",
          "term-german": "Geschlossene Frage"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "A generally recognized rule of thumb that helps to achieve usability.\n",
          "description-german": "Eine allgemein anerkannte Daumenregel die hilft Usability zu erreichen.\n",
          "term-english": "Heuristic",
          "term-german": "Heuristik"
        },
        {
          "categories": [
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "A usability inspection in which one or more evaluators compare an interactive system to a list of heuristics and identify where the interactive system does not follow those heuristics.\n",
          "description-german": "Eine Usability-Inspektion, bei der ein oder mehrere Evaluatoren ein interaktives System mit einer Liste von Heuristiken vergleichen und feststellen, an welchen Stellen das interaktive System diesen Heuristiken nicht folgt.\n",
          "term-english": "Heuristic evaluation",
          "term-german": "Heuristische Evaluierung"
        },
        {
          "categories": [
            "Test",
            "System"
          ],
          "description-english": "A software prototype of the user interface to the interactive system that is being designed. A high-fidelity prototype more closely resembles the finished interactive system.\n",
          "description-german": "Ein Software-Prototyp der Benutzungsschnittstelle des zu entwickelnden interaktiven Systems. Ein High-Fidelity-Prototyp ähnelt dem fertigen interaktiven System.\n",
          "term-english": "High-fidelity prototype",
          "term-german": "High-fidelity-Prototyp"
        },
        {
          "categories": [
            "Anforderungen",
            "Prinzipien"
          ],
          "description-english": "A family of standards covering human-centred design.\n",
          "description-german": "Eine Reihe von Standards, die die menschzentrierte Gestaltung interaktiver Systeme betrifft.\n",
          "term-english": "ISO 9241",
          "term-german": "ISO 9241"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "A user who uses the output of the interactive system, but who does not interact directly with the interactive system.",
          "description-german": "Ein Benutzer, der die Ergebnisse des interaktiven Systems verwendet, aber nicht direkt mit dem interaktiven System interagiert.",
          "term-english": "Indirect user",
          "term-german": "Indirekter Benutzer"
        },
        {
          "categories": [
            "System",
            "Anforderungen"
          ],
          "description-english": "A combination of hardware, software and services that users interact with in order to achieve specific goals.\n",
          "description-german": "Eine Kombination aus Hardware, Software und Dienstleistungen, mit der Benutzer interagieren, um bestimmte Ziele zu erreichen.\n",
          "term-english": "Interactive system",
          "term-german": "Interaktives System"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "An individual or organisation with an active interest in an interactive system.\n",
          "description-german": "Eine Person oder Organisation mit einem aktiven Interesse an einem interaktiven System.\n",
          "term-english": "Stakeholder",
          "term-german": "Interessenvertreter"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A data-gathering method that questions a few carefully selected individuals in depth to arrive at a fuller understanding of the context of use for an existing or planned interactive system. Through inquiry and interpretation, it reveals commonalities and differences across the user base.\n",
          "description-german": "Eine Methode zur Datensammlung, die einige sorgfältig ausgewählte Personen eingehend befragt, um zu einem besseren Verständnis des Nutzungskontextes für ein vorhandenes oder geplantes interaktives System zu gelangen. Durch die Befragung und Interpretation werden Gemeinsamkeiten und Unterschiede innerhalb der Benutzer eines interaktiven Systems aufgedeckt. \n",
          "term-english": "Interview",
          "term-german": "Interview"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "A written list of suitable questions and cues used by the interviewer during an interview to make sure that all relevant topics are covered.",
          "description-german": "Eine schriftliche Liste geeigneter Fragen und Hinweise, die der Interviewer während eines Interviews verwendet, um sicherzustellen, dass alle relevanten Themen abgedeckt werden.",
          "term-english": "Interview checklist",
          "term-german": "Interviewcheckliste"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "A set of principles, methods and approaches for improving productivity by reducing documentation and unnecessary formalism, and focusing on iterative development in short cycles, collaboration and communication, incremental improvement and adaptation to changes.",
          "description-german": "Eine Reihe von Prinzipien, Methoden und Ansätzen zur Produktivitätssteigerung durch Reduzierung von Dokumentation und unnötigem Formalismus mit Fokus auf iterativer Entwicklung in kurzen Zyklen, Zusammenarbeit und Kommunikation, inkrementeller Verbesserung und Anpassung an Veränderungen.",
          "term-english": "Agile development",
          "term-german": "Agile Entwicklung"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "An approach to human-centred design that integrates principles and methods for usability and user experience into agile development, thereby achieving economic advantages.",
          "description-german": "Ein Ansatz der menschzentrierten Gestaltung, der Prinzipien und Methoden für Usability und User Experience in die agile Entwicklung integriert und damit wirtschaftliche Vorteile erzielt.",
          "term-english": "Lean UX",
          "term-german": "Lean UX"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Implementierung"
          ],
          "description-english": "The level of understanding and implementation of a systematic human-centred design process within an organisation.",
          "description-german": "Das Verständnis und die Umsetzung eines systematischen Prozesses menschzentrierter Gestaltung in einer Organisation.",
          "term-english": "Usability maturity",
          "term-german": "Usability-Reife"
        },
        {
          "categories": [
            "Planung",
            "Evaluierung"
          ],
          "description-english": "Repetitive<br/>.An iterative process repeats steps in the human-centred design process until a usability evaluation of the user interface shows that the user requirements have been adequately met.",
          "description-german": "Wiederholend<br/>.Ein iteratives Vorgehen wiederholt Schritte des Prozesses der menschzentrierten Gestaltung solange, bis eine Usability-Evaluierung der Benutzungsschnittstelle zeigt, dass die Nutzungsanforderungen ausreichend erfüllt sind.",
          "term-english": "Iterative",
          "term-german": "Iterativ"
        },
        {
          "categories": [
            "Prinzipien",
            "Evaluierung"
          ],
          "description-english": "The same information is presented in the same way throughout the interactive system, in accordance with the user’s expectation.\n",
          "description-german": "Dieselbe Information wird im interaktiven System durchgängig in gleicher Weise entsprechend der Erwartung des Benutzers präsentiert.\n",
          "term-english": "Consistency",
          "term-german": "Konsistenz"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "An interview that takes place at the location where the user’s interaction with the interactive system usually takes place and focuses on the context of use of the user.\n",
          "description-german": "Ein Interview, das dort stattfindet, wo die Interaktion des Benutzers mit dem interaktiven System üblicherweise erfolgt und das auf den Nutzungskontext des Benutzers abzielt.\n",
          "term-english": "Contextual interview",
          "term-german": "Kontextuelles Interview"
        },
        {
          "categories": [
            "Prinzipien",
            "Gestaltung"
          ],
          "description-english": "A dialogue is suitable for learning when it supports and guides the user in learning to use the interactive system.\n",
          "description-german": "Die Eigenschaft eines Dialogs die Benutzer beim Erlernen der Nutzung des interaktiven Systems zu unterstützen und anzuleiten.\n",
          "term-english": "Suitability for learning",
          "term-german": "Lernförderlichkeit"
        },
        {
          "categories": [
            "Test",
            "System"
          ],
          "description-english": "A low-cost, simple illustration of a design or concept used to gather feedback from users and other stakeholders during the early stages of design. \n",
          "description-german": "Eine preiswerte, einfache Veranschaulichung eines Designs oder eines Konzepts, das benutzt wird, um Feedback von Benutzern und anderen Interessenvertretern während früher Phasen der Entwicklung einzuholen.\n",
          "term-english": "Low-fidelity prototype",
          "term-german": "Low-fidelity-Prototyp"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A requirement for an interactive system based on marketing policy aimed at maximizing business opportunities, purchase and use.\n",
          "description-german": "Eine Anforderung für ein interaktives System basierend auf einer Marketingpolitik, die darauf abzielt, Geschäftschancen, Absatz und Nutzen zu maximieren\n",
          "term-english": "Market requirement",
          "term-german": "Marktanforderung"
        },
        {
          "categories": [
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "A principle for a successful contextual interview: The interviewer treats the user as the master while the interviewer is the apprentice. The goal of the master-apprentice model is to understand users’ goals and tasks in detail by learning them as an apprentice would.",
          "description-german": "Ein Prinzip für ein erfolgreiches kontextuelles Interview: Der Interviewer behandelt den Benutzer als den Meister, während der Interviewer selbst der Schüler ist. Ziel des Meister- Schüler-Modells ist es, die Ziele und Aufgaben des Benutzers im Detail zu verstehen, indem man als Schüler vom Benutzer als Meister lernt.",
          "term-english": "Master-apprentice model",
          "term-german": "Meister-Schüler-Modell"
        },
        {
          "categories": [
            "Planung",
            "Gestaltung"
          ],
          "description-english": "An approach to design that aims to make interactive systems more usable by focusing on the use of the interactive system and applying human factors, ergonomics and usability knowledge and methods.",
          "description-german": "nteraktiven Systemen, die darauf abzielt, diese gebrauchtauglicher zu machen indem sie sich auf die Verwendung des interaktiven System konzentriert und Kenntnisse und Techniken aus den Bereichen der Arbeitswissenschaft, Ergonomie und der Gebrauchstauglichkeit anwendet.",
          "term-english": "Human-centred design",
          "term-german": "Menschzentrierte Gestaltung"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "The perception people have of themselves, others, the environment, and the things with which they interact.\n",
          "description-german": "Die Vorstellung, die Menschen von sich, anderen, der Umgebung und den Dingen haben, mit denen sie interagieren. \n",
          "term-english": "Mental model",
          "term-german": "Mentales Modell"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "The activity carried out by a moderator in a usability test or focus group.",
          "description-german": "Die durch einen Moderator w\u00e4hrend eines Usability-Tests oder einer Fokusgruppe ausge\u00fcbte T\u00e4tigkeit.",
          "term-english": "Moderation",
          "term-german": "Moderation"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "A neutral person who conducts a usability test session or a focus group session.\n",
          "description-german": "Eine neutrale Person die eine Usability-Testsitzung oder eine Fokusgruppe leitet.\n",
          "term-english": "Moderator",
          "term-german": "Moderator"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "The logical organization of the units of displayed information that comprise the user interface.\n",
          "description-german": "Die logische Organisation der angezeigten Informationseinheiten der Benutzungsschnittstelle.\n",
          "term-english": "Navigation structure",
          "term-german": "Navigationsstruktur"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A question in an interview that has no built-in assumptions, and no frame that excludes anything or directs the reply in a certain direction.\n",
          "description-german": "Eine Frage in einem Interview, die keine impliziten Annahmen beinhaltet und auch keinen Ansatz bietet, einen Aspekt auszuschliessen oder die Antwort in eine bestimmte Richtung zu lenken.\n",
          "term-english": "Neutral question",
          "term-german": "Neutrale Frage"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A requirement for use that provides the basis for design and evaluation of an interactive system to meet identified user needs.\n",
          "description-german": "Eine Anforderung an die Nutzung, die die Grundlage für die Gestaltung und die Usability-Evaluierung eines interaktiven Systems bildet, um identifizierte Erfordernisse zu erfüllen.\n",
          "term-english": "User requirement",
          "term-german": "Nutzungsanforderung"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "A combination of users, goals, tasks, resources, and environments.\n",
          "description-german": "Eine Kombination aus Benutzern, Zielen, Aufgaben, Ressourcen und Umgebungen\n",
          "term-english": "Context of use",
          "term-german": "Nutzungskontext"
        },
        {
          "categories": [
            "Anforderungen",
            "Planung"
          ],
          "description-english": "A description of the users, goals, tasks, resources, and environments derived from observations, contextual interview and focus groups.\n",
          "description-german": "Eine Beschreibung der Benutzer, Ziele, Aufgaben, Ressourcen und Umgebungen, die aus Beobachtungen, kontextuellen Interviews und Fokusgruppen hervorgeht.\n",
          "term-english": "Context of use description",
          "term-german": "Nutzungs-kontext-beschreibung"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A question in an interview that does not give any indication of the expected format or content of the answer.\n",
          "description-german": "Eine Frage in einem Interview, die keinen Hinweis auf das erwartete Format oder den erwarteten Inhalt der Antwort gibt.\n",
          "term-english": "Open question",
          "term-german": "Offene Frage"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung",
            "Planung"
          ],
          "description-english": "An organizational rule that users have to follow when conducting their tasks.\n",
          "description-german": "Eine organisatorische Regel die Benutzer befolgen müssen während sie ihre Aufgaben lösen.\n",
          "term-english": "Organisational requirement",
          "term-german": "Organisatorische Anforderung"
        },
        {
          "categories": [
            "Rollen",
            "Planung"
          ],
          "description-english": "A description of a fictitious but realistic user and what they intend to do when using an interactive system \n",
          "description-german": "Eine Beschreibung eines konstruierten, aber realistischen Benutzers und was dieser bei der Benutzung eines interaktiven Systems beabsichtigt. \n",
          "term-english": "Persona",
          "term-german": "Persona"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "An activity in a Usability test session where the usability test participant answers questions about thier user experience and general impression of the Interactive system.  \n",
          "description-german": "Eine Aktivität in einer Usability-Testsitzung, bei der der Usability-Testteilnehmer Fragen bezüglich seines allgemeinen Eindrucks hinsichtlich der User Experience des interaktiven Systems beantwortet. \n",
          "term-english": "Post-session interview",
          "term-german": "Post-Session Interview"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "An activity in a usability test session where the usability test participant answers questions about their background and previous experience with the interactive system and related interactive systems.\n",
          "description-german": "Eine Aktivität in einer Usability-Testsitzung, bei der der Usability-Testteilnehmer Fragen bezüglich seines Hintergrundes und seiner Vorerfahrung mit dem interaktiven System oder ähnlichen interaktiven Systemen beantwortet.\n",
          "term-english": "Pre-session interview",
          "term-german": "Pre-Session Interview"
        },
        {
          "categories": [
            "Rollen"
          ],
          "description-english": "A user who uses the interactive system for its intended purpose.",
          "description-german": "Ein Benutzer, der das interaktive System für seinen beabsichtigten Zweck verwendet.",
          "term-english": "Primary user",
          "term-german": "Primärer Benutzerr"
        },
        {
          "categories": [
            "Rollen",
            "Test"
          ],
          "description-english": "A user experience professional who makes notes of usability findings during a usability test session, focus group or interview.\n",
          "description-german": "Ein User Experience Professional, der während einer Usability-Testsitzung, einer Fokusgruppe oder einem Interview Notizen über Usability-Befunde macht.\n",
          "term-english": "Note-taker",
          "term-german": "Protokollant"
        },
        {
          "categories": [
            "Test",
            "System"
          ],
          "description-english": "A representation of all or part of an interactive system that, although limited in some way, can be used for analysis, design and usability evaluation.\n",
          "description-german": "Eine Repräsentation von Teilen oder des gesamten interaktiven Systems, die in einem bestimmten Maße für Analyse, Design und Usability-Evaluierung benutzt werden kann.\n",
          "term-english": "Prototype",
          "term-german": "Prototyp"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A statement of what users must be able to locate, recognise, understand, select or input as part of conducting a task with the interactive system to meet identified user needs in a specified context of use. \n",
          "description-german": "Eine Aussage darüber, was Benutzer im Rahmen der Durchführung einer Aufgabe mit dem interaktiven System feststellen, erkennen, verstehen, auswählen oder eingeben müssen, um den identifizierten Erfordernissen des Nutzungskontextes zu genügen.\n",
          "term-english": "Qualitative user requirement",
          "term-german": "Qualitative Nutzungsanforderung"
        },
        {
          "categories": [
            "Anforderungen",
            "Gestaltung"
          ],
          "description-english": "A required level of usability to meet identified user needs expressed in terms of measures of effectiveness, efficiency, satisfaction, accessibility, user experience and avoidance of harm from use in a specified context of use. \n",
          "description-german": "Ein erforderliches Maß an Usability, um die identifizierten Erfordernisse in einem bestimmten Nutzungskontext zu erfüllen, ausgedrückt in Maßen der Effektivität, der Effizienz, der Zufriedenstellung, der Barrierefreiheit, der User Experience und der Vermeidung von Schäden durch die Benutzung.\n",
          "term-english": "Quantitative user requirement",
          "term-german": "Quantitative Nutzungsanforderung"
        },
        {
          "categories": [
            "Planung",
            "Test"
          ],
          "description-english": "A process for selecting candidates that have the appropriate characteristics to participate in a human-centred activity such as a focus group, contextual interview, or usability test.\n",
          "description-german": "Ein Verfahren zur Auswahl von Kandidaten, die die erforderlichen Merkmale haben, an einer menschzentrierten Aktivität, wie z.B. einer Fokusgruppe, einem kontextuellen Interview oder einem Usability-Test, teilzunehmen. \n",
          "term-english": "Recruiting",
          "term-german": "Rekrutierung"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A usability test where the usability test participant and the Moderator are in different physical locations.\n",
          "description-german": "Ein Usability-Test bei dem sich der Usability-Testteilnehmer und der Moderator an unterschiedlichen Orten befinden.\n",
          "term-english": "Remote usability test",
          "term-german": "Remote Usability-Test"
        },
        {
          "categories": [
            "System"
          ],
          "description-english": "All means required to use an Interactive system.\n",
          "description-german": "Alle Mittel die zur Nutzung eines interaktiven Systems notwendig sind.\n",
          "term-english": "Resource",
          "term-german": "Ressourcen"
        },
        {
          "categories": [
            "Rollen",
            "Planung"
          ],
          "description-english": "A user who carries out support tasks with the interactive system, for example to maintain it or to train primary users.\n",
          "description-german": "Ein Benutzer, der unterstützende Aufgaben mit dem interaktiven System ausführt, beispielsweise um es zu pflegen oder um primäre Benutzer zu schulen.\n",
          "term-english": "Secondary user",
          "term-german": "Sekundärer Benutzer"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "The property of a Dialogue to, at any time, make it obvious to the users which dialogue they are in, where they are within the dialogue, which actions can be taken, and how they can be performed.\n",
          "description-german": "Die Eigenschaft eines Dialogs zu jeder Zeit dem Benutzer offensichtlich zu machen, in welchem Dialog, an welcher Stelle im Dialog er sich befindet, welche Handlungen unternommen werden können und wie diese ausgeführt werden können.\n",
          "term-english": "Self-descriptiveness",
          "term-german": "Selbstbeschreibungsfähigkeit"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "The ability of a User to initiate and control the direction and pace of the interaction until the point at which the Goal has been met.\n",
          "description-german": "Der Benutzer ist in der Lage einen Dialogablauf zu starten sowie seine Richtung und Geschwindigkeit zu beeinflussen, bis das Ziel erreicht ist.\n",
          "term-english": "Controllability",
          "term-german": "Steuerbarkeit"
        },
        {
          "categories": [
            "Planung"
          ],
          "description-english": "A sequence of visual frames illustrating the interplay between a User and an envisioned interactive system. \n",
          "description-german": "Eine Folge visueller Bildschirminhalte, die das Zusammenspiel zwischen einem Benutzer und einem vorgestellten interaktiven System darstellt. \n",
          "term-english": "Storyboard",
          "term-german": "Storyboard"
        },
        {
          "categories": [
            "Gestaltung",
            "Prinzipien"
          ],
          "description-english": "A collection of user interface guidelines used to ensure consistency in the appearance and behaviour of user interfaces across interactive systems produced by the same organisation\n",
          "description-german": "Eine Sammlung von Gestaltungsregeln, die verwendet wird, um Konsistenz in der Erscheinung und im Verhalten von Benutzungsschnittstellen von interaktiven Systemen zu gewährleisten, die von derselben Organisation erstellt werden.\n",
          "term-english": "Style guide",
          "term-german": "Style Guide"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A question in an Interview that signals a preference for certain possibilities, or attempts to direct the reply in a certain direction. \n",
          "description-german": "Eine Frage in einem Interview, die eine Präferenz für bestimmte Antwortmöglichkeiten vorgibt oder versucht, die Antwort in eine bestimmte Richtung zu lenken.\n",
          "term-english": "Leading question",
          "term-german": "Suggestionsfrage"
        },
        {
          "categories": [
            "Planung",
            "System"
          ],
          "description-english": "The physical, social and technical conditions in which a User interacts with an Interactive system.\n",
          "description-german": "Die physischen, sozialen und technischen Bedingungen, unter denen ein Benutzer mit einem interaktiven System interagiert.\n",
          "term-english": "Environment",
          "term-german": "Umgebung"
        },
        {
          "categories": [
            "Test",
            "Anforderungen",
            "Prinzipien"
          ],
          "description-english": "Extent to which an Interactive system can be used by specified users to achieve specified goals with Effectiveness, Efficiency and Satisfaction in a specified Context of use.\n",
          "description-german": "Das Ausmaß, in dem ein interaktives System von bestimmten Benutzern benutzt werden kann, um in einem bestimmten Nutzungskontext bestimmte Ziele effektiv, effizient und zufriedenstellend zu erreichen.\n",
          "term-english": "Usability",
          "term-german": "Usability"
        },
        {
          "categories": [
            "Test",
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "A process through which information about the Usability of an Interactive system is gathered in order to improve the interactive system (known as formative usability evaluation) or to assess the merit or worth of an Interactive system (known as aummative usability evaluation).\n",
          "description-german": "Ein Prozess der Informationen über die Usability eines interaktiven Systems sammelt um das interaktive System zu verbessern (Formative Usability-Evaluierung) oder um das interaktive System zu bewerten (Summative Usability-Evaluierung).\n",
          "term-english": "Usability evaluation",
          "term-german": "Usability-Evaluierung"
        },
        {
          "categories": [
            "System",
            "Planung"
          ],
          "description-english": "Two or more rooms that are specially equipped for Usability tests or focus groups. \n",
          "description-german": "Zwei oder mehrere Räume, die speziell für die Durchführung von Usabilty-Tests oder Fokusgruppen ausgestattet sind.  \n",
          "term-english": "Usability lab",
          "term-german": "Usability-Labor"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "A difficulty in using the user interface that affects the ability of the user to achieve their goals effectively, or efficiently, or with satisfaction.\n",
          "description-german": "Ein Problem in der Benutzung der Benutzungsschnittstelle, das sich auf die Fähigkeit des Benutzers auswirkt, seine Ziele effektiv oder effizient oder zufriedenstellend zu erreichen.\n",
          "term-english": "Usability problem",
          "term-german": "Usability-Problem"
        },
        {
          "categories": [
            "Evaluierung"
          ],
          "description-english": "A measure given to a usability finding from a usability test to indicate the impact and criticality on the user experience and the consequences.\n",
          "description-german": "Ein Maß für einen Usability-Befund aus einem Usability-Test, um Hinweise hinsichtlich der Auswirkungen des Befundes auf die User Experience, der Kritikalität sowie der Konsequenzen zu geben.\n",
          "term-english": "Rating",
          "term-german": "Bewertung"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A usability evaluation that involves representative users performing specific tasks with the interactive system to enable identification and analysis of usability problems, or the measurement of effectiveness, efficiency, and user satisfaction.\n",
          "description-german": "Eine Usability-Evaluierung, bei der repräsentative Benutzer bestimmte Aufgaben mit dem interaktiven System ausführen, um Usability-Probleme zu erfassen oder die Messung von Effektivität, Effizienz und Zufriedenstellung zu ermöglichen.\n",
          "term-english": "Usability test",
          "term-german": "Usability-Test"
        },
        {
          "categories": [
            "Test"
          ],
          "description-english": "A description of a task that a moderator asks a usability test participant to carry out during a usability test.",
          "description-german": "Eine Beschreibung einer Aufgabe, die ein Moderator einem Usability-Testteilnehmer während eines Usability-Tests stellt. ",
          "term-english": "Usability test task",
          "term-german": "Usability-Testaufgabe"
        },
        {
          "categories": [
            "Evaluierung",
            "Test"
          ],
          "description-english": "A document that describes the results of a usability test. \n",
          "description-german": "Ein Dokument, das die Ergebnisse eines Usability-Tests beschreibt. \n",
          "term-english": "Usability test report",
          "term-german": "Usability-Testbericht"
        },
        {
          "categories": [
            "Planung",
            "Evaluierung"
          ],
          "description-english": "A brief description of the purpose and extent of a usability test. \n",
          "description-german": "Eine kurze Beschreibung des Zwecks und Umfangs eines Usability-Tests. \n",
          "term-english": "Usability test plan",
          "term-german": "Usability-Testplan"
        },
        {
          "categories": [
            "Gestaltung",
            "Test"
          ],
          "description-english": "A part of a Usability test where one usability test participant carries out representative Usability test tasks using the Interactive system or a Prototype of the interactive system.\n",
          "description-german": "Der Teil eines Usability-Tests, bei dem ein bestimmter Usability-Testteilnehmer repräsentative Usability-Testaufgaben unter Benutzung des interaktiven Systems oder des Prototypen eines interaktiven Systems löst.\n",
          "term-english": "Usability test session",
          "term-german": "Usability-Testsitzung"
        },
        {
          "categories": [
            "Test",
            "Evaluierung"
          ],
          "description-english": "A checklist used by a moderator in a usability test to keep track of briefing and pre-session interview questions, usability test tasks, and post-session interview questions.",
          "description-german": "Eine von einem Moderator in einem Usability-Test verwendete Checkliste, um den Überblick über die Fragen des Briefings und des Pre-Session Interviews, die Usability-Testaufgaben und die Fragen des Post-Session Interviews zu behalten.",
          "term-english": "Usability test script",
          "term-german": "Usability-Testskript"
        },
        {
          "categories": [
            "Rollen",
            "Test"
          ],
          "description-english": "A representative user who carries out usability test tasks in a usability test session.",
          "description-german": "in repräsentativer Benutzer, der Usability-Testaufgaben in einer Usability-Testsitzung ausführt.",
          "term-english": "Usability test participant",
          "term-german": "Usability-Testteilnehmer"
        },
 
        {
          "categories": [
            "Planung"
          ],
          "description-english": "A screen or page in a low-fidelity prototype for a graphical user interface comprised of lines, rectangular boxes and text that represent the intended interaction design.\n",
          "description-german": "Ein Screen oder eine Seite in einem Low-Fidelity-Prototyp für eine grafische Benutzungsschnittstelle, bestehend aus Linien, rechteckigen Kästen und Text, der das zukünftige Interaktionsdesign repräsentiert.\n",
          "term-english": "Wireframe",
          "term-german": "Wireframe"
        },
        {
          "categories": [
            "Evaluierung",
            "Prinzipien"
          ],
          "description-english": "The extent to which the user’s physical, cognitive and emotional responses that result from the use of an interactive system meet the user’s needs and expectations.\n",
          "description-german": "Das Ausmaß, in dem die physischen, kognitiven und emotionalen Reaktionen des Benutzers, die sich aus der Benutzung eines interaktiven Systems ergeben, die Bedürfnisse und Erwartungen des Benutzers erfüllen.\n",
          "term-english": "Satisfaction",
          "term-german": "Zufriedenstellung"
        }
      ]
      
     
  }



}
//Here I generate the first question then the generating in componentdid mount
/* removing this will raise an combile error */
componentWillMount(){
  this.generateQuestion();
}

//here I generate the timer and always check to toggel the colors of the button according to the choosen solution
/* this could be used in different ways */
/* It seems that there are useless coniditions here. But take care, all of them are important and removing any of them would raise logical erros */
componentDidMount(){
  this.myInterval=setInterval(()=>{
    if(this.state.toggle===true){
      this.toggle();
    }
    if(this.state.newQuestion&&((this.state.choosenAnswer===this.state.correctAnswerEng)||(this.state.choosenAnswer===this.state.correctAnswerGer))){
        this.generateQuestion();
    }
    else{
      if(this.state.newQuestion){
        this.setState({
          newQuestion:false,
        });
        /*before opening the dialog, I check if this player should be among the top 10 or not if not he/she will be directed
          to the hall of fame otherwise the dialog will open and the player will give the name and will take the place of
          the last player in the list
        */
        axios.get('http://localhost:4000/records')
        .then(res=>{
          if(res.data.length<10){
            this.setState({openDialog:true})
          }
          else{
            res.data.sort(function(a, b){
                if(a["grade"]===b["grade"]){
                    return a["seconds"]-b["seconds"]
                }
                return b["grade"]-a["grade"]
            });           
            
            if(res.data[res.data.length-1].grade<this.state.grade||(res.data[res.data.length-1].grade===this.state.grade&&res.data[res.data.length-1].seconds>this.state.seconds)){
              axios.post('http://localhost:4000/records/delete',{id:res.data[res.data.length-1]._id})
              .then(res2 =>{
                console.log(res2);
              })
              this.setState({openDialog:true});
            }
            else{
              alert("Sorry! you are not from the top ten")
              this.props.history.push('/hallOfFame');
            }
          }

        })
       .catch(function(err){
            console.log(err)
        });
     }
    }
    if(!this.state.openDialog){
    this.setState(prevState =>(({
      seconds:prevState.seconds+1
    })) 
    )
  }
  },1000) ;
}

// This method is used to change the seconed into HH:MM:SS format to be represented in the hall of fame page
toHHMMSS(time) {
  var sec_num = parseInt(time, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds;
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
// This method for generating new question if there are defintion still in the list 
generateQuestion(){
  if(this.state.questionsItems.length===0){
    this.setState({openDialog:true});
  }
  else{
  //here I pick random element from the array poping it and returning it
  var rightAnswer=this.state.questionsItems.splice(Math.floor(Math.random()*this.state.questionsItems.length), 1);
  //here i shuffle the array of terms to get 3 different choices besside the right choice
  var shuffle = require('shuffle-array'),
    collection = this.state.choicesItems;
  shuffle(collection);
  var rightCategory = rightAnswer[0]["categories"][Math.floor(Math.random()*rightAnswer[0]["categories"].length)];
  var englishChoices=[];
  var germanChoices=[];
  //here I select choices from the same category
  for(var i=0;i<collection.length;i++){
    if(collection[i]["categories"].includes(rightCategory)&&collection[i]["term-english"]!==rightAnswer[0]["term-english"]){
      englishChoices.push(collection[i]["term-english"]);
      germanChoices.push(collection[i]["term-german"]);
    }
    if(englishChoices.length===3)
      break;
  }
  englishChoices.push(rightAnswer[0]["term-english"]);
  germanChoices.push(rightAnswer[0]["term-german"]);
  
  var shuffle2 = require('shuffle-array'),
    englishChoicesCopy=englishChoices;
  shuffle2(englishChoicesCopy);
  var shuffle3 = require('shuffle-array'),
  germanChoicesCopy=germanChoices;
shuffle3(germanChoicesCopy);
  this.setState({
    englishChoices:englishChoicesCopy,
    germanChoices:germanChoicesCopy,
    currentQuestion:rightAnswer[0],
    correctAnswerEng:rightAnswer[0]["term-english"],
    correctAnswerGer:rightAnswer[0]["term-german"],
    newQuestion:false
    
  });

  //console.log(rightAnswer[0]["term-english"]);  
  }
}

// This method will be used to pause the code for milli seconds to make the user able to see the changes
 sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
/* this method checks the user's answer and accordingly updates the colors of the buttons, then
 calling toggel to bring the buttons back to there initial state*/
checkAnswer(item){
  if(this.state.English)
  document.getElementById(this.state.correctAnswerEng).className = "btn btn-success";
  else
  document.getElementById(this.state.correctAnswerGer).className = "btn btn-success";
  if(item===this.state.correctAnswerEng||item===this.state.correctAnswerGer){
    this.setState(prevState=>({
      grade:prevState.grade+1
    })
    );
  }
  else{
    document.getElementById(item).className = "btn btn-danger";
  }
  this.setState({
    choosenAnswer:item,
    toggle:true,
  });  
}
//This method just bring the buttons back to their initaial color after checking the result
toggle(){
  if(this.state.English&&this.state.choosenAnswer!==this.state.correctAnswerEng){
    this.sleep(500);
  }
  if(!this.state.English&&this.state.choosenAnswer!==this.state.correctAnswerGer){
    this.sleep(500);
  }
  if(this.state.English)
  document.getElementById(this.state.correctAnswerEng).className = "btn btn-primary";
  else
  document.getElementById(this.state.correctAnswerGer).className = "btn btn-primary";
  document.getElementById(this.state.choosenAnswer).className = "btn btn-primary";
  this.setState({
    toggle:false,
    newQuestion:true
  });

}
changeToEnglish(){
  localStorage.setItem("english", JSON.stringify(true));
  this.setState({
    English:true
  });
}
changeToGerman(){
  localStorage.setItem("english",JSON.stringify(false));
  this.setState({
    English:false
  });
}

/* 
  This method will be called after the player insert his/her name in the dialog. Two requests will be sent to the server,
  one to insert the new record and one to delete the list one in the list
*/
handleCloseDialog = () => {
  if(document.getElementById("in").value===""){
    this.setState({emptyName:true});
  }
  else{
    let record ={
      "name":document.getElementById("in").value,
      "grade": this.state.grade,
      "time":this.toHHMMSS(this.state.seconds),
      "date":new Date(),
      "seconds":this.state.seconds
    };
    axios.post('http://localhost:4000/records/add',record)
    .then(res =>{
      console.log(res.data);
      this.setState({ openDialog: false});
      this.props.history.push('/hallOfFame');
    });
    }
};
render(){
    return(
      <div>
         <ButtonAppBar
           glossary={()=>this.glossary()}
           game={()=>this.game()}
          hallOfFame={()=>this.hallOfFame()}
          English={this.state.English}
          changeToEnglish={()=>this.changeToEnglish()}
          changeToGerman={()=>this.changeToGerman()}
        />
        <div className="container">
          <div className="row">
            <div className={classNames("col-sm-10","col-xs-10","col-md-10","col-lg-10")} >
              <p className="question" style={{fontFamily:"courier"}}>{this.state.English?this.state.currentQuestion["description-english"]:this.state.currentQuestion["description-german"]}</p>
              
              {this.state.English? this.state.englishChoices.map((item,index)=> (                  
                <button onClick={() => this.checkAnswer(item)} key={index} id={item} style={{marginTop:"3%",marginLeft:"8%"}}  type="button" className="btn btn-primary">{item}</button>
                ))
                :
                this.state.germanChoices.map((item)=> (                  
                  <button onClick={() => this.checkAnswer(item)}  id={item} style={{marginTop:"3%",marginLeft:"8%"}}  type="button" className="btn btn-primary">{item}</button>
                  ))
              }         
            </div>
            <div className={classNames("col-sm-2","col-xs-2","col-md-2","col-lg-2")} >
              <h6 style={{marginTop:"9%",marginLeft:"10%"}} >{this.state.grade} | 105   &nbsp; &nbsp; {this.toHHMMSS(this.state.seconds)}</h6>
            </div>
          </div>
        </div>
        <Dialog
          open={this.state.openDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter you name</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              error={this.state.emptyName}
              placeholder={this.state.emptyName? "Invalid name":null}
              margin="dense"
              id="in"
              type="text"
              required={true}
              fullWidth
            />
          </DialogContent>
            <DialogActions>
                <Button onClick={this.handleCloseDialog} color="primary">
                Confirm
                </Button>
            </DialogActions>
        </Dialog>  
      </div>
    )
}

}

 export default Game;
