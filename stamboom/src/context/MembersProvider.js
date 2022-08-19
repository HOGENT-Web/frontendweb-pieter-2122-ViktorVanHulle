// 
// NOT USED
// 
import { useSession } from "./AuthProvider";

export const MembersProvider = ({ children }) => {
  const { ready: authReady } = useSession();

  useEffect(() => {
    if (authReady && !initialLoad) {
      refreshTransactions();
    }
  }, [authReady, initialLoad, refreshTransactions]);
};
