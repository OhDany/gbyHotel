 import { graphql, useStaticQuery } from 'gatsby';

 const useSeo = () => {

  const data = useStaticQuery(graphql`
    query MyQueryT {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  
  `);

  return data.datoCmsSite.globalSeo;
 }
  
 export default useSeo;