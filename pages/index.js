import db from '../db.json';
import QuizHead from '../src/components/QuizHead';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizButton from '../src/components/QuizButton';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizHead ogImageUrl={db.bg} ogTitle={db.title} />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <QuizButton titleLink="Jogar" urlLink="quiz" />
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>
            <p>Em breve</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ewerton-augusto" />
    </QuizBackground>
  );
}