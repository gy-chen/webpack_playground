import join from 'lodash/join';

const component = () => {

    var element = document.createElement('div');
    element.innerHTML = join(['Hello', 'webpack'], ' ');

    return element;
}

export default component;
