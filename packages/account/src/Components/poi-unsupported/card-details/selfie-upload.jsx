import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { localize } from '@deriv/translations';
import { isMobile } from '@deriv/shared';
import { Button, Text } from '@deriv/components';
import Uploader from './uploader.jsx';
import { setInitialValues, validateFields } from './utils';
import { ROOT_CLASS, SELFIE_DOCUMENT } from '../constants';

const SelfieUpload = ({ initial_values, goBack, onConfirm, onFileDrop }) => {
    return (
        <div
            className={cn(ROOT_CLASS, {
                [`${ROOT_CLASS}--mobile`]: isMobile(),
            })}
        >
            <Formik
                initialValues={initial_values || setInitialValues([SELFIE_DOCUMENT])}
                validate={values => validateFields(values, undefined, [SELFIE_DOCUMENT])}
                onSubmit={onConfirm}
            >
                {({ values, isValid, isSubmitting }) => (
                    <Form className={`${ROOT_CLASS}__form`}>
                        <div className={`${ROOT_CLASS}__fields-content`}>
                            <Text as='h3' size='s' weight='bold' color='prominent'>
                                {localize('Upload your selfie')}
                            </Text>
                            <div className={`${ROOT_CLASS}__uploaders-wrap`}>
                                <Uploader
                                    data={SELFIE_DOCUMENT}
                                    value={values[SELFIE_DOCUMENT.name]}
                                    is_full={true}
                                    onChange={onFileDrop}
                                    has_frame
                                />
                            </div>
                            <div className={`${ROOT_CLASS}__notice`}>
                                <Text as='p' size='xs' color='general'>
                                    {localize(
                                        'Face forward and remove your glasses if necessary. Make sure your eyes are clearly visible and your face is within the frame.'
                                    )}
                                </Text>
                            </div>
                        </div>
                        <div className={`${ROOT_CLASS}__btns`}>
                            <Button onClick={goBack} secondary large text={localize('Go back')} />
                            <Button
                                type='submit'
                                primary
                                large
                                is_disabled={!isValid || isSubmitting}
                                text={localize('Confirm and upload')}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

SelfieUpload.propTypes = {
    initial_values: PropTypes.object,
    goBack: PropTypes.func,
    onConfirm: PropTypes.func,
};

export default SelfieUpload;
