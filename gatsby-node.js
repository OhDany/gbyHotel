/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter}) => {
  const resultado = await graphql(`
    query MyQuery {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `);

  // console.log(resultado.data.allDatoCmsHabitacion.nodes);

  if (resultado.errors) {
    reporter.panic('No hubo resultados ', resultado.errors);
  }

  // Crea los archivos
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/habitaciones.js'),
      context: {
        slug: habitacion.slug
      }
    })
  })
}
