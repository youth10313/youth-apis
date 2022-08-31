declare const YouthServers: {
    Auth: {
        Login: {
            LoginUserStepOne: (body: {
                email: string;
                password: string;
            }) => {
                onComelete: (func: (data: {
                    msg: "RESEND_DATA_WITH_CODE";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            LoginUserStepTwo: (body: {
                email: string;
                password: string;
                code: string;
            }) => {
                onComelete: (func: (data: {
                    token: string;
                    privateKey: string;
                    msg: "LOGGED_IN_SUCCESSFULLY";
                    profile: import("./@types/user").User;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            RenewUserToken: (_private?: string) => {
                onComelete: (func: (data: {
                    msg: "TOKEN_SENT";
                    time: number;
                    token: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            LoginOfficial: (body: {
                phrase: string;
                password: string;
            }) => {
                onComelete: (func: (data: {
                    msg: "TOKEN_CREATED";
                    _employee?: import("./@types/official").Employee | undefined;
                    _department: import("./@types/official").Official;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetSessions: (Authorization?: string) => {
                onComelete: (func: (data: {
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
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            ResetPassword: {
                StepOne: (body: {
                    email: string;
                }) => {
                    onComelete: (func: (data: {
                        msg: "ACCCEPTED";
                        type: 2 | 1;
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                    abort: () => void;
                };
                StepTwo: (body: {
                    email: string;
                    password: string;
                    code: string;
                }) => {
                    onComelete: (func: (data: {
                        msg: "ACTIVATED";
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                    abort: () => void;
                };
            };
            LogoutOffice: (token?: string) => {
                onComelete: (func: (data: {
                    msg: "LOGGED_OUT";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            LogoutUser: (_private?: string) => {
                onComelete: (func: (data: {
                    msg: "LOGGED_OUT";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
        Register: {
            CheckEmail: (body: {
                email: string;
            }) => {
                onComelete: (func: (data: {
                    msg: "ACCCEPTED";
                    type: 2 | 1;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            SendForm: (body: {
                username: string;
                password: string;
                email: string;
                nickname: string;
            }) => {
                onComelete: (func: (data: {
                    userId: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
        Profile: {
            MyProfile: (Authorization?: string) => {
                onComelete: (func: (data: import("./@types/user").User) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
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
                    onComelete: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                    abort: () => void;
                };
                UpdatePassword: (body: {
                    password: string;
                    newpassword: string;
                }, Authorization?: string) => {
                    onComelete: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                    abort: () => void;
                };
            };
            Department: {
                UpdatePassword: (body: {
                    password: string;
                    newpassword: string;
                }, token?: string) => {
                    onComelete: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                    abort: () => void;
                };
                UpdateProfile: (body: {
                    title?: string | undefined;
                    latinTitle?: string | undefined;
                    telegramId?: string | undefined;
                    locale?: string | undefined;
                }, token?: string) => {
                    onComelete: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
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
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
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
                onComelete: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            DeleteUser: (id: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetUsers: (page: number, keyword: string, Authorization?: string) => {
                onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/user").User>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetUser: (id: string, Authorization?: string) => {
                onComelete: (func: (data: import("./@types/user").User) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
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
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
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
                onComelete: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            DeleteDepartment: (id: string, token?: string) => {
                onComelete: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetDepartmentLevels: (direction: "up" | "down", departmentId: string) => {
                onComelete: (func: (data: import("./@types/official").Official[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetDepartments: (owners?: "" | "true", token?: string) => {
                onComelete: (func: (data: import("./@types/official").Official[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
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
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
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
                onComelete: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            DeleteEmployee: (id: string, token?: string) => {
                onComelete: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetEmployees: (token?: string) => {
                onComelete: (func: (data: import("./@types/official").Employee[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
    };
    Cloud: {
        ReadDirectory: (path?: string, token?: string) => {
            onComelete: (func: (data: {
                name: string;
                isDir: boolean;
                size: number;
            }[]) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
            abort: () => void;
        };
        Upload: (body: any, path?: string, token?: string) => {
            onComelete: (func: (data: {
                msg: "FILE_UPLOADED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
            abort: () => void;
        };
        Unlink: (path?: string, token?: string) => {
            onComelete: (func: (data: {
                msg: "FILE_DELETED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
            abort: () => void;
        };
    };
    Data: {
        NLP: {
            fetch: (locale: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            create: (name: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            update: (id: string, name: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            remove: (id: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            train: (id: string, namespace: string, questions: string[], answers: string[], locale: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            ask: (id: string, q: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
        Core: (q: string, locale: string) => {
            onComelete: (func: (data: import("./@types/common").Pagination<{
                _id: string;
                title: string;
                latinTitle?: string | undefined;
                description: string;
                keywords: string;
                locale: string;
            }>) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
            abort: () => void;
        };
        Feeds: {
            Bigbang: {
                posts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                categories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
            };
            Blog: {
                posts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                categories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
            };
            Prays: {
                posts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/pray").Pray) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/pray").Pray>) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/pray").Pray, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/pray").Pray) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/pray").Pray) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/pray").Pray) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                categories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/pray").Pray) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/pray").Pray) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/pray").Pray) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/pray").Pray) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
            };
            FAQ: {
                Doubts: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/doubt").Doubt>) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/doubt").Doubt, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/doubt").Doubt) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                };
                Questions: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/question").Question) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/question").Question>) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/question").Question, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/question").Question) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/question").Question) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/question").Question) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/question").Question) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/question").Question) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/question").Question) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/question").Question) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                };
            };
            Islam: {
                Ethics: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                };
                Beliefs: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                };
                Sharia: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                };
                Civilizations: {
                    posts: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                            onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/post").Post>) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/post").Post, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: any, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                    categories: {
                        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        fetch: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                id: string;
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "UPDATED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        remove: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: {
                                msg: "DELETED";
                            }) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        trash: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        empty: (locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                        restore: (id: string, locale: string, Authorization?: string) => {
                            onComelete: (func: (data: import("./@types/post").Post) => any) => any;
                            onError: (func: (err: any) => any) => any;
                            onChange: (func: (state: boolean) => any) => any;
                            subscribe: () => void;
                            abort: () => void;
                        };
                    };
                };
            };
            Library: {
                posts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/book").Book) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/book").Book>) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/book").Book, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/book").Book) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/book").Book) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/book").Book) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                categories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/book").Book) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/category").Category[]) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/category").Category, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: import("./@types/category").CategoryOption, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/book").Book) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/book").Book) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/book").Book) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
            };
            Main: {
                Sermons: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/sermon").Sermon) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/sermon").Sermon[]) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/sermon").Sermon, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/sermon").Sermon) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/sermon").Sermon) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/sermon").Sermon) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                Meetings: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/meeting").Meeting) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/meeting").Meeting[]) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/meeting").Meeting, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/meeting").Meeting) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/meeting").Meeting) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/meeting").Meeting) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                Statements: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/statement").Statement) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/statement").Statement[]) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/statement").Statement, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/statement").Statement) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/statement").Statement) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/statement").Statement) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                Ansars: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/ansar").Ansar) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/ansar").Ansar[]) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/ansar").Ansar, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/ansar").Ansar) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/ansar").Ansar) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/ansar").Ansar) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                Histories: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/history").History) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/history").History[]) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/history").History, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/history").History) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/history").History) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/history").History) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
            };
            Musics: {
                Tracks: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/track").Track) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/track").Track>) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/track").Track, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/track").Track) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/track").Track) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/track").Track) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                Podcasts: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/podcast").Podcast) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/podcast").Podcast>) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/podcast").Podcast, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/podcast").Podcast) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/podcast").Podcast) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/podcast").Podcast) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
            };
            Reasons: {
                ReasonsFeeds: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/reason").Reason) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/reason").Reason) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/reason").Reason, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/reason").Reason) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/reason").Reason) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/reason").Reason) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                Religions: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/religion").Religion) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/religion").Religion) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/religion").Religion, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/religion").Religion) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/religion").Religion) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/religion").Religion) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
            };
            School: {
                Classes: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/class").Class) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/class").Class>) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/class").Class, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/class").Class) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/class").Class) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/class").Class) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                Lessons: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/lesson").Lesson) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/lesson").Lesson>) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/lesson").Lesson, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/lesson").Lesson) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/lesson").Lesson) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/lesson").Lesson) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                Teachers: {
                    fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/teacher").Teacher) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                        onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/teacher").Teacher>) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    create: (body: import("./@types/teacher").Teacher, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            id: string;
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    update: (id: string, body: any, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "UPDATED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    remove: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: {
                            msg: "DELETED";
                        }) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    trash: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/teacher").Teacher) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    empty: (locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/teacher").Teacher) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    restore: (id: string, locale: string, Authorization?: string) => {
                        onComelete: (func: (data: import("./@types/teacher").Teacher) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
                Chapters: {
                    Passed: (Authorization?: string) => {
                        onComelete: (func: (data: unknown) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    Pass: (lessonId: string, Authorization?: string) => {
                        onComelete: (func: (data: unknown) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                    UnPass: (lessonId: string, Authorization?: string) => {
                        onComelete: (func: (data: unknown) => any) => any;
                        onError: (func: (err: any) => any) => any;
                        onChange: (func: (state: boolean) => any) => any;
                        subscribe: () => void;
                        abort: () => void;
                    };
                };
            };
        };
        Settings: {
            AdjustCluster: (app: string, size: number, locale: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            AdjustFont: (app: string, url: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Refresh: (app: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
        Translations: {
            Translate: (app: string, i18n: import("./@types/common").I18n, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    msg: "TRANSLATED";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            App: (app: string) => {
                onComelete: (func: (data: import("./@types/common").I18nFull) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Locale: (app: string, locale: string) => {
                onComelete: (func: (data: import("./@types/common").I18nFull) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Module: (app: string, locale: string, module: string) => {
                onComelete: (func: (data: import("./@types/common").I18nFull) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            AddLocale: (app: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    msg: "DONE";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            AppLocales: (app: string) => {
                onComelete: (func: (data: string[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            RemoveLocale: (app: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    msg: "DONE";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
    };
    Office: {
        Ads: {
            CreateUserAd: (body: import("./@types/ads").AdBody, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            UpdateUserAd: (body: any, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            SignAds: (token?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            RemoveAd: (id: string, token?: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetDepartmentAds: (from: Date | undefined, to: Date | undefined, signed: boolean, count: boolean, token?: string) => {
                onComelete: (func: (data: import("./@types/ads").Ad[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetUserAds: (from: Date | undefined, to: Date | undefined, signed: boolean, count: boolean, Authorization?: string) => {
                onComelete: (func: (data: import("./@types/ads").Ad[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
        Blazer: {
            Send: (departments: string[], message: string, token?: string) => {
                onComelete: (func: (data: {
                    msg: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Cancel: (id: string, token?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            History: (token?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
        Citizens: {
            CreateLink: (token?: string) => {
                onComelete: (func: (data: {
                    id: string;
                    link: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            DeleteLink: (token?: string) => {
                onComelete: (func: (data: {
                    msg: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Join: (linkHash: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Left: (id: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            ApproveCitizen: (userId: string, token?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            KickCitizen: (userId: string, token?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetUserDepartments: (Authorization?: string) => {
                onComelete: (func: (data: import("./@types/citizen").Citizen[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetDepartmentCitizens: (type: "" | "all" | "lobby", token?: string) => {
                onComelete: (func: (data: import("./@types/citizen").Citizen[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
        Communication: {
            Send: (body: {
                title: string;
                receiver: string;
                content: string;
            }, token?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Remove: (id: string, token?: string) => {
                onComelete: (func: (data: {
                    msg: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Mails: (box: "inbox" | "outbox", token?: string) => {
                onComelete: (func: (data: import("./@types/common").Pagination<import("./@types/letter").Letter>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Mail: (id: string, box: "inbox" | "outbox", token?: string) => {
                onComelete: (func: (data: import("./@types/letter").Letter) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
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
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            Remove: (id: string, token?: string) => {
                onComelete: (func: (data: {
                    msg: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetDepartmentComplaint: (id: string, token?: string) => {
                onComelete: (func: (data: import("./@types/complaint").Complaint) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetUserComplaint: (id: string, Authorization?: string) => {
                onComelete: (func: (data: import("./@types/complaint").Complaint) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetDepartmentComplaints: (keyword?: string, token?: string) => {
                onComelete: (func: (data: import("./@types/complaint").Complaint) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetUserComplaints: (keyword?: string, Authorization?: string) => {
                onComelete: (func: (data: import("./@types/complaint").Complaint) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
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
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            UpdateProject: (id: string, body: {
                title: string;
                dates: Date[];
                repeatType: "daily" | "weekly" | "monthly";
                members: string[];
                questions: [];
            }, token?: string) => {
                onComelete: (func: (data: {
                    msg: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            RemoveProject: (id: string, token?: string) => {
                onComelete: (func: (data: {
                    msg: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetProjects: (token?: string) => {
                onComelete: (func: (data: import("./@types/report").ReportProject[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetUserProjects: (Authorization?: string) => {
                onComelete: (func: (data: import("./@types/report").ReportProject[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            SendUserReport: (projectId: string, id: string, answers?: string[] | undefined, Authorization?: string) => {
                onComelete: (func: (data: {
                    msg: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetProjectReports: (id: string, token?: string) => {
                onComelete: (func: (data: import("./@types/report").Report[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
            GetUserProjectReports: (id: string, Authorization?: string) => {
                onComelete: (func: (data: import("./@types/report").Report[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
                abort: () => void;
            };
        };
    };
};
export default YouthServers;
