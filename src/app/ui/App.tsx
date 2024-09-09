import { AppContainer } from './styled';
import { Banner } from '../../widgets/banner';
import { AuthWidget } from '../../widgets/auth-widget';

export function App() {
  return (
    <AppContainer disableGutters>
      <AuthWidget />
      <Banner />
    </AppContainer>
  );
}
