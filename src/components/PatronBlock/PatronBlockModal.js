import { take } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  Col,
  Modal,
  Row
} from '@folio/stripes/components';

const PatronBlockModal = ({ open, onClose, patronBlocks, viewUserPath }) => {
  const blocks = take(patronBlocks, 3);
  const renderBlocks = blocks.map(block => {
    return (
      <Row>
        <Col xs>
          <b>{block.desc || ''}</b>
        </Col>
      </Row>
    );
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      label={<b><FormattedMessage id="ui-checkout.blockModal" /></b>}
      dismissible
    >
      <Row>
        <Col xs><FormattedMessage id="ui-checkout.blockedLabel" /></Col>
      </Row>
      {renderBlocks}
      <br />
      <Row>
        <Col xs={8}>{(patronBlocks.length > 3) && <FormattedMessage id="ui-checkout.additionalReasons" />}</Col>
        <Col xs={4}>
          <Row end="xs">
            <Col>
              <Button onClick={onClose}><FormattedMessage id="ui-checkout.close" /></Button>
              <Button style={{ 'marginLeft': '15px' }} buttonStyle="primary" to={viewUserPath}><FormattedMessage id="ui-checkout.detailsButton" /></Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

PatronBlockModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  patronBlocks: PropTypes.object,
  viewUserPath: PropTypes.string,
};

export default PatronBlockModal;
