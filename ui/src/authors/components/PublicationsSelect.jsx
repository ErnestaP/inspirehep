import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

function PublicationsSelect({
  onSelectPapersUserCanNotClaim,
  onSelectClaimedPapers,
  onSelectUnclaimedPapers,
  onSelectPapers,
  claimed,
  canClaim,
  disabled,
  checked,
  isOwnProfile,
}) {
  const onChange = (event) => {
    onSelectPapers(event);
    if (isOwnProfile && !claimed) {
      onSelectUnclaimedPapers(event);
    }
    if (!canClaim) {
      onSelectPapersUserCanNotClaim(event);
    }
    if (claimed) {
      onSelectClaimedPapers(event);
    } else if (!claimed && canClaim) {
      onSelectUnclaimedPapers(event);
    }
  };

  return (
    <Checkbox
      onChange={(event) => {
        onChange(event);
      }}
      disabled={disabled}
      checked={checked}
    />
  );
}

PublicationsSelect.propTypes = {
  claimed: PropTypes.bool,
  canClaim: PropTypes.bool,
  onSelectPapersUserCanNotClaim: PropTypes.func.isRequired,
  onSelectClaimedPapers: PropTypes.func.isRequired,
  onSelectUnclaimedPapers: PropTypes.func.isRequired,
  onSelectPapers: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

export default PublicationsSelect;
