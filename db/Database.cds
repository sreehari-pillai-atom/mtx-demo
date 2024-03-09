namespace com.mtx.db; 

using {  cuid } from '@sap/cds/common';


entity Product : cuid {
    Name : String(255);
    Price : Decimal(10,2) default 0;
    Currency : String(3) default 'USD';
}

