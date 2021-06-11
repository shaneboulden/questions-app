import * as React from 'react';

const partners: { name: string, description: string, icon: string }[] = [
  { name: "Development",
    description:"Simplifies how developers write code to use credentials to securely access databases and other sensitive resources with flexible APIs. Code running in OpenShift containers can seamlessly access – and use – the required credentials, which are centrally managed and secured by CyberArk.",
    icon: "/images/developer.png"
  },
  { name: "Operations",
    description: "Automatically secures and rotates secrets used by OpenShift containers based on the organization’s policies managed by the CyberArk platform. This eliminates the need for operations to manually change, populate and provide audit trails for credentials used by containers.",
    icon: "/images/operations.png"
  },
  { name: "Security",
    description: "Separates the duties so that each container-based application only has access to the credentials or secrets needed to access the specific resources they are authorized to access. Policy-based access controls are set by the organization’s security team and managed by the CyberArk platform.",
    icon: "/images/security.png"
  }
]

const tech: { name: string, description: string, icon: string }[] = [
  { name: "Red Hat OpenShift Container Platform",
    description: "Red Hat® OpenShift® offers a consistent hybrid cloud foundation for building and scaling containerized applications. Red Hat OpenShift is trusted by more than 2,000+ customers to deliver business-critical applications, whether they’re migrating existing workloads to the cloud or building new, cutting-edge experiences for their users.",
    expanded: "<p>Red Hat OpenShift is trusted by more than 2,000+ customers to deliver business-critical applications, whether they’re migrating existing workloads to the cloud or building new, cutting-edge experiences for their users. Red Hat OpenShift comes with a 9-year enterprise support lifecycle from one of the leading Kubernetes contributors.</p><br /><p>Red Hat OpenShift offers automated installation, upgrades, and lifecycle management throughout the container stack—the operating system, Kubernetes and cluster services, and applications—on any cloud.</p><br /><p>Red Hat OpenShift helps teams build with speed, agility, confidence, and choice. Code in production mode anywhere you choose to build. Get back to doing work that matters.</p>",
    icon: "/images/redhat-logo.svg"
  },
  { name: "CyberArk Dynamic Access Provider",
    description: "CyberArk Dynamic Access Provider is the Application Access Manager solution for DevOps, Cloud and IaaS. DAP manages application identity in your infrastructure. You can use DAP to control and audit access to cloud resources. With DAP, your teams and your business will be able to continuously deliver new applications and new functionality without compromising the security or compliance of the systems.",
    icon: "/images/cyberark-logo.png"
  },
  { name: "Red Hat Ansible Automation Platform",
    description: "Red Hat Ansible Automation Platform is an enterprise automation platform for the entire IT organization, no matter where you are in your automation journey. Ansible Tower provides agentless, human-readable automation, with the centralised control and role-based access controls required to scale automation across an enterprise like Defence.",
    icon: "/images/redhat-logo.svg"
  },
  { name: "CyberArk Conjur Enterprise",
    description: "CyberArk Conjur Enterprise helps secure credentials built on containers and micr-services using DevOps methodologies. The solution helps developers, IT and information security organisations secure and managed secrets used by applications, containers, CI/CD tools, APIs, and other non-human users throughout the DevOps pipeline.",
    expanded: "<p>CyberArk Conjur Enterprise is a fully featured, enterprise-class solution, backed by CyberArk's world-class support and services organisation.</p>",
    icon: "/images/cyberark-logo.png"
  }
]

export { partners, tech };
