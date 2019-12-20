import React from 'react';
import { Button } from 'rsuite';
import TodoCreateModal from './TodoCreateModal';

class TodoActionBar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="mt-5 mx-2 d-flex justify-content-end">
        <Button color="cyan" size="lg" onClick={this.toggle}>
          Todo Create
        </Button>
        <TodoCreateModal
          isShow={isOpen}
          onClose={this.toggle}
          {...this.props}
        />
      </div>
    );
  }
}

export default TodoActionBar;
