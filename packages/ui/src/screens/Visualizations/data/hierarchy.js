import routes from 'config/routes'

const mapLinks = links => {
  return links.filter(link => !link.redirect).map(link => {
    const node = { name: link.label }
    if (link.children) {
      node.children = mapLinks(link.children)
    }
    return node
  })
}

const tree = {
  name: 'Root',
  children: mapLinks(routes)
}

export default tree
