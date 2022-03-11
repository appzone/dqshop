import React, { useState } from 'react';
import { EditIcon, SaveIcon, TrashIcon } from "../../components/icons";
import { connect } from 'react-redux';
import { editAddress } from "../../actions";


const AddressItem = (props: any) => {
	const [ isEdit, setIsEdit] = useState(false);
	const { 
		address,
		editAddress,
	} = props;

	const updateAddressHadler = (value: any) => {
		console.log("value ", value)
	}

	return (
		<>
			<div className="row no-gutters py-2">
				<div className="col-sm-8 py-2">
					{
						!isEdit
						? address.addressLine1
						: <input type="text" value={address.addressLine1} onChange={(e) => updateAddressHadler(e.target.value)}/>
					}
				</div>
				<div className="col-sm-4 py-2 text-right">
					
						{
							!isEdit
							? <button
								onClick={() => setIsEdit(!isEdit)}
								className="btn btn-danger btn-sm mb-1">
									<EditIcon />
								</button>
							: <button
							onClick={() => { editAddress(address);setIsEdit(!isEdit) } }
							className="btn btn-danger btn-sm mb-1">
								<SaveIcon />
							</button>
						}
					<button
						className="btn btn-danger btn-sm mb-1">
						<TrashIcon width={20} />
					</button>
				</div>
			</div>
		</>
	)
}

export default connect(null, { editAddress })(AddressItem);