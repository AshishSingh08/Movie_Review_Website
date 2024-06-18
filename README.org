
#+TITLE: Movies Review
#+AUTHOR: Ashish Singh
#+HTML_HEAD: <link rel="stylesheet" type="text/css" href="Readme-resources/style.css" />

* Movie Review
#+ATTR_HTML: :width 1000px
[[file:Readme-resources/main-page.png]]
The Movie Review website
* Directory structure
#+ATTR_HTML: :width 300px
[[file:Readme-resources/Src-Structure.png]]

Components : The Components folder contains all the small individual Components which come together to form the website.
Common : The Common folder contains all the components which were used more than once on several pages.
Hooks : The Hooks folder contains function which perform certains task and then cause a re render of the website to occur.

* React
The main point of react comes down to two point
** React has small components which can be defined in seperate files and then used as tag in the main page
The example below is a small footer containing two link
#+ATTR_HTML: :width 1000px
[[file:Readme-resources/Common/footer-presentation.png]]

#+begin_src html
const Footer = () => (
  <Wrapper>
    <Content>
      <Link to='/AboutUs' style={{ textDecoration: 'none' }}>
        <p>About Us</p>
      </Link>
      <Link to='/ContactUs' style={{ textDecoration: 'none' }}>
        <p>Contact Us</p>
      </Link>
    </Content>
  </Wrapper>
);
export default Footer;
#+end_src
** The pages on website never changes . The only change happens when the re-render of website is causes by hooks
The below hook is used to fetch the next page of movies from the API and then it appends it to the end of existing
movies in the array. After it has fetched the movies it uses the useEffect to trigger a re render of the page.
#+begin_src js
export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);

      setState(prev => ({
        ...movies,
        results:
          // Appending the new moveis from page after 1 to the end of the array
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }))
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Fetching the movies from the datbase
  useEffect(() => {
    if(!searchTerm){
      const sessionState = isPersistedState('homeState');
      if(sessionState){
        setState(sessionState);
        return;
      }
    }

    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);
#+end_src

* Website Pages
** [[file:src/components/Home/Home_README.org][Main Home Page]]
