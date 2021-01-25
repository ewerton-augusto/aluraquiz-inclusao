import styled from 'styled-components';

const Button = styled.a`
    color: #FFF;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    padding: 0.75rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.secondary};
    &:hover{
        opacity: 0.8;
    }
`;

function QuizButton({ titleLink, urlLink }) {
    return (
        <Button href={urlLink}>
            {titleLink}
        </Button>
    );
}

export default QuizButton;