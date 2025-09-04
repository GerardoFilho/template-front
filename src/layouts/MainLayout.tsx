import * as S from "./MainLayout.style";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="/loja">Loja Fake</S.NavLink>
        <S.NavLink to="/todo">To-do</S.NavLink>
      </S.Header>
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

export default MainLayout;
