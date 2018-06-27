var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var StyledDiagram = styled.svg.withConfig({
  displayName: 'StyledDiagram'
})(['max-width:100%;width:100%;height:100%;']);

export default StyledDiagram.extend(_templateObject, function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});