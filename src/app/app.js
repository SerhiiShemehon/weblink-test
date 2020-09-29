import {dataInput} from './dataInput';
import {
    getContainers,
    getBtnAdd,
    getBtnCancel,
    containerModal
} from '../service/contentService';

const isWorkers = data.workers !== undefined || !!data.workers.length;
const numberWorkers = isWorkers ? data.workers.length : 0;
let btnOpenModal = null;
let btnAddWorker = null;
let btnCancelWorker = null;
let currentContainerModal = null;
let isOpenModal = false;
let currentStep = 0;


const addWorker = () => {
    if(!btnOpenModal){
        btnOpenModal = getBtnAdd(document);
    }
    btnOpenModal.click();
    isOpenModal = true;

    currentContainerModal = containerModal();
    let checkOpenModalTimer = setInterval(() => {
        let modalContent = currentContainerModal.querySelector('.MuiDialogContent-root');
        if (!!modalContent){
            clearInterval(checkOpenModalTimer);
            addField(modalContent, data.workers[currentStep - 1]);
        }
    }, 100);
}


const addField = (selector, data) => {
    currentStep++;
    const containers = getContainers(selector);

    containers.forEach((container) => {
        dataInput(container, data, selector);
    });

    if (isOpenModal) {
        btnAddWorker = getBtnAdd(currentContainerModal);
        btnCancelWorker = getBtnCancel(currentContainerModal);
        btnAddWorker.addEventListener('click', checkAddModal, false);
        btnCancelWorker.addEventListener('click', checkCancelModal, false);
        btnAddWorker.click();
    } else {
        app();
    }
}

const checkAddModal = () => {
    setTimeout(()=>{
        isOpenModal = false;
        let isEmptyInput = currentContainerModal.querySelectorAll('.Mui-error');
        if(!isEmptyInput.length){
            let checkClosedModalTimer = setInterval(() => {
                let currentContainerModal = containerModal();
                if (!currentContainerModal){
                    btnAddWorker.removeEventListener('click', checkAddModal);
                    clearInterval(checkClosedModalTimer);
                    app();
                }
            }, 100);
        }
    },40);
}

const checkCancelModal = () => {
    setTimeout(()=>{
        isOpenModal = false;
        btnCancelWorker.removeEventListener('click', checkCancelModal);
        app();
    },40)
}


const app = () => {
    if (currentStep === 0) {
        return addField(document, data);
    }
    if (isWorkers && currentStep > 0 && currentStep <= numberWorkers) {
        return addWorker()
    }
}

export {
    app
};