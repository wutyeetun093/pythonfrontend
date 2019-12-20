import React, { useState } from 'react';
import { Table, Icon, IconButton, Badge } from 'rsuite';
import _ from 'lodash';
import { getTodoList, deleteTodo } from '../../services/todo/todoAction';
import DeleteModal from '../../components/modal/DeleteModal';
import TodoUpdateModal from './TodoUpdateModal';
import { connect } from 'react-redux';

const { Column, HeaderCell, Cell } = Table;

const TodoTable = props => {
  const { todo } = props;

  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  return (
    <>
      <>
        <Table data={_.map(todo)} height={500}>
          <Column width={70} align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={250}>
            <HeaderCell>Title</HeaderCell>
            <Cell dataKey="title" />
          </Column>
          <Column width={500}>
            <HeaderCell>Description</HeaderCell>
            <Cell dataKey="description" />
          </Column>
          <Column width={250}>
            <HeaderCell>Completed</HeaderCell>
            <Cell>
              {rowData =>
                rowData.completed === true ? (
                  <Badge
                    content="true"
                    style={{ background: 'blue', padding: '3px' }}
                  ></Badge>
                ) : (
                  <Badge content="false" style={{ padding: '3px' }}></Badge>
                )
              }
            </Cell>
          </Column>
          <Column width={200} colSpan="2">
            <HeaderCell>Option</HeaderCell>
            <Cell>
              {rowData => (
                <>
                  <IconButton
                    icon={<Icon icon="edit" />}
                    className="mr-4"
                    appearance="ghost"
                    size="xs"
                    onClick={() => {
                      setIsOpenUpdateModal(true);
                      setSelectedTodo(rowData);
                    }}
                    style={{ cursor: 'pointer' }}
                  />

                  <IconButton
                    icon={<Icon icon="trash" />}
                    className="mr-4"
                    appearance="ghost"
                    color="red"
                    size="xs"
                    onClick={() => {
                      setIsOpenDeleteModal(true);
                      setSelectedTodo(rowData);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </>
              )}
            </Cell>
          </Column>
        </Table>
      </>
      <TodoUpdateModal
        isShow={isOpenUpdateModal}
        initialValues={selectedTodo}
        onClose={() => setIsOpenUpdateModal(false)}
      />
      <DeleteModal
        isShow={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={() =>
          props.deleteTodo(selectedTodo.id, () => props.getTodoList())
        }
      ></DeleteModal>
      )}
    </>
  );
};

export default connect(null, { getTodoList, deleteTodo })(TodoTable);
