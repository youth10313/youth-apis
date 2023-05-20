declare const YouthServers: {
    Auth: {
        Login: {
            LoginUserStepOne: (body: {
                email: string;
                password: string;
            }) => {
                onComplete: (func: <A = {
                    msg: "RESEND_DATA_WITH_CODE";
                }>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "RESEND_DATA_WITH_CODE";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            LoginUserStepTwo: (body: {
                email: string;
                password: string;
                code: string;
            }) => {
                onComplete: (func: <A_1 = {
                    token: string;
                    privateKey: string;
                    msg: "LOGGED_IN_SUCCESSFULLY";
                    profile: import("./@types/user").User;
                }>(data: A_1) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    token: string;
                    privateKey: string;
                    msg: "LOGGED_IN_SUCCESSFULLY";
                    profile: import("./@types/user").User;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            RenewUserToken: (Private?: string) => {
                onComplete: (func: <A_2 = {
                    msg: "TOKEN_SENT";
                    time: number;
                    token: string;
                }>(data: A_2) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "TOKEN_SENT";
                    time: number;
                    token: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            LoginOfficial: (body: {
                phrase: string;
                password: string;
            }) => {
                onComplete: (func: <A_3 = {
                    msg: "TOKEN_CREATED";
                    _employee?: import("./@types/official").Employee | undefined;
                    _department: import("./@types/official").Official;
                }>(data: A_3) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "TOKEN_CREATED";
                    _employee?: import("./@types/official").Employee | undefined;
                    _department: import("./@types/official").Official;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetSessions: (Authorization?: string) => {
                onComplete: (func: <A_4 = {
                    _id: string;
                    device: {
                        parser: {
                            options: {
                                emptyUserAgentDeviceType: "desktop";
                                unknownUserAgentDeviceType: "phone";
                                botUserAgentDeviceType: "bot";
                                carUserAgentDeviceType: "car";
                                consoleUserAgentDeviceType: "tv";
                                tvUserAgentDeviceType: "tv";
                                parseUserAgent: false;
                            };
                        };
                        type: string;
                        name: string;
                    };
                    ip: string;
                    userId: string;
                    date: number;
                    geo: {
                        country: string;
                        continent: string;
                    };
                }[]>(data: A_4) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    _id: string;
                    device: {
                        parser: {
                            options: {
                                emptyUserAgentDeviceType: "desktop";
                                unknownUserAgentDeviceType: "phone";
                                botUserAgentDeviceType: "bot";
                                carUserAgentDeviceType: "car";
                                consoleUserAgentDeviceType: "tv";
                                tvUserAgentDeviceType: "tv";
                                parseUserAgent: false;
                            };
                        };
                        type: string;
                        name: string;
                    };
                    ip: string;
                    userId: string;
                    date: number;
                    geo: {
                        country: string;
                        continent: string;
                    };
                }[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            ResetPassword: {
                StepOne: (body: {
                    email: string;
                }) => {
                    onComplete: (func: <A_5 = {
                        msg: "ACCCEPTED";
                        type: 2 | 1;
                    }>(data: A_5) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "ACCCEPTED";
                        type: 2 | 1;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                StepTwo: (body: {
                    email: string;
                    password: string;
                    code: string;
                }) => {
                    onComplete: (func: <A_6 = {
                        msg: "ACTIVATED";
                    }>(data: A_6) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "ACTIVATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
            LogoutOffice: (token?: string) => {
                onComplete: (func: <A_7 = {
                    msg: "LOGGED_OUT";
                }>(data: A_7) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "LOGGED_OUT";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            LogoutUser: (Private?: string, tokenId?: string) => {
                onComplete: (func: <A_8 = {
                    msg: "LOGGED_OUT";
                }>(data: A_8) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "LOGGED_OUT";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Register: {
            CheckEmail: (body: {
                email: string;
            }) => {
                onComplete: (func: <A_9 = {
                    msg: "ACCCEPTED";
                    type: 2 | 1;
                }>(data: A_9) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "ACCCEPTED";
                    type: 2 | 1;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            SendForm: (body: {
                username: string;
                password: string;
                email: string;
                nickname: string;
            }) => {
                onComplete: (func: <A_10 = {
                    userId: string;
                }>(data: A_10) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    userId: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Profile: {
            MyProfile: (Authorization?: string) => {
                onComplete: (func: <A_11 = import("./@types/user").User>(data: A_11) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/user").User) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            User: {
                UpdateProfile: (body: {
                    username?: string | undefined;
                    avatar?: string | undefined;
                    email?: string | undefined;
                    nickname?: string | undefined;
                    bio?: string | undefined;
                    tags?: string[] | undefined;
                    locale?: string | undefined;
                    telegram?: string | undefined;
                    whatsapp?: string | undefined;
                    facebook?: string | undefined;
                    twitter?: string | undefined;
                    instagram?: string | undefined;
                }, Authorization?: string) => {
                    onComplete: (func: <A_12 = {
                        msg: "UPDATED";
                    }>(data: A_12) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                UpdatePassword: (body: {
                    password: string;
                    newpassword: string;
                }, Authorization?: string) => {
                    onComplete: (func: <A_13 = {
                        msg: "UPDATED";
                    }>(data: A_13) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
            Department: {
                UpdatePassword: (body: {
                    password: string;
                    newpassword: string;
                }, token?: string) => {
                    onComplete: (func: <A_14 = {
                        msg: "UPDATED";
                    }>(data: A_14) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                UpdateProfile: (body: {
                    title?: string | undefined;
                    latinTitle?: string | undefined;
                    telegramId?: string | undefined;
                    locale?: string | undefined;
                }, token?: string) => {
                    onComplete: (func: <A_15 = {
                        msg: "UPDATED";
                    }>(data: A_15) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
        };
        Users: {
            CreateUser: (body: {
                username: string;
                password: string;
                avatar?: string | undefined;
                role: string;
                email: string;
                nickname: string;
                bio?: string | undefined;
                tags?: string[] | undefined;
                locale: string;
                customRoleTitle?: string | undefined;
                telegram?: string | undefined;
                whatsapp?: string | undefined;
                facebook?: string | undefined;
                twitter?: string | undefined;
                instagram?: string | undefined;
            }, Authorization?: string) => {
                onComplete: (func: <A_16 = {
                    id: string;
                }>(data: A_16) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            UpdateUser: (id: string, body: {
                username?: string | undefined;
                password?: string | undefined;
                avatar?: string | undefined;
                role?: string | undefined;
                email?: string | undefined;
                nickname?: string | undefined;
                bio?: string | undefined;
                tags?: string[] | undefined;
                locale: string;
                customRoleTitle?: string | undefined;
                telegram?: string | undefined;
                whatsapp?: string | undefined;
                facebook?: string | undefined;
                twitter?: string | undefined;
                instagram?: string | undefined;
            }, Authorization?: string) => {
                onComplete: (func: <A_17 = {
                    msg: "UPDATED";
                }>(data: A_17) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            DeleteUser: (id: string, Authorization?: string) => {
                onComplete: (func: <A_18 = {
                    msg: "DELETED";
                }>(data: A_18) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetUsers: (page: number, keyword: string, Authorization?: string) => {
                onComplete: (func: <A_19 = import("./@types/common").Pagination<import("./@types/user").User>>(data: A_19) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/common").Pagination<import("./@types/user").User>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetUser: (id: string, Authorization?: string) => {
                onComplete: (func: <A_11 = import("./@types/user").User>(data: A_11) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/user").User) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Departments: {
            CreateDepartment: (body: {
                _id: string;
                level: import("./enum/OfficialTypes").OfficialLevels;
                title: string;
                latinTitle: string;
                status: boolean;
                permissions: boolean[];
                password: string;
                locale: string;
                telegramId?: string | undefined;
                responseTo?: string | undefined;
            }, token?: string) => {
                onComplete: (func: <A_20 = {
                    id: string;
                }>(data: A_20) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            UpdateDepartment: (id: string, body: {
                title?: string | undefined;
                latinTitle?: string | undefined;
                status?: boolean | undefined;
                permissions?: boolean[] | undefined;
                password?: string | undefined;
                telegramId?: string | undefined;
                locale?: string | undefined;
            }, token?: string) => {
                onComplete: (func: <A_21 = {
                    msg: "UPDATED";
                }>(data: A_21) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            DeleteDepartment: (id: string, token?: string) => {
                onComplete: (func: <A_22 = {
                    msg: "DELETED";
                }>(data: A_22) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetDepartmentLevels: (direction: "up" | "down", departmentId: string) => {
                onComplete: (func: <A_23 = import("./@types/official").Official[]>(data: A_23) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/official").Official[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetDepartments: (owners?: "" | "true", token?: string) => {
                onComplete: (func: <A_23 = import("./@types/official").Official[]>(data: A_23) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/official").Official[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Employees: {
            CreateEmployee: (body: {
                _id: string;
                title: string;
                latinTitle: string;
                status: boolean;
                permissions: boolean[];
                password: string;
                locale: string;
                telegramId?: string | undefined;
            }, token?: string) => {
                onComplete: (func: <A_24 = {
                    id: string;
                }>(data: A_24) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            UpdateEmployee: (id: string, body: {
                title?: string | undefined;
                latinTitle?: string | undefined;
                status?: boolean | undefined;
                permissions?: boolean[] | undefined;
                password?: string | undefined;
                locale?: string | undefined;
                telegramId?: string | undefined;
            }, token?: string) => {
                onComplete: (func: <A_25 = {
                    msg: "UPDATED";
                }>(data: A_25) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            DeleteEmployee: (id: string, token?: string) => {
                onComplete: (func: <A_26 = {
                    msg: "DELETED";
                }>(data: A_26) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetEmployees: (token?: string) => {
                onComplete: (func: <A_27 = import("./@types/official").Employee[]>(data: A_27) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/official").Employee[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
    Cloud: {
        ReadDirectory: (path?: string, token?: string) => {
            onComplete: (func: <A_28 = {
                name: string;
                isDir: boolean;
                size: number;
            }[]>(data: A_28) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                name: string;
                isDir: boolean;
                size: number;
            }[]) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        Upload: (body: any, path?: string, token?: string) => {
            onComplete: (func: <A_29 = {
                msg: "FILE_UPLOADED";
            }>(data: A_29) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "FILE_UPLOADED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        Unlink: (path?: string, token?: string) => {
            onComplete: (func: <A_30 = {
                msg: "FILE_DELETED";
            }>(data: A_30) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "FILE_DELETED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    Data: {
        NLP: {
            fetch: (locale: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (name: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, name: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            train: (id: string, namespace: string, questions: string[], answers: string[], locale: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            ask: (id: string, q: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Core: (q: string, locale: string, page: number, perPage: number) => {
            onComplete: (func: <A_32 = import("./@types/common").Pagination<{
                _id: string;
                title: string;
                latinTitle?: string | undefined;
                description: string;
                keywords: string;
                locale: string;
            }>>(data: A_32) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: import("./@types/common").Pagination<{
                _id: string;
                title: string;
                latinTitle?: string | undefined;
                description: string;
                keywords: string;
                locale: string;
            }>) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        Feeds: {
            Bigbang: {
                posts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_34 = import("./@types/common").Pagination<import("./@types/post").Post>>(data: A_34) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_35 = {
                            id: string;
                        }>(data: A_35) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_36 = {
                            msg: "UPDATED";
                        }>(data: A_36) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_37 = {
                            msg: "DELETED";
                        }>(data: A_37) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                categories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_39 = {
                            id: string;
                        }>(data: A_39) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_40 = {
                            msg: "UPDATED";
                        }>(data: A_40) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_41 = {
                            msg: "DELETED";
                        }>(data: A_41) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
            };
            Blog: {
                posts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_34 = import("./@types/common").Pagination<import("./@types/post").Post>>(data: A_34) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_35 = {
                            id: string;
                        }>(data: A_35) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_36 = {
                            msg: "UPDATED";
                        }>(data: A_36) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_37 = {
                            msg: "DELETED";
                        }>(data: A_37) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                categories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_39 = {
                            id: string;
                        }>(data: A_39) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_40 = {
                            msg: "UPDATED";
                        }>(data: A_40) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_41 = {
                            msg: "DELETED";
                        }>(data: A_41) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/post").Post) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
            };
            Prays: {
                posts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_42 = import("./@types/pray").Pray>(data: A_42) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/pray").Pray) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_43 = import("./@types/common").Pagination<import("./@types/pray").Pray>>(data: A_43) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/common").Pagination<import("./@types/pray").Pray>) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/pray").Pray, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_44 = {
                            id: string;
                        }>(data: A_44) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_45 = {
                            msg: "UPDATED";
                        }>(data: A_45) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_46 = {
                            msg: "DELETED";
                        }>(data: A_46) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_42 = import("./@types/pray").Pray>(data: A_42) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/pray").Pray) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_42 = import("./@types/pray").Pray>(data: A_42) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/pray").Pray) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_42 = import("./@types/pray").Pray>(data: A_42) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/pray").Pray) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                categories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_42 = import("./@types/pray").Pray>(data: A_42) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/pray").Pray) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_47 = {
                            id: string;
                        }>(data: A_47) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_48 = {
                            msg: "UPDATED";
                        }>(data: A_48) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_49 = {
                            msg: "DELETED";
                        }>(data: A_49) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_42 = import("./@types/pray").Pray>(data: A_42) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/pray").Pray) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_42 = import("./@types/pray").Pray>(data: A_42) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/pray").Pray) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_42 = import("./@types/pray").Pray>(data: A_42) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/pray").Pray) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
            };
            FAQ: {
                Doubts: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_50 = import("./@types/doubt").Doubt>(data: A_50) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComplete: (func: <A_51 = import("./@types/common").Pagination<import("./@types/doubt").Doubt>>(data: A_51) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/common").Pagination<import("./@types/doubt").Doubt>) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/doubt").Doubt, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_52 = {
                                id: string;
                            }>(data: A_52) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_53 = {
                                msg: "UPDATED";
                            }>(data: A_53) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_54 = {
                                msg: "DELETED";
                            }>(data: A_54) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_50 = import("./@types/doubt").Doubt>(data: A_50) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_50 = import("./@types/doubt").Doubt>(data: A_50) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_50 = import("./@types/doubt").Doubt>(data: A_50) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_50 = import("./@types/doubt").Doubt>(data: A_50) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_55 = {
                                id: string;
                            }>(data: A_55) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_56 = {
                                msg: "UPDATED";
                            }>(data: A_56) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_57 = {
                                msg: "DELETED";
                            }>(data: A_57) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_50 = import("./@types/doubt").Doubt>(data: A_50) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_50 = import("./@types/doubt").Doubt>(data: A_50) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_50 = import("./@types/doubt").Doubt>(data: A_50) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                };
                Questions: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_58 = import("./@types/question").Question>(data: A_58) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/question").Question) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComplete: (func: <A_59 = import("./@types/common").Pagination<import("./@types/question").Question>>(data: A_59) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/common").Pagination<import("./@types/question").Question>) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/question").Question, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_60 = {
                                id: string;
                            }>(data: A_60) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_61 = {
                                msg: "UPDATED";
                            }>(data: A_61) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_62 = {
                                msg: "DELETED";
                            }>(data: A_62) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_58 = import("./@types/question").Question>(data: A_58) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/question").Question) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_58 = import("./@types/question").Question>(data: A_58) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/question").Question) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_58 = import("./@types/question").Question>(data: A_58) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/question").Question) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_58 = import("./@types/question").Question>(data: A_58) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/question").Question) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_63 = {
                                id: string;
                            }>(data: A_63) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_64 = {
                                msg: "UPDATED";
                            }>(data: A_64) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_65 = {
                                msg: "DELETED";
                            }>(data: A_65) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_58 = import("./@types/question").Question>(data: A_58) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/question").Question) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_58 = import("./@types/question").Question>(data: A_58) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/question").Question) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_58 = import("./@types/question").Question>(data: A_58) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/question").Question) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                };
            };
            Islam: {
                Ethics: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComplete: (func: <A_34 = import("./@types/common").Pagination<import("./@types/post").Post>>(data: A_34) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_66 = {
                                id: string;
                            }>(data: A_66) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_67 = {
                                msg: "UPDATED";
                            }>(data: A_67) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_68 = {
                                msg: "DELETED";
                            }>(data: A_68) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_69 = {
                                id: string;
                            }>(data: A_69) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_70 = {
                                msg: "UPDATED";
                            }>(data: A_70) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_71 = {
                                msg: "DELETED";
                            }>(data: A_71) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                };
                Beliefs: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComplete: (func: <A_34 = import("./@types/common").Pagination<import("./@types/post").Post>>(data: A_34) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_66 = {
                                id: string;
                            }>(data: A_66) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_67 = {
                                msg: "UPDATED";
                            }>(data: A_67) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_68 = {
                                msg: "DELETED";
                            }>(data: A_68) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_69 = {
                                id: string;
                            }>(data: A_69) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_70 = {
                                msg: "UPDATED";
                            }>(data: A_70) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_71 = {
                                msg: "DELETED";
                            }>(data: A_71) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                };
                Sharia: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComplete: (func: <A_34 = import("./@types/common").Pagination<import("./@types/post").Post>>(data: A_34) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_66 = {
                                id: string;
                            }>(data: A_66) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_67 = {
                                msg: "UPDATED";
                            }>(data: A_67) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_68 = {
                                msg: "DELETED";
                            }>(data: A_68) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_69 = {
                                id: string;
                            }>(data: A_69) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_70 = {
                                msg: "UPDATED";
                            }>(data: A_70) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_71 = {
                                msg: "DELETED";
                            }>(data: A_71) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                };
                Civilizations: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComplete: (func: <A_34 = import("./@types/common").Pagination<import("./@types/post").Post>>(data: A_34) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_66 = {
                                id: string;
                            }>(data: A_66) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_67 = {
                                msg: "UPDATED";
                            }>(data: A_67) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_68 = {
                                msg: "DELETED";
                            }>(data: A_68) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_69 = {
                                id: string;
                            }>(data: A_69) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                id: string;
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_70 = {
                                msg: "UPDATED";
                            }>(data: A_70) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_71 = {
                                msg: "DELETED";
                            }>(data: A_71) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComplete: (func: <A_33 = import("./@types/post").Post>(data: A_33) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            Convert: (func: (data: import("./@types/post").Post) => any) => any;
                            subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                            abort: () => void;
                        };
                    };
                };
            };
            Library: {
                posts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_72 = import("./@types/book").Book>(data: A_72) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/book").Book) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_73 = import("./@types/common").Pagination<import("./@types/book").Book>>(data: A_73) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/common").Pagination<import("./@types/book").Book>) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/book").Book, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_74 = {
                            id: string;
                        }>(data: A_74) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_75 = {
                            msg: "UPDATED";
                        }>(data: A_75) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_76 = {
                            msg: "DELETED";
                        }>(data: A_76) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_72 = import("./@types/book").Book>(data: A_72) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/book").Book) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_72 = import("./@types/book").Book>(data: A_72) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/book").Book) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_72 = import("./@types/book").Book>(data: A_72) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/book").Book) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                categories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_72 = import("./@types/book").Book>(data: A_72) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/book").Book) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_38 = import("./@types/category").Category[]>(data: A_38) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/category").Category[]) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_77 = {
                            id: string;
                        }>(data: A_77) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_78 = {
                            msg: "UPDATED";
                        }>(data: A_78) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_79 = {
                            msg: "DELETED";
                        }>(data: A_79) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_72 = import("./@types/book").Book>(data: A_72) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/book").Book) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_72 = import("./@types/book").Book>(data: A_72) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/book").Book) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_72 = import("./@types/book").Book>(data: A_72) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/book").Book) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
            };
            Main: {
                Sermons: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_80 = import("./@types/sermon").Sermon>(data: A_80) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/sermon").Sermon) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_81 = import("./@types/sermon").Sermon[]>(data: A_81) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/sermon").Sermon[]) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/sermon").Sermon, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_82 = {
                            id: string;
                        }>(data: A_82) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_83 = {
                            msg: "UPDATED";
                        }>(data: A_83) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_84 = {
                            msg: "DELETED";
                        }>(data: A_84) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_80 = import("./@types/sermon").Sermon>(data: A_80) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/sermon").Sermon) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_80 = import("./@types/sermon").Sermon>(data: A_80) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/sermon").Sermon) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_80 = import("./@types/sermon").Sermon>(data: A_80) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/sermon").Sermon) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                Meetings: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_85 = import("./@types/meeting").Meeting>(data: A_85) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/meeting").Meeting) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_86 = import("./@types/meeting").Meeting[]>(data: A_86) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/meeting").Meeting[]) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/meeting").Meeting, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_87 = {
                            id: string;
                        }>(data: A_87) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_88 = {
                            msg: "UPDATED";
                        }>(data: A_88) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_89 = {
                            msg: "DELETED";
                        }>(data: A_89) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_85 = import("./@types/meeting").Meeting>(data: A_85) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/meeting").Meeting) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_85 = import("./@types/meeting").Meeting>(data: A_85) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/meeting").Meeting) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_85 = import("./@types/meeting").Meeting>(data: A_85) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/meeting").Meeting) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                Statements: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_90 = import("./@types/statement").Statement>(data: A_90) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/statement").Statement) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_91 = import("./@types/statement").Statement[]>(data: A_91) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/statement").Statement[]) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/statement").Statement, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_92 = {
                            id: string;
                        }>(data: A_92) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_93 = {
                            msg: "UPDATED";
                        }>(data: A_93) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_94 = {
                            msg: "DELETED";
                        }>(data: A_94) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_90 = import("./@types/statement").Statement>(data: A_90) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/statement").Statement) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_90 = import("./@types/statement").Statement>(data: A_90) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/statement").Statement) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_90 = import("./@types/statement").Statement>(data: A_90) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/statement").Statement) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                Ansars: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_95 = import("./@types/ansar").Ansar>(data: A_95) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/ansar").Ansar) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_96 = import("./@types/ansar").Ansar[]>(data: A_96) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/ansar").Ansar[]) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/ansar").Ansar, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_97 = {
                            id: string;
                        }>(data: A_97) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_98 = {
                            msg: "UPDATED";
                        }>(data: A_98) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_99 = {
                            msg: "DELETED";
                        }>(data: A_99) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_95 = import("./@types/ansar").Ansar>(data: A_95) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/ansar").Ansar) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_95 = import("./@types/ansar").Ansar>(data: A_95) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/ansar").Ansar) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_95 = import("./@types/ansar").Ansar>(data: A_95) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/ansar").Ansar) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                Histories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_100 = import("./@types/history").History>(data: A_100) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/history").History) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_101 = import("./@types/history").History[]>(data: A_101) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/history").History[]) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/history").History, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_102 = {
                            id: string;
                        }>(data: A_102) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_103 = {
                            msg: "UPDATED";
                        }>(data: A_103) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_104 = {
                            msg: "DELETED";
                        }>(data: A_104) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_100 = import("./@types/history").History>(data: A_100) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/history").History) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_100 = import("./@types/history").History>(data: A_100) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/history").History) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_100 = import("./@types/history").History>(data: A_100) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/history").History) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
            };
            Musics: {
                Tracks: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_105 = import("./@types/track").Track>(data: A_105) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/track").Track) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_106 = import("./@types/common").Pagination<import("./@types/track").Track>>(data: A_106) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/common").Pagination<import("./@types/track").Track>) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/track").Track, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_107 = {
                            id: string;
                        }>(data: A_107) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_108 = {
                            msg: "UPDATED";
                        }>(data: A_108) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_109 = {
                            msg: "DELETED";
                        }>(data: A_109) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_105 = import("./@types/track").Track>(data: A_105) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/track").Track) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_105 = import("./@types/track").Track>(data: A_105) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/track").Track) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_105 = import("./@types/track").Track>(data: A_105) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/track").Track) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                Podcasts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_110 = import("./@types/podcast").Podcast>(data: A_110) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/podcast").Podcast) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_111 = import("./@types/common").Pagination<import("./@types/podcast").Podcast>>(data: A_111) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/common").Pagination<import("./@types/podcast").Podcast>) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/podcast").Podcast, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_112 = {
                            id: string;
                        }>(data: A_112) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_113 = {
                            msg: "UPDATED";
                        }>(data: A_113) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_114 = {
                            msg: "DELETED";
                        }>(data: A_114) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_110 = import("./@types/podcast").Podcast>(data: A_110) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/podcast").Podcast) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_110 = import("./@types/podcast").Podcast>(data: A_110) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/podcast").Podcast) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_110 = import("./@types/podcast").Podcast>(data: A_110) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/podcast").Podcast) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
            };
            Reasons: {
                ReasonsFeeds: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_115 = import("./@types/reason").Reason>(data: A_115) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/reason").Reason) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_115 = import("./@types/reason").Reason>(data: A_115) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/reason").Reason) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/reason").Reason, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_116 = {
                            id: string;
                        }>(data: A_116) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_117 = {
                            msg: "UPDATED";
                        }>(data: A_117) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_118 = {
                            msg: "DELETED";
                        }>(data: A_118) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_115 = import("./@types/reason").Reason>(data: A_115) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/reason").Reason) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_115 = import("./@types/reason").Reason>(data: A_115) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/reason").Reason) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_115 = import("./@types/reason").Reason>(data: A_115) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/reason").Reason) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                Religions: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_119 = import("./@types/religion").Religion>(data: A_119) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/religion").Religion) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_119 = import("./@types/religion").Religion>(data: A_119) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/religion").Religion) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/religion").Religion, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_120 = {
                            id: string;
                        }>(data: A_120) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_121 = {
                            msg: "UPDATED";
                        }>(data: A_121) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_122 = {
                            msg: "DELETED";
                        }>(data: A_122) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_119 = import("./@types/religion").Religion>(data: A_119) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/religion").Religion) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_119 = import("./@types/religion").Religion>(data: A_119) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/religion").Religion) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_119 = import("./@types/religion").Religion>(data: A_119) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/religion").Religion) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
            };
            School: {
                Classes: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_123 = import("./@types/class").Class>(data: A_123) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/class").Class) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_124 = import("./@types/common").Pagination<import("./@types/class").Class>>(data: A_124) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/common").Pagination<import("./@types/class").Class>) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/class").Class, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_125 = {
                            id: string;
                        }>(data: A_125) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_126 = {
                            msg: "UPDATED";
                        }>(data: A_126) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_127 = {
                            msg: "DELETED";
                        }>(data: A_127) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_123 = import("./@types/class").Class>(data: A_123) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/class").Class) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_123 = import("./@types/class").Class>(data: A_123) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/class").Class) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_123 = import("./@types/class").Class>(data: A_123) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/class").Class) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                Lessons: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_128 = import("./@types/lesson").Lesson>(data: A_128) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/lesson").Lesson) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_129 = import("./@types/common").Pagination<import("./@types/lesson").Lesson>>(data: A_129) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/common").Pagination<import("./@types/lesson").Lesson>) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/lesson").Lesson, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_130 = {
                            id: string;
                        }>(data: A_130) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_131 = {
                            msg: "UPDATED";
                        }>(data: A_131) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_132 = {
                            msg: "DELETED";
                        }>(data: A_132) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_128 = import("./@types/lesson").Lesson>(data: A_128) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/lesson").Lesson) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_128 = import("./@types/lesson").Lesson>(data: A_128) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/lesson").Lesson) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_128 = import("./@types/lesson").Lesson>(data: A_128) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/lesson").Lesson) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                Teachers: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_133 = import("./@types/teacher").Teacher>(data: A_133) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/teacher").Teacher) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComplete: (func: <A_134 = import("./@types/common").Pagination<import("./@types/teacher").Teacher>>(data: A_134) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/common").Pagination<import("./@types/teacher").Teacher>) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/teacher").Teacher, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_135 = {
                            id: string;
                        }>(data: A_135) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            id: string;
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_136 = {
                            msg: "UPDATED";
                        }>(data: A_136) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_137 = {
                            msg: "DELETED";
                        }>(data: A_137) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_133 = import("./@types/teacher").Teacher>(data: A_133) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/teacher").Teacher) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComplete: (func: <A_133 = import("./@types/teacher").Teacher>(data: A_133) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/teacher").Teacher) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComplete: (func: <A_133 = import("./@types/teacher").Teacher>(data: A_133) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: import("./@types/teacher").Teacher) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
                Chapters: {
                    Passed: (Authorization?: string) => {
                        onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: unknown) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    Pass: (lessonId: string, Authorization?: string) => {
                        onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: unknown) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                    UnPass: (lessonId: string, Authorization?: string) => {
                        onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        Convert: (func: (data: unknown) => any) => any;
                        subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                        abort: () => void;
                    };
                };
            };
        };
        Settings: {
            AdjustCluster: (app: string, size: number, locale: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            AdjustFont: (app: string, url: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Refresh: (app: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Translations: {
            Translate: (app: string, i18n: import("./@types/common").I18n, locale: string, Authorization?: string) => {
                onComplete: (func: <A_138 = {
                    msg: "TRANSLATED";
                }>(data: A_138) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "TRANSLATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            App: (app: string) => {
                onComplete: (func: <A_139 = import("./@types/common").I18nFull>(data: A_139) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/common").I18nFull) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Locale: (app: string, locale: string) => {
                onComplete: (func: <A_139 = import("./@types/common").I18nFull>(data: A_139) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/common").I18nFull) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Module: (app: string, locale: string, module: string) => {
                onComplete: (func: <A_139 = import("./@types/common").I18nFull>(data: A_139) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/common").I18nFull) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            AddLocale: (app: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_140 = {
                    msg: "DONE";
                }>(data: A_140) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DONE";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            AppLocales: (app: string) => {
                onComplete: (func: <A_141 = string[]>(data: A_141) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: string[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            RemoveLocale: (app: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_142 = {
                    msg: "DONE";
                }>(data: A_142) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DONE";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
    Office: {
        Ads: {
            CreateUserAd: (body: import("./@types/ads").AdBody, Authorization?: string) => {
                onComplete: (func: <A_143 = {
                    id: string;
                }>(data: A_143) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            UpdateUserAd: (body: any, Authorization?: string) => {
                onComplete: (func: <A_144 = {
                    id: string;
                }>(data: A_144) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            SignAds: (token?: string) => {
                onComplete: (func: <A_145 = {
                    id: string;
                }>(data: A_145) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            RemoveAd: (id: string, token?: string, Authorization?: string) => {
                onComplete: (func: <A_146 = {
                    msg: "DELETED";
                }>(data: A_146) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetDepartmentAds: (from: Date | undefined, to: Date | undefined, signed: boolean, count: boolean, token?: string) => {
                onComplete: (func: <A_147 = import("./@types/ads").Ad[]>(data: A_147) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/ads").Ad[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetUserAds: (from: Date | undefined, to: Date | undefined, signed: boolean, count: boolean, Authorization?: string) => {
                onComplete: (func: <A_147 = import("./@types/ads").Ad[]>(data: A_147) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/ads").Ad[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            SendUserAdReport: (id: string, body: {
                description: string;
            }, Authorization?: string) => {
                onComplete: (func: <A_148 = {
                    id: string;
                }>(data: A_148) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            DeleteUserAdReport: (id: string, Authorization?: string) => {
                onComplete: (func: <A_149 = {
                    id: string;
                }>(data: A_149) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetUserAdReports: (id: string, Authorization?: string) => {
                onComplete: (func: <A_147 = import("./@types/ads").Ad[]>(data: A_147) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/ads").Ad[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetDepartmentUserAdReports: (id: string, token?: string) => {
                onComplete: (func: <A_147 = import("./@types/ads").Ad[]>(data: A_147) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/ads").Ad[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Blazer: {
            Send: (departments: string[], date: string, message: string, token?: string) => {
                onComplete: (func: <A_150 = {
                    msg: string;
                }>(data: A_150) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Cancel: (id: string, token?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            History: (token?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Citizens: {
            CreateLink: (token?: string) => {
                onComplete: (func: <A_151 = {
                    id: string;
                    link: string;
                }>(data: A_151) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                    link: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            DeleteLink: (token?: string) => {
                onComplete: (func: <A_152 = {
                    msg: string;
                }>(data: A_152) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Join: (linkHash: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Left: (id: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            ApproveCitizen: (userId: string, token?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            KickCitizen: (userId: string, token?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetUserDepartments: (Authorization?: string) => {
                onComplete: (func: <A_153 = import("./@types/citizen").Citizen[]>(data: A_153) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/citizen").Citizen[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetDepartmentCitizens: (type: "" | "all" | "lobby", token?: string) => {
                onComplete: (func: <A_153 = import("./@types/citizen").Citizen[]>(data: A_153) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/citizen").Citizen[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            JoinByAdmin: (linkHash: string, Authorization?: string) => {
                onComplete: (func: <A_31 = unknown>(data: A_31) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Share: (id: string, body: string[], token?: string) => {
                onComplete: (func: <A_154 = {
                    msg: string;
                }>(data: A_154) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Communication: {
            Send: (body: {
                title: string;
                receiver: string;
                content: string;
            }, token?: string) => {
                onComplete: (func: <A_155 = {
                    id: string;
                }>(data: A_155) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Remove: (id: string, token?: string) => {
                onComplete: (func: <A_156 = {
                    msg: string;
                }>(data: A_156) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Mails: (box: "inbox" | "outbox", token?: string) => {
                onComplete: (func: <A_157 = import("./@types/common").Pagination<import("./@types/letter").Letter>>(data: A_157) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/common").Pagination<import("./@types/letter").Letter>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Mail: (id: string, box: "inbox" | "outbox", token?: string) => {
                onComplete: (func: <A_158 = import("./@types/letter").Letter>(data: A_158) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/letter").Letter) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Complaints: {
            Send: (body: {
                content: string;
                title: string;
                department: string;
                because?: string | undefined;
            }, Authorization?: string) => {
                onComplete: (func: <A_159 = {
                    id: string;
                }>(data: A_159) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Remove: (id: string, token?: string) => {
                onComplete: (func: <A_160 = {
                    msg: string;
                }>(data: A_160) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetDepartmentComplaint: (id: string, token?: string) => {
                onComplete: (func: <A_161 = import("./@types/complaint").Complaint>(data: A_161) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/complaint").Complaint) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetUserComplaint: (id: string, Authorization?: string) => {
                onComplete: (func: <A_161 = import("./@types/complaint").Complaint>(data: A_161) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/complaint").Complaint) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetDepartmentComplaints: (keyword?: string, token?: string) => {
                onComplete: (func: <A_161 = import("./@types/complaint").Complaint>(data: A_161) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/complaint").Complaint) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetUserComplaints: (keyword?: string, Authorization?: string) => {
                onComplete: (func: <A_161 = import("./@types/complaint").Complaint>(data: A_161) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/complaint").Complaint) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Reports: {
            CreateProject: (body: {
                title: string;
                dates: Date[];
                repeatType: "daily" | "weekly" | "monthly";
                members: string[];
                questions: [];
            }, token?: string) => {
                onComplete: (func: <A_162 = {
                    id: string;
                }>(data: A_162) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            UpdateProject: (id: string, body: {
                title: string;
                dates: Date[];
                repeatType: "daily" | "weekly" | "monthly";
                members: string[];
                questions: [];
            }, token?: string) => {
                onComplete: (func: <A_163 = {
                    msg: string;
                }>(data: A_163) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            RemoveProject: (id: string, token?: string) => {
                onComplete: (func: <A_164 = {
                    msg: string;
                }>(data: A_164) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetProjects: (token?: string) => {
                onComplete: (func: <A_165 = import("./@types/report").ReportProject[]>(data: A_165) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/report").ReportProject[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetUserProjects: (Authorization?: string) => {
                onComplete: (func: <A_165 = import("./@types/report").ReportProject[]>(data: A_165) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/report").ReportProject[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            SendUserReport: (projectId: string, id: string, answers?: string[] | undefined, Authorization?: string) => {
                onComplete: (func: <A_166 = {
                    msg: string;
                }>(data: A_166) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetProjectReports: (id: string, token?: string) => {
                onComplete: (func: <A_167 = import("./@types/report").Report[]>(data: A_167) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/report").Report[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            GetUserProjectReports: (id: string, Authorization?: string) => {
                onComplete: (func: <A_167 = import("./@types/report").Report[]>(data: A_167) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("./@types/report").Report[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("./@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
};
export default YouthServers;
